import { Link } from "react-router-dom";
import { Bookmark, CirclePlus, Settings2, Shuffle } from "lucide-react";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { year, runtime, genres, getDirector, getActor, getMusic, poster } from "../data/converter";
import { discoverMovies, getGenres, getLanguages, getMovie } from "../data/tmdb";
import { usePosterd } from "../context/PosterdContext";






const Discover = () => {

    const { movie, setMovie, seen, selectedLanguages, setSelectedLanguages, selectedGenres, setSelectedGenres, toWatchlist, watchlist, isInWatchlist, markSeen, setTasteChosen, tasteChosen } = usePosterd()

    const [showFilter, setShowFilter] = useState(!tasteChosen);

    const [genreOptions, setGenreOptions] = useState([])

    const [languageOptions, setLanguageOptions] = useState([])




    useEffect(() => {
        async function loadOptions() {
            const genresList = await getGenres()
            const languagesList = await getLanguages()
            setGenreOptions(genresList)
            setLanguageOptions(languagesList)

        }

        loadOptions()
    }, [])



    function toggleLanguage(code) {
        if (selectedLanguages.includes(code)) {
            setSelectedLanguages(selectedLanguages.filter((c) => c !== code))
        } else {
            setSelectedLanguages([...selectedLanguages, code])
        }
    }

    function toggleGenre(id) {
        if (selectedGenres.includes(id)) {
            setSelectedGenres(selectedGenres.filter((gId) => gId !== id))
        } else {
            setSelectedGenres([...selectedGenres, id])
        }
    }


    async function roll() {
        const first = await discoverMovies(selectedGenres, selectedLanguages, 1)
        if (first.results.length === 0) return

        const lastPage = Math.min(first.total_pages, 20)


        for (let attempt = 0; attempt < 5; attempt++) {
            const page = Math.floor(Math.random() * lastPage) + 1
            const list = page === 1
                ? first
                : await discoverMovies(selectedGenres, selectedLanguages, page)

            const unseen = list.results.filter(
                (m) => !seen.includes(m.id) && m.id !== movie?.id
            )

            if (unseen.length > 0) {
                const pick = unseen[Math.floor(Math.random() * unseen.length)]
                const full = await getMovie(pick.id)
                setMovie(full)
                return
            }
        }
    }

    function applyTaste() {
        setTasteChosen(true)
        setShowFilter(false)
        roll()
    }

    function closeFilter() {
        setShowFilter(false)
        if (!tasteChosen) {
            setTasteChosen(true)
            roll()
        }
    }





    useEffect(() => {
        if (!tasteChosen) return
        if (!movie || seen.includes(movie.id)) roll()
    }, [])

 if (!movie) {
    return (
        <div className="bg-[#d6d6d1] w-full h-[calc(100dvh-48px)] md:h-[calc(100dvh-58px)] flex items-center justify-center">
            <p className="font-label text-[#5E5E57] text-xs">
                {showFilter ? "CHOOSE YOUR TASTE" : "LOADING…"}
            </p>
            <Filter showFilter={showFilter} setShowFilter={setShowFilter} roll={roll} genreOptions={genreOptions} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} languageOptions={languageOptions} selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} toggleLanguage={toggleLanguage} toggleGenre={toggleGenre} onApply={applyTaste} onClose={closeFilter} />
        </div>
    )
}





    return (
        <div className="bg-[#d6d6d1] w-full">
            <section className="mx-auto max-w-6xl px-4 md:px-6 py-2 md:py-4 h-[calc(100dvh-48px)] md:h-[calc(100dvh-58px)] grid grid-cols-1 md:grid-cols-2  md:gap-x-6">
                <div className='w-full bg-[#F4F4EF]  pt-2 px-2 pb-0 md:p-2 shadow   flex-1 min-h-0 flex flex-col '>
                    <Link className="flex flex-1 w-full min-h-0" to={`/film/${movie.id}`}><div className="min-h-0 flex flex-1 justify-center "><img className='w-full h-full object-cover ' src={poster(movie)} alt="film poster" /></div></Link>
                </div>
                <div className="flex flex-col md:justify-center  md:gap-8 md:col-start-2">
                    <div className='w-full bg-[#F4F4EF] md:bg-transparent md:shadow-none shadow  min-h-0 flex flex-col md:justify-center'>
                        <div className="px-3 pb-3 md:p-0">
                            <div className='grid grid-cols-[6fr_1fr] gap-2 md:border-b md:border-[#B5B5AC] md:py-6'>
                                <h1 className='font-display font-bold text-2xl md:text-7xl uppercase'>{movie.title}</h1>
                                <p className='font-label text-[#5E5E57]  md:text-xl text-right '>{year(movie)}</p>
                            </div>
                            <dl className='grid grid-cols-1 md:grid-cols-2 md:py-6 gap-1 md:gap-4'>
                                <div className="grid grid-cols-[1fr_2fr] md:grid-cols-1 items-baseline gap-1">
                                    <dt className='font-body text-[#5E5E57] text-sm italic'>running time</dt>
                                    <dd className='font-label text-xs uppercase'>{runtime(movie)}</dd>
                                </div>
                                <div className="grid grid-cols-[1fr_2fr] md:grid-cols-1 items-baseline gap-1">
                                    <dt className='font-body text-[#5E5E57] text-sm italic'>directed by</dt>
                                    <dd className='font-label text-xs uppercase'>{getDirector(movie)}</dd>
                                </div>
                                <div className="grid grid-cols-[1fr_2fr] md:grid-cols-1 items-baseline gap-1">
                                    <dt className='font-body text-[#5E5E57] text-sm italic'>music by</dt>
                                    <dd className='font-label text-xs uppercase'>{getMusic(movie)}</dd>
                                </div>
                                <div className="grid grid-cols-[1fr_2fr] md:grid-cols-1 items-baseline gap-1">
                                    <dt className='font-body text-[#5E5E57] text-sm italic'>starring</dt>
                                    <dd className='font-label text-xs uppercase'>{getActor(movie)}</dd>
                                </div>
                            </dl>
                        </div>

                    </div>

                    <div className='flex justify-between items-center py-2 '>
                        <div className='font-label text-sm text-[#5E5E57] truncate min-w-0 flex-1'>{genres(movie)}</div>
                        <div className='flex gap-2'>



                            {isInWatchlist(movie.id) ?
                                (<button className='font-label bg-[#FF5A1f] text-white py-1 px-3 md:py-3 md:px-4 rounded-md shadow-[0_4px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150 flex gap-2 items-center' onClick={() => { setTimeout(() => { toWatchlist(movie) }, 150) }}><Bookmark size={16} color="black" /><span>SAVED</span></button>)
                                : (<button className=' font-label bg-[#F4F4EF] py-1 px-3 md:py-3 md:px-4 rounded-md shadow-[0_4px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150 flex gap-2 items-center' onClick={() => { setTimeout(() => { toWatchlist(movie) }, 150) }}><CirclePlus size={16} color="#FF5A1f" /><span>WATCHLIST</span></button>)
                            }



                            
                            <button className='font-label bg-[#F4F4EF] py-1 px-3 md:py-3 md:px-4 rounded-md shadow-[0_4px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { markSeen(movie.id); roll() }, 150) }}>SEEN</button>
                           
                        </div>
                    </div>
                    <div className="py-1 flex  justify-between gap-2 ">
                        <button className="bg-[#F4F4EF] text-black font-label rounded-3xl pl-4 flex-[3] flex  items-center  gap-2 py-3 text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150" onClick={() => { setTimeout(() => { setShowFilter(true) }, 150) }}><span className="flex p-3  justify-center rounded-full bg-[#C4C4BE]"><Settings2 size={14} /> </span><span>TASTE</span></button>
                        <button className="bg-[#FF5A1f] text-white font-label rounded-3xl px-2 flex-1 flex flex-col items-center justify-center text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150" onClick={() => { setTimeout(() => { roll() }, 150) }}><Shuffle size={14} /><span>ROLL</span></button>
                    </div>
                </div>
            </section>
            <Filter showFilter={showFilter} setShowFilter={setShowFilter} roll={roll} genreOptions={genreOptions} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} languageOptions={languageOptions} selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} toggleLanguage={toggleLanguage} toggleGenre={toggleGenre}  onApply={applyTaste} onClose={closeFilter} />
        </div>
    )
}

export default Discover
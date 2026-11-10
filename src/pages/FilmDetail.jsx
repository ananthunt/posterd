import { Link, useNavigate, useParams } from 'react-router-dom'
import { Bookmark, CirclePlus, Eye } from 'lucide-react'
import { year, runtime, genres, getDirector, getActor, getMusic, poster, detail } from "../data/converter";
import { getMovie } from '../data/tmdb';
import { useEffect, useState, } from 'react';
import { usePosterd } from '../context/PosterdContext';




const FilmDetail = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  const {  seen, setSeen, toWatchlist, isInWatchlist, markSeen } = usePosterd()
  const navigate = useNavigate()

 const [notFound, setNotFound] = useState(false)

   useEffect(() => {
    async function load() {
      setMovie(null)
      setNotFound(false)
      try {
        const full = await getMovie(id)
        setMovie(full)
      } catch {
        setNotFound(true)
      }
    }
    load()
  }, [id])


  if (notFound) {
    return (
      <main className="bg-[#d6d6d1] w-full min-h-[calc(100dvh-58px)] flex flex-col items-center justify-center gap-4">
        <h1 className="font-display font-bold text-2xl uppercase">Film not found</h1>
        <Link to="/discover" className="font-label text-xs text-[#FF5A1f]">← BACK TO DISCOVER</Link>
      </main>
    )
  }

  if (!movie) {
    return (
      <main className="bg-[#d6d6d1] w-full min-h-[calc(100dvh-58px)] flex items-center justify-center">
        <p className="font-label text-[#5E5E57] text-xs">LOADING…</p>
      </main>
    )
  }



return (
  <div className="bg-[#d6d6d1] w-full">
    <section className="mx-auto max-w-6xl px-6 py-10  ">
      <div>
        <button onClick={() => navigate(-1)} className='bg-[#F4F4EF] inline-block text-black font-label rounded-4xl px-4 py-2 font-normal text-[10px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150'>← BACK</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[auto_2fr] py-8 gap-12 md:gap-12 md:items-center'>

        <div className='flex flex-col gap-6 md:max-w-xs'>
          <div className='bg-linear-to-t from-[#C4C4BE] to-[#E7E7E2] p-3 border border-[#B3B3A9] rounded-2xl shadow-md'>
            <div className='flex flex-col '>
              <img className='w-full' src={poster(movie)} alt="poster" />
            </div>
            <div className='flex pt-2 justify-between gap-16'>
              <h1 className='font-display font-bold text-2xl md:text-2xl uppercase'>{movie.title}</h1>
              <p className='font-label text-[#5E5E57]  md:text-base text-right '>{year(movie)}</p>
            </div>

          </div>

          <div className='flex flex-col gap-4'>
            {
              isInWatchlist(movie.id) ?
                (<button className='flex items-center justify-center gap-2 bg-[#FF5A1f] text-white font-label rounded-2xl p-4 font-normal text-[12px] shadow-[0_6px_0_0_#c2410c] active:shadow-[0_2px_0_0_#c2410c] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { toWatchlist(movie) }, 150) }}><Bookmark size={10} /><span>ON YOUR WATCHLIST</span></button>)
                : (<button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-2xl p-4 font-normal text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { toWatchlist(movie) }, 150) }}><CirclePlus size={10} /><span>ADD TO WATCHLIST</span></button>)
            }


            {
              seen.includes(movie.id) ?
                (<button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-2xl p-4 font-normal text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { setSeen((prevSeen) => prevSeen.filter((id) => id !== movie.id)); }, 150) }}><Eye size={10} /><span>SEEN - UNDO</span></button>)
                : (<button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-2xl p-4 font-normal text-[12px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150' onClick={() => { setTimeout(() => { markSeen(movie.id) }, 150) }}><Eye size={10} /><span>MARK AS SEEN</span></button>)

            }
          </div>
        </div>


        <div className='flex flex-col gap-12'>

          <div className='flex flex-col gap-4'>
            <p className='font-label text-xs  text-[#FF5A1f]'>{genres(movie)}</p>
            <p className='font-body text-black text-lg max-w-md'>{detail(movie)}</p>
          </div>



          <dl className='grid grid-cols-1  border-y border-[#B5B5AC] '>
            <div className="grid grid-cols-[1fr_2fr] items-baseline py-4 border-b border-[#B5B5AC] ">
              <dt className='font-label text-[#5E5E57] text-xs'>running time</dt>
              <dd className='font-body font-light'>{runtime(movie)}</dd>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-baseline py-4 border-b border-[#B5B5AC]">
              <dt className='font-label text-[#5E5E57] text-xs '>directed by</dt>
              <dd className='font-body font-light '>{getDirector(movie)}</dd>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-baseline py-4 border-b border-[#B5B5AC]">
              <dt className='font-label text-[#5E5E57] text-xs '>music by</dt>
              <dd className='font-body font-light'>{getMusic(movie)}</dd>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-baseline py-4 ">
              <dt className='font-label text-[#5E5E57] text-xs '>starring</dt>
              <dd className='font-body font-light'>{getActor(movie)}</dd>
            </div>
          </dl>

          <div className='flex flex-col gap-6'>
            <div><span className="font-label bg-black p-2 text-xs font-thin text-[#FF5A1f] " >where to watch</span></div>
            <div className='flex flex-wrap gap-3'>
              <button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-3xl py-3 px-4 font-normal text-[11px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150'><span className='bg-[#FF5A1f] rounded-full p-1 drop-shadow-[0_0_4px_rgba(255,90,31,1)] '></span><span>apple tv</span></button>
              <button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-3xl py-3 px-4 font-normal text-[11px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150'><span className='bg-[#FF5A1f] rounded-full p-1 drop-shadow-[0_0_4px_rgba(255,90,31,1)] '></span><span>prime video</span></button>
              <button className='flex items-center justify-center gap-2 bg-[#F4F4EF] text-black font-label rounded-3xl py-3 px-4 font-normal text-[11px] shadow-[0_6px_0_0_#B3B3A9] active:shadow-[0_2px_0_0_#B3B3A9] active:translate-y-1 transition-all duration-150'><span className='bg-[#FF5A1f] rounded-full p-1 drop-shadow-[0_0_4px_rgba(255,90,31,1)] '></span><span>showtime</span></button>

            </div>
          </div>
        </div>
      </div>

    </section>

  </div>
)
}

export default FilmDetail
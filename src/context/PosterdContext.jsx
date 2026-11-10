import { createContext, useContext, useEffect, useState } from 'react'


const PosterdContext = createContext();



function load(key, fallback) {
    try {
        const saved = localStorage.getItem(key)
        return saved === null ? fallback : JSON.parse(saved)
    } catch {
        return fallback
    }
}


function save(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        // ignore
    }
}


const KEEP_JOBS = ['Director', 'Original Music Composer', 'Music', 'Composer']

function slim(mov) {
    if (!mov) return null
    return {
        id: mov.id,
        title: mov.title,
        release_date: mov.release_date,
        runtime: mov.runtime,
        poster_path: mov.poster_path,
        genres: mov.genres,
        credits: {
            cast: (mov.credits?.cast ?? []).slice(0, 5),
            crew: (mov.credits?.crew ?? []).filter((person) => KEEP_JOBS.includes(person.job)),
        },
    }
}






export function PosterdProvider({ children }) {

const [movie, setMovie] = useState(() => load('posterd:movie', null))
    const [seen, setSeen] = useState(() => load('posterd:seen', []))
    const [selectedLanguages, setSelectedLanguages] = useState(() => load('posterd:languages', []))
    const [selectedGenres, setSelectedGenres] = useState(() => load('posterd:genres', []))
    const [watchlist, setWatchlist] = useState(() => load('posterd:watchlist', []))
    const [tasteChosen, setTasteChosen] = useState(() => load('posterd:tasteChosen', false))

  
    useEffect(() => { save('posterd:movie', slim(movie)) }, [movie])
    useEffect(() => { save('posterd:seen', seen) }, [seen])
    useEffect(() => { save('posterd:languages', selectedLanguages) }, [selectedLanguages])
    useEffect(() => { save('posterd:genres', selectedGenres) }, [selectedGenres])
    useEffect(() => { save('posterd:watchlist', watchlist) }, [watchlist])
    useEffect(() => { save('posterd:tasteChosen', tasteChosen) }, [tasteChosen])

function markSeen(id) {
    setSeen((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setWatchlist((prev) => prev.filter((f) => f.id !== id))
}


function isInWatchlist(id){
   return watchlist.some((mov)=>mov.id===id)
}

function toWatchlist(mov){5454545454
    if(isInWatchlist(mov.id)){
        setWatchlist(watchlist.filter((f)=>f.id!=mov.id))
    }
    else{
        setWatchlist([...watchlist,mov])
    }
}


    return (
        <PosterdContext.Provider value={{ movie, setMovie, seen, setSeen, selectedLanguages, setSelectedLanguages, selectedGenres, setSelectedGenres, watchlist, setWatchlist, isInWatchlist, toWatchlist, markSeen, tasteChosen, setTasteChosen  }}>
            {children}
        </PosterdContext.Provider>
    )
}


export function usePosterd() {
    return useContext(PosterdContext)
}
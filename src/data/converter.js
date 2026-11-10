


export function year(movie) {
    return movie.release_date.slice(0, 4)
}

export function detail(movie) {
    return movie.overview
}


export function runtime(movie) {
    return `${movie.runtime} minutes`
}

export function genres(movie) {
    return movie.genres.map((type) => type.name).slice(0, 2).join("/")
}

export function poster(movie) {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
}


export function getDirector(movie) {
    const director = movie?.credits?.crew?.filter(role => (role.job === "Director"))?.map((direct) => direct.name)
    return director?.length ? director.join(", ") : "Unknown Director"
}


export function getActor(movie) {
    const actor = movie?.credits?.cast?.map((act) => act.name).slice(0,4)
    return actor?.length ? actor.join(", ") : "Unknown Actors"
}

export function getMusic(movie) {
    const composer = movie?.credits?.crew?.filter(role => (role.job === "Original Music Composer"))?.map((compose) => compose.name)
    return composer?.length ? composer.join(", ") : "Unknown Composer"
} 



const languageNames = new Intl.DisplayNames(["en"],{type:"language"})
export function originalLanguage(movie){
    const code=movie?.original_language
    if(!code) return "Unknown Language"
    return languageNames.of(code)?? code
}
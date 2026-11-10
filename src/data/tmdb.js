const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

async function tmdbFetch(path) {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
        },
    })

    if (!res.ok) {
        throw new Error(`TMDB error ${res.status}`)
    }

    return res.json()
}
 
export async function getGenres() {
    const data = await tmdbFetch("/genre/movie/list")
    return data.genres
}

export async function getLanguages() {
    const data = await tmdbFetch("/configuration/languages")

    const list = data
        .filter((lang) => lang.iso_639_1 !== "xx")
        .map((lang) => ({
            code: lang.iso_639_1,
            name: lang.english_name,
        }))

    list.sort((a, b) => a.name.localeCompare(b.name))
    return list
}


export async function discoverMovies(genres, languages, page) {
    const params = new URLSearchParams({
        sort_by: "popularity.desc",
        include_adult: "false",
        "vote_count.gte": "50",
        page: page,
    })

    if (genres.length > 0) {
        params.set("with_genres", genres.join("|"))
    }

    if (languages.length > 0) {
        params.set("with_original_language", languages.join("|"))
    }

    return tmdbFetch(`/discover/movie?${params}`)
}

export async function getMovie(id) {
    return tmdbFetch(`/movie/${id}?append_to_response=credits`)
}
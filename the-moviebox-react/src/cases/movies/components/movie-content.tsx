import { useEffect, useState } from "react"
import { MovieService, type MovieDTO } from "../services/movie.service"

export function MovieContent() {

    const [movies, setMovies] = useState<MovieDTO[]>([]);

    useEffect(()=> {
        MovieService.list()
            .then((result) => {
                setMovies(result)
            })

    }, []);

    return (
        <section 
            className="
                bg-[#1c1c1c] p-8 grid 
                grid-cols-[repeat(auto-fill, minmax(200px, 1fr))] 
                gap-8 max-w-6xl mx-auto
            "
        >

            <p>{JSON.stringify(movies)}</p>

        </section>
    )
}
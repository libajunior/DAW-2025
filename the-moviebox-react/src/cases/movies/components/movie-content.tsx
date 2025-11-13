import { useEffect, useState } from "react"
import { MovieService, type MovieDTO } from "../services/movie.service"
import { MovieCard } from "./movie-card";

export function MovieContent() {

    const [movies, setMovies] = useState<MovieDTO[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=> {
        setIsLoading(true);

        MovieService.list()
            .then((result) => {
                setMovies(result);                                
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, []);

    return (
        isLoading ? (
            <div className="bg-[#1c1c1c] flex justify-center items-center h-40">
                <p className="text-2xl text-center text-white">Carregando...</p>
            </div>
        ) : (
            <section 
                className="
                    bg-[#1c1c1c] p-8 grid 
                    grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                    gap-8 max-w-6xl mx-auto
                "
            >

                {movies.map((movie, index)=>(
                    <MovieCard key={index} movie={movie} />
                ))}

            </section>
        )
    )
}
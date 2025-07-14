// Two dots are used to because we are currently 
// in different directory, they are used to go back one level up
import MovieCard from '../components/MovieCard'


function Home() {
    const movies = [
        { id: 1, title: 'John Wick', release_date: '2020' },
        { id: 2, title: 'Terminator', release_date: '1999' },
        { id: 3, title: 'Matrix', release_date: '2022' }
    ]

    return <div className="home">
        <div className='movies-grid'>
            //.map will iterate over the moveis array and pass each movie to the arrow function
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        
        </div>



    </div>
}

export default Home
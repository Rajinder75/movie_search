// Two dots are used to because we are currently 
// in different directory, they are used to go back one level up
import MovieCard from '../components/MovieCard'
import { useState } from "react";


function Home() {
    //searchQuery is a state variable that will hold the value of the search input, while setSearchQuery
    // is a function that will update the value of searchQuery
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: 'John Wick', release_date: '2020' },
        { id: 2, title: 'Terminator', release_date: '1999' },
        { id: 3, title: 'Matrix', release_date: '2022' }
    ]

    const handleSearch = () => {
        alert(searchQuery);
    }

    //everytime the state changes, the component will re-render
    return <div className="home">
        <div className='movies-grid'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            //.map will iterate over the moveis array and pass each movie to the arrow function
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                // key is used to uniquely identify each element in the list
            ))}

        </div>
    </div>
}

export default Home
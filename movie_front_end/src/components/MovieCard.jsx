function MovieCard({movie}){

    function onFavoriteClick(){
        alert("clicked")
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className ="favourite-btn" onClick={onFavoriteClick}>
                        "❤️"
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
            
        </div>
    )
}

//The below line of code exports the MovieCard component 
// so it can be used in other files.
export default MovieCard
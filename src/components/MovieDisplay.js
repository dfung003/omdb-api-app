export default function MovieDisplay({ movie }) {
    const loaded = () => {
        return (
            // <div className="card-outer">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="container">
                    <h3>{movie.Title}</h3>
                    <h4>{movie.Genre}</h4>
                    <h4>{movie.Year}</h4>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }


    return movie && movie.Title ? loaded() : loading();
}
import star from "../img/star.svg" 

function MovieList({filmas}){


  
    return (
    <div>
         {
           
             <div className="filmuTevas">
                <img className="filmuVaikas vaikasMazas" src={`https://image.tmdb.org/t/p/original/${filmas.poster_path}`} alt="pic" />
                <div className="filmuVaikas vaikasDidelis">
                    <h1>{filmas.title}</h1>
                    <i>Original language: {filmas.original_language.toUpperCase()}</i>
                    <div className="reitingai">
                        <img className="star" style={{ width: "45px", height: "45px" }} src={star} alt="star"></img>
                        <div className="vote" >
                            <div className="vote2">
                                <h2>{filmas.vote_average}</h2>
                                <h4>/{filmas.vote_count}</h4>
                            </div>
                            <p>{filmas.popularity} votes</p>
                        </div>
                    </div>    
                    <p>{filmas.overview} </p>
                </div>
             </div>
         }


         
    </div>
    )
}

export default MovieList;
import { useEffect, useState } from "react";
import Card from "../../components/card";


const Games = () =>{

    const[games, setGames] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/games")
        .then(response => response.json())
        .then(data => setGames(data));
    }, []);

    return(
        <section className="gamesContainer">
           { games.map((games) => 
              <Card
                title={games.title}
                short_description={games.short_description}
                thumbnail={games.thumbnail}
                release={games.release_date}
                developer={games.developer}
                genre={games.genre}
            />
            )}
        </section>
    )
}

export default Games;
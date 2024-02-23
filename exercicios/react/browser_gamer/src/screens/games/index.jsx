import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./styles.css"


const Games = () =>{

    const[games, setGames] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/games")
        .then(response => response.json())
        .then(data => setGames(data));
    }, []);

    return(
        <div className="Games">
        <section className="gamesContainer">
           { games.map((games) => 
              <Card
                title={games.title}
                short_description={games.short_description}
                thumbnail={games.thumbnail}
                key={games.id}
            />
            )}
        </section>
        </div>
    )
}

export default Games;
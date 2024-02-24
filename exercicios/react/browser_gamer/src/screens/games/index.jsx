import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./styles.css";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="Games">
      <div className="gamesContainer">
        <section className="games_section">
          {games.map((games) => (
            <Card
              title={games.title}
              short_description={games.short_description}
              thumbnail={games.thumbnail}
              key={games.id}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Games;

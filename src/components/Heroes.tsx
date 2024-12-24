import { useEffect, useState } from "react";
import { HeroCard } from "./HeroCard";
import { RoleFilter } from "./RoleFilter"; // make sure this import exists
import { fetchHeroes } from "../services/FetchHeroes";
import { Heroes as IHeroes, Tag } from "../services/Heroes";
import { SkeletonCard } from "./SkeletonCard";

export const Heroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<Tag | "ALL">("ALL");

  useEffect(() => {
    const getHeroes = async () => {
      const data = await fetchHeroes();
      setHeroes(data);
      setLoading(false);
    };

    getHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) =>
    activeFilter === "ALL" ? true : hero.tag === activeFilter
  );

  if (loading)
    return (
      <div className="heroes-container">
        <h1>Marvel Rivals Heroes</h1>
        <RoleFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <div className="heroes-grid">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="heroes-container">
      <h1>Marvel Rivals Heroes</h1>
      <RoleFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="heroes-grid">
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

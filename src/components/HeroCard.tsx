import { useNavigate } from "react-router-dom";
import { Heroes } from "../services/Heroes";

interface HeroCardProps {
  hero: Heroes;
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="hero-card" onClick={() => navigate(`/hero/${hero.id}`)}>
      <img src={hero.images[1]} alt={hero.title} className="hero-image" />
      <div className="hero-info">
        <h3>{hero.title}</h3>
        <span className="hero-tag">{hero.tag}</span>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHeroDetail } from "../services/FetchHeroes";
import { HeroDetail as IHeroDetail } from "../services/HeroDetail";

export default function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState<IHeroDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHeroDetail = async () => {
      if (id) {
        const data = await fetchHeroDetail(id);
        setHero(data);
        setLoading(false);
      }
    };

    getHeroDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!hero) return <div>Hero not found</div>;

  return (
    <div className="hero-detail">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${hero.images[2]})` }}
      >
        <div className="banner-overlay">
          <div className="hero-header">
            <h1>{hero.title}</h1>
            <h2>{hero.name}</h2>
            <div className="hero-tag">{hero.tag}</div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-description">
          <h3>Description</h3>
          <p>{hero.description}</p>
        </div>

        <div className="hero-lore">
          <h3>Lore</h3>
          <p>{hero.lore}</p>
        </div>

        <div className="hero-covers">
          {hero.covers.map((cover, index) => (
            <img
              key={index}
              src={cover}
              alt={`${hero.title} cover ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-stats">
          <h3>Stats</h3>
          <div className="stats-grid">
            {hero.stats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="stat-title">{stat.title}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            {hero.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    className="skill-icon"
                  />
                  <div className="skill-title-group">
                    <h4>{skill.title}</h4>
                    <span className="skill-key">{skill.key}</span>
                  </div>
                </div>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-infos">
                  {skill.infos.map((info, infoIndex) => (
                    <div key={infoIndex} className="skill-info">
                      <span className="info-title">{info.title}:</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

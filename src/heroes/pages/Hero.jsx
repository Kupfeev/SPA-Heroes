import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {

  const {id} = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();
  const navigateBack = hero =>  
  hero.publisher === "Marvel Comics" ? "/marvel" : 
  hero.publisher === "DC Comics" ? "/dc" :
  -1; // -1 means to get back to the last page.

  const onBackButton = () => {
    navigate(navigateBack(hero))
  };

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeIn" 
        src={`/heroes/${id}.jpg`}
        alt={hero.superhero} 
      />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{hero.first_appearance}</li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onBackButton}
        >
          Back
        </button>
      </div>
    </div>
  )
}

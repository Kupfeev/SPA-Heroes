import { HeroCard } from "./HeroCard"

export const HeroSearch = ({q = "", filteredHeroes = {}}) => {

    const searchAlertDisplay = () => {
        
        if (q === "") {
            return (
                <div className="alert alert-primary animate__animated animate__fadeIn">
                    Search a hero
                </div>
            )
        } else if (q !== "" && filteredHeroes.length === 0) {
            return (
                <div className="alert alert-danger animate__animated animate__fadeIn">
                    No hero found with <b>{q}</b>
                </div>
            )
        } else {
            return (
                filteredHeroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            )
        }
    }

  return (
    <>{searchAlertDisplay()}</>
  )
}

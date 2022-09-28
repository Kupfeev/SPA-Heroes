import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <>
    <h2 className="mt-3">Dc Heroes</h2>
    <hr />
    <HeroList publisher='DC Comics'/>
    </>
  )
}
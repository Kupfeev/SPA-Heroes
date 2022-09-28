import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h2 className="mt-3">Marvel Heroes</h2>
    <hr />
    <HeroList publisher='Marvel Comics'/>
    </>
  )
}

import { useLocation, useNavigate } from "react-router";
import queryString from 'query-string';

import { getHeroesByName } from "../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroSearch } from "../components/HeroSearch";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ""} = queryString.parse(location.search);
  const filteredHeroes = getHeroesByName(q);
  
  const {searchText, onInputChange, onResetForm} = useForm({
  searchText: '',
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
    onResetForm();
  };

  return (
    <>
      <h2 className="mt-3">Search</h2>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Look for your favorite hero!</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Hero name"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <HeroSearch q={q} filteredHeroes={filteredHeroes} />
        </div>
      </div>
    </>
  )
}

import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import SearchBar from './component/SearchBar';
import { useEffect, useState } from 'react';
import countries from "./component/utils/country"

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [sugg, setSugg] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSugg([]);
    } else {
      let newListOfSugg = countries
        .filter((item) =>
          item.country.toLowerCase()
          .indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSugg(newListOfSugg);
    }
    setTimeout(() => setLoading(false), 1000);
  }, [query]);
//console.log(countries)

  return (
    <div className="App">
      <h1>Search Bar</h1>
      {/* <div>Query is: {query}</div> */}
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        sugg={sugg}
        onChange={(val) => setQuery(val)}
      />
    </div>
  );
}

export default App;

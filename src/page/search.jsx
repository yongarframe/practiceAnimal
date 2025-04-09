import { Link, useLocation, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";

function Search() {
  const [searchParms] = useSearchParams();
  const params = searchParms.get("animal");
  const reg = getRegExp(params);
  console.log(useLocation().search);

  const filteredData = data.filter((el) => el.name.match(reg));

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`detail/${el.id}`}>
            <img src={el.img}></img>
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Search;

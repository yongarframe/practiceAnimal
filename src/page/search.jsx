import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { useEffect, useRef, useState } from "react";

function Search() {
  const [searchParms] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const params = searchParms.get("animal");
  const reg = getRegExp(params);

  // useEffect(() => { // debounce
  //   const debounceTimeer = setTimeout(() => {
  //     const newfilteredData = data.filter((el) => el.name.match(reg));
  //     setFilteredData(newfilteredData);
  //   }, 1000);
  //   return () => clearTimeout(debounceTimeer);
  // }, [params]);
  // const time = useRef(new Date());

  useEffect(() => {
    //throttle
    const newTime = new Date();
    const debounceTimeer = setTimeout(() => {
      const newfilteredData = data.filter((el) => el.name.match(reg));
      setFilteredData(newfilteredData);
      time.current = new Date();
    }, 1000 - (newTime - time.current));
    return () => clearTimeout(debounceTimeer);
  }, [params]);

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

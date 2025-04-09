import { Link, useLocation } from "react-router-dom";
import { data } from "../assets/data/data";

function Main() {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {data.map((el) => (
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

export default Main;

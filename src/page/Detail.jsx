import { useParams } from "react-router-dom";
import { data } from "../assets/data/data";

function Deatil() {
  const params = useParams();
  console.log(params);
  // console.log(data);
  const animalData = data.find((el) => el.id === Number(params.id));
  // console.log(animalData);
  return (
    <section className="detail">
      <img src={animalData.img} />
      <h2>{animalData.name}</h2>
      <div>{animalData.description}</div>
    </section>
  );
}

export default Deatil;

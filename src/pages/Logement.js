import '../styles/sass/pages/Home.scss';
import { useParams } from "react-router-dom";



function Logement() {
    const {id} = useParams()
  return (
    <h1>Page logement : {id}</h1>
  );
}

export default Logement;

import '../styles/sass/pages/Error.scss';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Error() {
  return (
    <div className="error">
      <Header/>
      <h1>404</h1>
      <p className="error-text">Oups! La page que vous demandez n'existe pas</p>
      <Link to="/" className="error-returnHomepage">Retourner sur la page d'accueil</Link>
      <Footer/>
    </div>
  );
}

export default Error;
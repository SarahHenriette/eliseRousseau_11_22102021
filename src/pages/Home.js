import '../styles/sass/pages/Home.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Galerie from '../components/Galerie'


function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Galerie />
      <Footer />
    </div>
  );
}

export default Home;

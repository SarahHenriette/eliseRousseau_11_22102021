import '../styles/sass/pages/Home.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Galerie from '../components/Galerie'
import img from './../assets/bannerHomepage.png'

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner background={img} title="Chez vous, partout et ailleurs"/>
      <Galerie />
      <Footer />
    </div>
  );
}

export default Home;

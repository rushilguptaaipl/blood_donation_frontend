import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="wrapper-home">
        <header class="header">
          <h1 class="title">Blood Donation</h1>
        </header>

        <main class="main">
          <section class="section">
            <h2 class="section-title">Welcome to Blood Donation Portal</h2>
            <p class="section-text">Donate blood and save lives!</p>
            <p class="section-text">This website is created as a part of college Project and is created by Rushil Gupta.</p>
            <p class="section-text">For souce code contact <a href="mailto:rushil.gupta3@gmail.com">rushil.gupta3@gmail.com</a></p>
            <div class="buttons">
              <Link to="/emergency" class="button">
                Emergency
              </Link>
              <Link to="/donation" class="button">
                Donation
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Home;

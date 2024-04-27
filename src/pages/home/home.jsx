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
            <h2 class="section-title">Welcome to Blood Donation Center</h2>
            <p class="section-text">Donate blood and save lives!</p>
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

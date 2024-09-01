import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "./page.module.css";

import { Hero, Skills, Projects, Contact } from "src/pages/home-page/home-page";
import LatestPosts from "src/pages/blog-home/latest-posts";

const Home = () => {
  return (
    <main className={styles.mainArea}>
      <header>
        <Navbar />
      </header>
      <main className={`${styles.loadAnimation} ${styles.mainContent}`}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <LatestPosts />
      </main>
    </main>
  );
};

export default Home;

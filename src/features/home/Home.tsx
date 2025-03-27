import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

const Home = () => {
    return (
        <main className="min-h-screen flex flex-col gap-12">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;

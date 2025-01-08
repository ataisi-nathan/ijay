import Articles from "../components/articles";
import Experience from "../components/experience";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";

function Home() {
    return(
        <>
            <Hero />
            <Articles />
            <Projects />
            <Experience />
            <Skills />
        </>
    )
}
export default Home;
import { useState } from 'react'
import { NavbarLink } from './components/NavbarLink' 
import { TitleHighlighted} from "./components/TitleWithHighlightedSection"
import { ContactLink } from './components/ContactLink' 
import { AboutMe } from './components/AboutMe'

function App() {
  const [page,setPage] = useState("Home");

  const handleNavHome = () =>{
    setPage("Home");
    console.log(page)
  }
  const handleNavAboutMe = () =>{
    setPage("AboutMe");
    console.log(page)
  }
  return (
    page === "Home" ? <>
      <header className="header">
        <nav className="header-menu">
            <NavbarLink
              link={"index.html"}
              text={"Home"}
              onClick={handleNavHome}>
            </NavbarLink>
            <NavbarLink
              link={"about.html"}
              text={"About me"}
              onClick={handleNavAboutMe}
              >
            </NavbarLink>
        </nav>
      </header>
      <main className="container">
        <section className="left-container">
        <TitleHighlighted
          normalText={"Elevate Your Software Solutions with a "}
          textHighlighted={"Skilled Back-End Developer!"}>
        </TitleHighlighted>
        <p className="description-container">
        Hi! I'm Oscar Arismendi, a Back-end Developer with expertise in Spring Boot, Java, SQL databases and React. I help businesses and teams build robust and innovative software solutions. Shall we talk?
        </p>
        <div className="links-container">
                <h2 className="links-container-subtitle">Access my social profiles:</h2>
                <ContactLink
                  link={"https://www.linkedin.com/in/oscar-arismendi/"}
                  imagePath={"src/assets/linkedin.png"}
                  text={"LinkedIn"}
                  >
                </ContactLink>
                <ContactLink
                  link={"https://github.com/oscarArismendi"}
                  imagePath={"src/assets/github.png"}
                  text={"Github"}
                  >
                </ContactLink>
        </div>
        </section>
        <img id="profile-picture" src="src/assets/Imagen.png" alt="Imagen de Ana García trabajando."></img>
      </main>
    </> : <AboutMe></AboutMe>
  )
}

export default App

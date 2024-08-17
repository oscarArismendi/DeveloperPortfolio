import { TitleHighlighted} from "./TitleWithHighlightedSection"
import { ContactLink } from './ContactLink' 
import { Header } from './Header'
import { Footer } from './Footer'
export const Home = () =>{

  return (<>
      <Header></Header>
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
      <Footer></Footer>
    </> 
  )
}
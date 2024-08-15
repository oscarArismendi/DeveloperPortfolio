
import { NavbarLink } from "./NavbarLink"; 

export const AboutMe = () => {
    return (
        <>
            <header className="header">
                <nav className="header-menu">
                    <NavbarLink
                        link={"index.html"}
                        text={"Home"}
                        onClick="handleNav()">
                    </NavbarLink>
                    <NavbarLink
                        link={"about.html"}
                        text={"About me"}
                        onClick="handleNav()"
                    >
                    </NavbarLink>
                </nav>
            </header>
            <main className="container">
                <section className="left-container">
                    <h1 className="container-title">Sobre mí</h1>
                    <p className="description-container">As a developer and electronics engineer, dedicated to creating solutions that make a difference. My journey in tech is fueled by a deep commitment to innovation and teamwork, utilizing my skills in Spring Boot, Java, SQL databases and React.</p>
                    <p className="description-container">I prioritize effective communication, leadership, and continuous improvement to achieve both personal and professional excellence.</p>
                </section>
                <img id="profile-picture" src="assets/Imagen.png" alt="Imagen de Ana García trabajando." />

            </main>
            <footer className="footer">
                <p>Desarrollado por Oscar Arismendi</p>
            </footer>
        </>
    );
}
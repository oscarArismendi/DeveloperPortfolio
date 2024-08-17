import { Header } from './Header'
import { Footer } from './Footer'
export const AboutMe = () => {
    return (
        <>
            <Header></Header>
            <main className="container">
                <section className="left-container">
                    <h1 className="container-title">About me</h1>
                    <p className="description-container">As a developer and electronics engineer, dedicated to creating solutions that make a difference. My journey in tech is fueled by a deep commitment to innovation and teamwork, utilizing my skills in Spring Boot, Java, SQL databases and React.</p>
                    <p className="description-container">I prioritize effective communication, leadership, and continuous improvement to achieve both personal and professional excellence.</p>
                </section>
                <img id="profile-picture" src="./src/assets/Imagen.png" alt="Imagen de Ana García trabajando." />

            </main>
        <Footer></Footer>
        </>
    );
}
import { Header } from './Header'
import { Footer } from './Footer'
import profilePicture from '../assets/formarCamisaAzulSonriente.jpeg';
import mysqlLogo from "../assets/mysql-logo.svg"
import postgreSql from "../assets/postgresql.svg"
import springBootLogo from "../assets/spring-boot.svg"
export const AboutMe = () => {
    return (
        <>
            <Header></Header>
            <main className="container">
                <section className="left-container">
                    <h1 className="container-title">About me</h1>
                    <p className="description-container">As a developer and electronics engineer, dedicated to creating solutions that make a difference. My journey in tech is fueled by a deep commitment to innovation and teamwork, utilizing my skills in Spring Boot, Java, SQL databases and React.</p>
                    <p className="description-container">I prioritize effective communication, leadership, and continuous improvement to achieve both personal and professional excellence.</p>
                    <section className="skills" id="skills">
                        <h2 className="heading">My <span>Skills</span></h2>

                        <div className="skills-container">
                            <div className="skills-box">
                                <i className="fa-brands fa-html5"></i>
                                <h3>HTML</h3>
                            </div>

                            <div className="skills-box">
                                <i className="fa-brands fa-css3-alt"></i>
                                <h3>CSS</h3>
                            </div>

                            <div className="skills-box">
                                <i className="fa-brands fa-square-js"></i>
                                <h3>JavaScript</h3>
                            </div>

                            <div className="skills-box">
                                <i className="fab fa-python"></i>
                                <h3>Python</h3>
                            </div>

                            <div className="skills-box">
                                <img src={mysqlLogo} alt="MySql" className="mysql-icon" />
                                <h3>MySql</h3>
                            </div>


                            <div className="skills-box">
                                <img src={postgreSql} alt="PostgresSql" className="postgres-icon" />
                                <h3>PostgreSql</h3>
                            </div>

                            <div className="skills-box">
                                <img src={springBootLogo} alt="Spring" className="spring-icon" />
                                <h3>SpringBoot</h3>
                            </div>

                            <div className="skills-box">
                                <i className="fa-brands fa-java"></i>
                                <h3>Java</h3>
                            </div>
                            <div className="skills-box">
                                <i className="fa-brands fa-react"></i>
                                <h3>React</h3>
                            </div>

                        </div>
                    </section>
                </section>
                <img id="profile-picture" src={profilePicture} alt="Imagen de Oscar Arismendi"></img>

            </main>
            <Footer></Footer>
        </>
    );
}
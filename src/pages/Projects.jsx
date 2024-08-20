
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Project } from "../components/Project";

import videoAICar from "../assets/carAIProject.webm"
import videoRestaurant from "../assets/restaurantLanding2024.webm";
import videoSnakeGame from  "../assets/snakeGame.webm";
import automotiveImage from "../assets/automotrizDiagramaER.png";
import travelAgencyImage from "../assets/travelAgency.jpg";

export const Projects = () => {
    return (
        <>
            <Header></Header>
            <Project
                videoUrl={videoAICar}
                title={"AI-Driven Car Simulation"}
                description={
                    <>
                        <p>I developed an AI-driven car simulation using JavaScript, HTML, and CSS. In this project, I implemented a neural network that controls multiple cars as they navigate through a simulated road.</p>
                        <p>The cars learn to drive autonomously by avoiding collisions with other vehicles. The project features a mutation process where the AI's performance is continuously improved based on its ability to avoid traffic.</p>
                        <p>I utilized local storage to save and retrieve the best-performing neural network, allowing the simulation to evolve over time. This project demonstrates my skills in AI, neural networks, and dynamic visualizations.</p>
                    </>}
                useTechnologies={["HTML", "CSS", "JavaScript"]}
                linkChildren={
                    <>
                        <a href="https://github.com/oscarArismendi/map-project" className="link-button">Repository</a>
                        <a href="https://map-project-three.vercel.app/" className="link-button">Page</a>
                    </>
                }
            ></Project>
            <Project
                videoUrl={videoRestaurant}
                title={"RESTAURANT LANDING PAGE"}
                description={
                    <>
                        <p>I created a responsive landing page for a restaurant using HTML, CSS, and JavaScript. The design adapts seamlessly to different screen sizes, providing an optimal viewing experience on mobile devices, tablets, and desktops</p>
                        <p>The page features a visually appealing layout with a menu section, image gallery, and contact form, all tailored to enhance user engagement and showcase the restaurant's offerings.</p>
                    </>}
                useTechnologies={["HTML", "CSS", "JavaScript"]}
                linkChildren={
                    <>
                        <a href="https://github.com/oscarArismendi/proyectoFinalHTMLYCSS" className="link-button">Repository</a>
                        <a href="https://oscararismendi.github.io/proyectoFinalHTMLYCSS/" className="link-button">Page</a>
                    </>
                }
            ></Project>
            <Project
                videoUrl={videoSnakeGame}
                title={"SNAKE GAME"}
                description={
                    <>
                        <p>I created a classic Snake game using HTML, CSS, and JavaScript. The game features smooth controls and responsive gameplay, where players guide a snake to eat food, causing it to grow longer. The game increases in difficulty as the snake speeds up with each food item consumed.</p>
                        <p>I implemented collision detection to end the game when the snake runs into itself, and a high score system that keeps track of the player's best performance. The game's interface is clean and minimalist, with visual and audio feedback for a more engaging experience.</p>
                    </>}
                useTechnologies={["HTML", "CSS", "JavaScript"]}
                linkChildren={
                    <>
                        <a href="https://github.com/oscarArismendi/snakeGamePage" className="link-button">Repository</a>
                        <a href="https://oscararismendi.github.io/snakeGamePage/" className="link-button">Page</a>
                    </>
                }
            ></Project>
            <Project
                imageUrl={automotiveImage}
                title={"AUTOMOTIVE DEALERSHIP DATABASE"}
                description={
                    <>
                        <p>Designed and implemented a comprehensive database system for an automotive dealership using MySQL. The project involved creating a normalized database structure to efficiently manage various aspects of the dealership's operations.</p>
                        <p>This includes tables for vehicles, customers, sales, and employees, along with relationships between them to ensure data integrity and optimize query performance.</p>
                        <p>I also developed several SQL queries to retrieve key business insights, such as sales trends and inventory management. The database design supports scalability and is tailored to meet the specific needs of an automotive business.</p>
                    </>}
                useTechnologies={["MySQL"]}
                linkChildren={
                    <>
                        <a href="https://github.com/oscarArismendi/DBAutomotrizOscarArismendi" className="link-button">Repository</a>
                    </>
                }
            ></Project>
            <Project
                imageUrl={travelAgencyImage}
                title={"TRAVEL AGENCY MANAGEMENT SYSTEM"}
                description={
                    <>
                        <p>I developed a full-featured management system for a travel agency using Java and MySQL. This project involves designing a relational database to manage customer information, bookings, destinations, and payments.</p>
                        <p>The system includes a Java-based application that interacts with the MySQL database to perform CRUD operations, generate reports, and streamline the agency’s workflow.</p>
                        <p>By implementing business logic in Java, I ensured the application meets the specific needs of a travel agency, providing a user-friendly interface and robust backend for data management.</p>
                    </>}
                useTechnologies={["MySQL","Java"]}
                linkChildren={
                    <>
                        <a href="https://github.com/oscarArismendi/travel_agency" className="link-button">Repository</a>
                    </>
                }
            ></Project>
            <Footer></Footer>
        </>
    );
}
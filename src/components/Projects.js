import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/news.jpg";
import projImg2 from "../assets/img/food.jpg";
import projImg3 from "../assets/img/notes.jpg";
import projImg4 from "../assets/img/chat.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "NewsMonkey",
            description: "A News App",
            imgUrl: projImg1,
        },
        {
            title: "Foodiez",
            description: "Food Ordering & Delivering Website",
            imgUrl: projImg2,
        },
        {
            title: "iNotebook",
            description: "Make your own notes",
            imgUrl: projImg3,
        },
        {
            title: "Chit-Chat App",
            description: "Chat Anywhere Anytime",
            imgUrl: projImg4,
        },
        {
            title: "Covid Info Website",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                <h2>Projects</h2>
                <p>These are some projects which I has developed using my skills and knowledge.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>  
        <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content id="slideInUp" className={isVisible ? "animate_animated animate_slideInUp" : ""}>
        <Tab.Pane eventKey="first">
            <Row>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard
                            key = {index}
                            {...project}
                            /> 
                            )
                        })
                    }
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="section">Lorem Ipsum</Tab.Pane>
        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
        </Tab.Content>
        </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section> 
)
}
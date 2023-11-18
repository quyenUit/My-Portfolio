import React from "react";
// import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
// import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import CShape from '../../img/cshape.jpg'
import CPP from '../../img/c++.png'
import HTML from '../../img/html.jpg'
import CSS from '../../img/css.png'
import JS from '../../img/js.jpg'
import JAVA from '../../img/java.jpg'
import PYTHON from '../../img/python.png'
import reactjs from '../../img/react.png'
import Nodejs from '../../img/nodejs.jpg'
import Consultation from '../../img/Consultation.jpg'
import Presentation from '../../img/Presentation.jpg'
import Manage  from '../../img/Manager.jpg'
import Teamwork from '../../img/Teamwork.jpg'
const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Skills</span>
        </h4>
        <h1>PROGRAMMING LANGUAGE</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card        
            imageUrl={CPP}
            title={"C Plus Plus"}
          />
        </Slide>
        <Slide direction="left">
          <Card
            imageUrl={CShape}
            title={"C Sharp"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl={HTML}
            title={"HyperText Markup Language"}
          />
        </Slide>
        <Slide direction="right">
          <Card        
            imageUrl={CSS}
            title={"Cascading Style Sheets"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl={JS}
            title={"JavaScript"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl={JAVA}
            title={"Java"}
          />
        </Slide>
        <Slide direction="left">
          <Card        
            imageUrl={PYTHON}
            title={"Python"}
          />
        </Slide>
        <Slide direction="left">
          <Card
            imageUrl={reactjs}
            title={"React.js"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl={Nodejs}
            title={"Node.js"}
          />
        </Slide>
      </Cards>
      <Slide direction="right">
        <h1>SOFT SKILLS</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card        
            imageUrl={Presentation}
            title={"Presentation"}
          />
        </Slide>
        <Slide direction="left">
          <Card
            imageUrl={Teamwork}
            title={"Teamwork"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl={Manage}
            title={"Manage Store Computer, Fanpage"}
          />
        </Slide>
        <Slide direction="left">
          <Card        
            imageUrl={Consultation}
            title={"Consultation and Sale"}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

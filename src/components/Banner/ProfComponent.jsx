import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import avatar from "../../img/DSC_6338.jpg"

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Nguyen Huu Quyen</h1>
          <h3>REACT DEVELOPER</h3>
          <p>
            I am currently a 4th year student majoring in Information Systems,
            University of Information Technology, Vietnam National University, Ho Chi Minh City.
            <br />
            <br />
            The criterion of my work is Learn-Grow-Deliver.
            <br />
            <br />
            My goal is to become a professional Developer in a suitable working environment for development,
            where I can apply the knowledge and skills gained from the school's training program and 
            real projects to design projects. Design and develop quality web applications and
            contribute to the company's successful development in the field of Information Technology.
          </p>
          <a href="https://www.topcv.vn/xem-cv/DA0ABApTAwQCVg0CBlEGVVJWBF0BUwtSVQdXCQd4ac" target="_blank" rel="noopener noreferrer"><button style={{fontSize: 24, fontWeight: 600}}>My CV</button></a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/quyenUit" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/nguyenhuuquyen2001" target="_blank" rel="noopener noreferrer">
                  <BsFacebook />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={avatar}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #FF6701;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #FF6701);
    :hover {
      filter: drop-shadow(0px 10px 10px #ffa201);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #FF6701;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #f5c37d);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

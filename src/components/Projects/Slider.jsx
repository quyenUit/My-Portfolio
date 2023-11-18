import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698489184/Certification/p2ndeqbpbnvvdpylbsey.png",
        disc : "Internship project. Building the interface of a nursing hospital website in Japan.",
        ProjectLink : "https://at-home.aipower.vn"
    },
    {
        img : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698489183/Certification/azlpgbwfbffytqnj8seb.png",
        disc : "Building a food sharing web application with the aim of avoiding food waste and sharing food to difficult situations. Allow users to share their food and allow to receive shared food.",
        ProjectLink : "https://share-food-p88yxm3v3-quyenuit.vercel.app"
    },
    {
        img : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698489183/Certification/rpun0jfxgr0jx9gfhcy9.png",
        disc : "We are developing a food sharing web application that helps stop food waste and meet the food needs of people in need. The application allows users to log in under two roles: food sharer and food recipient. Main functions include posting food shares, receiving food, and searching for food by nearest location.",
        ProjectLink : "https://github.com/quyenUit/Frontend_ShareFood_Project.git"
    },
    {
        img : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698489686/Certification/xdpvyd4jkdg7b8ek8t7p.png",
        disc : "Our mobile application connects farmers and buyers, eliminating intermediaries, helping farmers sell products at reasonable prices and helping buyers access a variety of agricultural products. This is a solution to help improve efficiency and transparency in traditional agricultural markets.",
        ProjectLink : "https://github.com/quyenUit/Agriculture_Shopping.git"
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
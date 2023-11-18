import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Object-oriented programming in java",
        link : "https://codelearn.io/lms/share/dde43995-04ea-429a-84cd-51144c1fa7d4",
        img_url : "https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/00e74493b80d4dcfadf2e1a59af577e7.jpg",
        stars : 3,
        disc : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698484453/Certification/mibgjwcvcky3scbdcqn3.png",
    },

    {
        name : "Basic Java",
        link : "https://codelearn.io/lms/share/9b2cea40-eede-4b00-8653-6dcdbbf9aac5",
        img_url :"https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/1e746fe3cbe448bda850d8b953a78954.jpg",
        stars : 3,
        disc : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698484451/Certification/d6f3dwquti92je4prcoi.png",
    },

    {
        name : "Basic Python",
        link : "https://codelearn.io/lms/share/dde43995-04ea-429a-84cd-51144c1fa7d4",
        img_url : "https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/cf55489ccd434e8c81c61e6fffc9433f.jpg",
        stars : 3,
        disc : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698484414/Certification/wh67vgdvpktf6mtqspm7.png",
    },

    {
        name : "C++ for Beginners",
        link : "https://codelearn.io/lms/share/dde43995-04ea-429a-84cd-51144c1fa7d4",
        img_url : "https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/bf4dca390c5742bda4dbf6344e859eb9.jpg",
        stars : 3,
        disc : "https://res.cloudinary.com/dp0npssm1/image/upload/v1698484415/Certification/ol1ytooflmoo8mk8gdfz.png",
    },
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Certification</span>
            {/* <h1>what clients say</h1> */}
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
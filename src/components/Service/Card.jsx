import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { imageUrl, title } = props;
  return (
    <Container>
        <img src={imageUrl} alt={title} />
        <h1>{title}</h1>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }

    img{
        height: 140px;
        width: 270px;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

`
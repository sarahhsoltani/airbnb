import React from 'react'
import { Container } from 'react-bootstrap'


const CompanyChild = ({img,title}) => {
  return(
    <Container >
        <img className="w-100 h-100" src={img} alt="..."/>
        <h5>{title}</h5>
    </Container>
   )

 }

export default CompanyChild
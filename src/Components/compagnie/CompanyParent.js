import React from 'react'
import { Container } from 'react-bootstrap'
import CompanyChild from './CompanyChild'

let tab=[{
img:"https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
title:'Escapades en pleine nature'},

{img:"https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720" ,
title:'Des logements uniques'},

{img:"https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720" ,
title:'Logements entiers'},

{img:"https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"  ,
title:'Animaux de compagnie acceptés'}

]

const CompanyParent = (props) => {
  return(
  <Container>
        <div className="box-item">
        {
            tab.map((el,index)=>(
                <CompanyChild
                index={el.index}
                img={el.img}
                title={el.title}
                
                
                />
            ))
        }
    </div>
  </Container>
   )

 }

export default CompanyParent
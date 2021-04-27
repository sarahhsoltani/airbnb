import React from 'react'
import { Container } from 'react-bootstrap'

const arr=[
    {image:"https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&amp;im_w=720",
    title:"Tunis",
    paragraphe:"Temps de trajet : 15 min"},
    {image:"https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?aki_policy=large",
    title:"Marsa",
    paragraphe:"Temps de trajet : 30 min"},
    {image:"https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&amp;im_w=720" 
    ,
    title:"Kelibia",
    paragraphe:"2 heures de route"},
    {image:"https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&amp;im_w=720" 
    ,
    title:"Yasmine hammamet",
    paragraphe:"1 heure de route"},
    {image: "https://a0.muscache.com//pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&amp;im_w=720" 
    ,
    title:"Hammamet Sud",
    paragraphe:"1 heure de route"},
    {image: "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&amp;im_w=720" 
    ,
    title:"Hergla",
    paragraphe:"1 heure de route"},
    {image:"https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&amp;im_w=720" 
    ,
    title:"Korba",
    paragraphe:"1 heure de route"},
    {image:"https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=720",
    title:"Aghir",
    paragraphe:"1 heure de route"},
]
const Explore = (props) => {
  return(
  <Container>
        <div className="explore">
       {arr.map((el,index)=>(
           <div className="box">
               <img className="image" src={el.image} alt="..."/>
               <div >
               <p>{el.title}</p>
               <p>{el.paragraphe}</p>
               </div>
           </div>
       ))}
    </div>
  </Container>

   )

 }

export default Explore
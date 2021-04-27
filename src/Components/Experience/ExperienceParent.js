import React from 'react'
import ExperienceChild from './ExperienceChild'
let exp=[
    {image:"https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720",
    title:"Collection à la une : Envies d'évasion",
    para:"Voyagez depuis chez vous grâce aux expériences en ligne."},

    {image:"https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720" ,
    title:"Expériences en ligne",
    para:"Activités interactives en direct, animées par des hôtes."},

    {image:"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720" ,
    title:"Expériences",
    para:"Prenez part à des activités locales, où que vous soyez."}
]



const ExperienceParent = (props) => {
  return(
    <div className="d-flex justify-content-arround mt-3">
        {
            exp.map((el,index)=>(
                <ExperienceChild
                
                index={el.index}
                img={el.image}
                title={el.title}
                para={el.para}
                
                />

            ))
        }
    </div>
   )

 }

export default ExperienceParent
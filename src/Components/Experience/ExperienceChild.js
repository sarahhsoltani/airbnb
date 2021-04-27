import React from 'react'


const ExperienceChild = ({img,para,title}) => {
  return(
    <div  className="mr-3"> 
        <img className="w-100 h-75" src={img} alt=".."/>
        <h5>{title}</h5>
        <p>{para}</p>

    </div>
   )

 }

export default ExperienceChild
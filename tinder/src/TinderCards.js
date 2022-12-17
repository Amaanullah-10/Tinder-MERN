import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { LineAxisOutlined, SwipeDown } from '@mui/icons-material'
function TinderCards() {
  const[people,setPeople]=useState([{
    name:"Elon Musk",
    imgUrl:"https://imgs.search.brave.com/10bC-9FPQrmSZTKpHNzL9OMBA4fcFacSpyOp7BgJZBY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmlvZ3JhcGh5LmNv/bS8uaW1hZ2UvdF9z/aGFyZS9NVGM1T1Rr/Mk9EVXlNVE14TnpN/ME9EY3kvZ2V0dHlp/bWFnZXMtMTIyOTg5/Mjk4My1zcXVhcmUu/anBn",

  },{
    name:"Jeff Bezos",
    imgUrl:"https://imgs.search.brave.com/cEGrIzq2NpVE1Io5dPvwF42wCqIc9js29u1eEqKGtjE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5jbmJjZm0uY29t/L2FwaS92MS9pbWFn/ZS8xMDY1Njk3OTct/MTU5MTY0OTEwOTY4/M2dldHR5aW1hZ2Vz/LTEwMzI5NDI2NTYu/anBlZz92PTE1OTYx/NDE3NDc",
  }]);

  const swiped=(direction,nameToDelete)=>{
    console.log("removing" + nameToDelete); 
  }
  const outOfFrame=(name)=>{
    console.log(name + "left the screen");
  }


  return (
    <div className="tinderCards">
        <div className="tinderCards_cardContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                <div
                  style={{backgroundImage:`url(${person.imgUrl})`}}
                  className="card"
                >
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards
import React from 'react'
import Airmaxdata from './Airmaxdata'
import Airmaxelements from './Airmaxelements'


const Airmax = (props) => {

  return( Airmaxdata.map((element, index)=>{
    return(

    <Airmaxelements image={element.image} price={element.price} name={element.name} id={element.id} key={index}/>
 
  )
}))
}

export default Airmax

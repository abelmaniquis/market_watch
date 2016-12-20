import React from 'react'
import Anime from 'react-anime'

let TextScroll =() =>{
    return(
      <div>
          
        <Anime direction="alternate">
          
          <div className="blue"/>
        </Anime>
        <ul className="scroller">
        </ul>
      
      </div>
    )
}

module.exports = TextScroll
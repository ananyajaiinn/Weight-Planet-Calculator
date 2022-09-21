import React from 'react';
import "./Body.css";

function Body() {
  return (
    <>
    <div className='container my-4'>
        <p><strong>Weight-Planet Calculator</strong></p>
        <p>Your weight is different on other planets in the Solar System because the gravity is different. The following tool tells you what the scales would read on other worlds. You can measure your weight in any units you like (kilograms, newtons, elephants...) and the units will be the same on the other planet - for example if I input 25 kg on Earth the answer given would be in kg on any of the other planets!</p>
        <p><strong>Type your weight into the first box below, and then click on a planet.
</strong></p>

    </div>
    </>
  )
}

export default Body;
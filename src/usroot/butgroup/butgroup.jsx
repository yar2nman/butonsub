import React from "react";
import './butgroup.css'


const  Butgroup = () => {

    return (
    <>
        <div className='bcontainer'>
          <button className='sbutton'>0</button>
          <button className='sbutton'>1</button>
          <button className='sbutton'>2</button>
          <button className='sbutton'>3</button>
          <button className='sbutton'>4</button>
          <button className='sbutton'>5</button>
          <button className='sbutton'>6</button>
          <button className='sbutton'>7</button>
          <button className='sbutton'>8</button>
          <button className='sbutton'>9</button>
          <button className='sbutton'>10</button>

        </div>

        <div className='butonsub'>
          <div className='ba'>min</div>
          <div className='bb'>mid</div>
          <div className='bc'>max</div>
        </div>
    
    </>
    )
}

export default Butgroup;
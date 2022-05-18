import React from 'react'
import "./mroot.css"
import MyResponsivePie from '../chartsRoot/PiChart'
import ChartWrapper from '../chartsRoot/ChartWrapper'


const Mroot =  () => {

     const piedata = [
        {
          "id": "ruby",
          "label": "ruby",
          "value": 106,
          "color": "hsl(122, 70%, 50%)"
        },
        {
          "id": "javascript",
          "label": "javascript",
          "value": 553,
          "color": "hsl(246, 70%, 50%)"
        },
        {
          "id": "erlang",
          "label": "erlang",
          "value": 497,
          "color": "hsl(286, 70%, 50%)"
        }
      ]

    return (
        <>
            <div className="mroot">
                    <div className='header'>
                        Question
                    </div>
                    <div className='pre'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit./n 
                        Voluptates quod sunt enim illo quis veniam illum iure nisi maxime, 
                        quasi impedit optio amet officiis 
                        repellendus ipsa temporibus libero quae exercitationem?
                    </div>

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


                    <hr
                        style={{
                            color: 'red',
                            backgroundColor: 'red',
                            height: 2,
                            width: '100%',
                        }}
                    />

                    <div className='chartheader'>Report</div>

<ChartWrapper className='chrap' height={300}>
                        <MyResponsivePie data={piedata}  />
                      </ChartWrapper>
                    


            </div>
        </>
    )

}

export default Mroot
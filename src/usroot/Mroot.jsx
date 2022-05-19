import React from 'react'
import "./mroot.css"
import MyResponsivePie from '../chartsRoot/PiChart'
import ChartWrapper from '../chartsRoot/ChartWrapper'
import Butgroup from './butgroup/butgroup'


const Mroot = () => {

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

        <Butgroup />


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
          <MyResponsivePie data={piedata} />
        </ChartWrapper>

        <div className="butcont">
          <button className='bta' onClick={() => window.location.href='/your-href'}>Privew</button>
          <button className='btb' onClick={() => window.location.href='/your-href2'}>Create Embedding code</button>
        </div>



      </div>
    </>
  )

}

export default Mroot
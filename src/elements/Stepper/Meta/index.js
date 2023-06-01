import React from 'react'
import Fade from 'react-reveal/Fade'

const Meta = ({data, current}) => {
  return (
    <Fade delay={300}>
        <div className='text-center' style={{marginBottom: 30}}>
            <h1 className='h2'>
                {data[current] && data[current].title}
            </h1>
            <p className='lead' style={{color: '#B0B0B0'}}>
                {data[current] && data[current].description}
            </p>
        </div>
    </Fade>
  )
}

export default Meta
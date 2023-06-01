import React from 'react'
import Fade from 'react-reveal/Fade'

const Controller = (props) => {
  return (
    <Fade>
        <section className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-3'>
                    {props.children}
                </div>
            </div>
        </section>
    </Fade>
  )
}

export default Controller
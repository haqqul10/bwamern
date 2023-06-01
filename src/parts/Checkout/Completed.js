import React from 'react'
import Fade from 'react-reveal/Fade'

import CompletedIllustration from '../../assets/images/completed.jpg'
const Completed = () => {
  return (
    <Fade>
        <div className='container' style={{marginBottom: 30}}>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-4'>
                    <img
                        src={CompletedIllustration}
                        alt='completed checkout apartment'
                        className='img-fluid'
                    />
                    <p style={{color: '#B0B0B0'}}>
                    We will inform you via email later
once the transaction has been accepted
                    </p>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Completed
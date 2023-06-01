import React from 'react'
import TestimonyAccent from '../assets/images/testimonial-landingpage-frame.jpg'
import Star from '../elements/Star'
import Button from '../elements/Button'
import Fade from 'react-reveal/Fade';

const Testimony = ({data}) => {
  return (
    <Fade bottom>
      <section className='container testimonial'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-auto img-testimonial'>
              <div className='testimonial-hero' style={{margin: '30px 0 0 30px'}}>
                <img src={data.imageUrl} alt='Testimonial' className='position-absolute' style={{zIndex: 1}}/>
                <img src={TestimonyAccent} alt='Testimonial Frame' className='position-absolute' style={{ margin: '-30px 0 0 -30px'}}/>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <h4 style={{marginBottom: 40}}>
                {data.name}
              </h4>
              <Star value={data.rate} width={35} height={35} spacing={4} />
              <h5 className='h2 fw-light line-height-2 my-3'>
                {data.content}
              </h5>
              <span style={{color: '#adb5bd'}}>
                {data.familyName}, {data.familyOccupation}
              </span>
              <div>
                <Button className='btn' style={{ marginTop: '40px', width: '210px', height: '50px'}} href={`/testimonial/${data._id}`} type="link" hasShadow isPrimary>
                  Read Their Story
                </Button>
              </div>
            </div>
          </div>
      </section>
    </Fade>
  )
}

export default Testimony
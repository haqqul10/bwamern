import React from 'react'
import HeroImage from '../assets/images/hero.jpg'
import HeroImageFrame from '../assets/images/hero-frame.jpg'
import Cities from '../assets/images/icons/ic_cities.svg'
import Traveler from '../assets/images/icons/ic_traveler.svg'
import Treasure from '../assets/images/icons/ic_treasure.svg'
import Button from '../elements/Button'
import formatNumber from '../utils/formatNumber'
import Fade from 'react-reveal/Fade';

export const Hero = (props) => {
  function showMostPicked(){
    window.scrollTo({
        top : props.refMostPicked.current.offsetTop - 30,
        behavior: 'smooth'
    })
  }
  return (
    <Fade bottom>
        <section className="container hero-section">
            <div className="row d-flex justify-content-between align-item-center">
                <div className="col-12 col-md-6 pe-5 hero-title">
                    <h1 className="fw-bold line-height-1 mb-3" style={{lineHeight: '63px'}}>
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 fw-light w-75 hero-content" style={{color: '#B0B0B0', lineHeight: '170%'}}>
                    We provide what you need to enjoy your 
                    holiday with family. Time to make another 
                    memorable moments.
                    </p>
                    <Button className="btn" hasShadow isPrimary onClick={showMostPicked} style={{width: '210px', height: '50px'}}>Show Me Now</Button>
                    <div className="row" style={{marginTop: '80px'}}>
                        <div className="col-auto">
                            <img src={Traveler} width="36" height="36" alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {formatNumber (props.data.travelers)} <span className="fw-light" style={{color: '#B0B0B0'}}>Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={Treasure} width="36" height="36" alt={`${props.data.treasures} Treasures`} />
                            <h6 className="mt-3">
                                {formatNumber (props.data.treasures)} <span className="fw-light" style={{color: '#B0B0B0'}}>Treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={Cities} width="36" height="36" alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">
                                {formatNumber (props.data.cities)} <span className="fw-light" style={{color: '#B0B0B0'}}>Cities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 pe-5">
                    <div className='hero-image-placeholder'>
                        <img src={HeroImage} alt="Room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1, width: 520}} />
                        <img src={HeroImageFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0', width: 520}} />
                    </div>
                </div>
            </div>
        </section>
    </Fade>
  )
}
export default Hero;

import React from 'react'
import Fade from 'react-reveal/Fade'

import { InputText } from '../../elements/Form'

const BookingInformation = (props) => {
    const {data, ItemDetails, checkout } = props;

  return (
    <Fade>
        <div className='container booking-information' style={{marginBottom: 30}}>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-5 border-end py-5 booking-information-img'>
                    <Fade delay={300}>
                        <div className='card'>
                            <figure className='img-wrapper' style={{height: 270}}>
                                <img
                                    className='img-cover'
                                    src={ItemDetails.imageUrls[0].url}
                                    alt={ItemDetails.name}
                                />
                            </figure>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <div className='meta-wrapper'>
                                        <h5>{ItemDetails.name}</h5>
                                        <span style={{color: '#B0B0B0'}}>
                                            {ItemDetails.city} {ItemDetails.country}
                                        </span>
                                    </div>
                                </div>
                                <div className='col-auto'>
                                    <span>
                                        ${+checkout.duration * ItemDetails.price} USD
                                        <span style={{color: '#B0B0B0'}}>{" "}
                                            per
                                        </span>{" "}
                                        {checkout.duration} {ItemDetails.unit}
                                        {+checkout.duration > 1 ? "s" : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-12 col-md-5 py-5 booking-information-form'>
                    <Fade delay={600}>
                        <label htmlFor='firstName'>First Name</label>
                        <InputText
                            id='firstName'
                            name='firstName'
                            value={data.firstName}
                            onChange={props.onChange}
                        />
                        <label htmlFor='lastName'>Last Name</label>
                        <InputText
                            id='lastName'
                            name='lastName'
                            value={data.lastName}
                            onChange={props.onChange}
                        />
                        <label htmlFor='email'>Email Address</label>
                        <InputText
                            id='email'
                            name='email'
                            value={data.email}
                            onChange={props.onChange}
                        />
                        <label htmlFor='phone'>Phone Number</label>
                        <InputText
                            id='phone'
                            name='phone'
                            type="tel"
                            value={data.phone}
                            onChange={props.onChange}
                        />

                    </Fade>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default BookingInformation
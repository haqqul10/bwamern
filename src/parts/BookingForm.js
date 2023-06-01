import React, { Component } from 'react'
import propType from 'prop-types'

import Button from '../elements/Button/index'
import {InputDate, InputNumber} from '../elements/Form'

export default class BookingForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : {
                duration : 1,
                date : {
                    startDate : new Date(),
                    endDate : new Date(),
                    key : "selection"
                }
            }
        }
    }

    updateDate = e => {
        this.setState({
            ...this.state,
            data : {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        const { data } = this.state

        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate)
            const endDate = new Date(data.date.endDate)
            const countDuration = new Date(endDate - startDate).getDate()

            this.setState({
                data : {
                    ...this.state.data,
                    duration : countDuration
                }
            })

        }
        if (prevState.data.duration !== data.duration) {
            const startDate = new Date(data.date.startDate)
            const endDate = new Date(
                startDate.setDate(startDate.getDate() + +data.duration - 1)
            )

            this.setState({
                ...this.state,
                data : {
                    ...this.state.data,
                    date : {
                        ...this.state.data.date,
                        endDate : endDate
                    }
                }
            })

        }
    }
  render() {
    const { data } = this.state
    const { itemDetails, startBooking } = this.props
    return (
      <div className='card bordered'>
        <h4 className='mb-3'>
            Start Booking
        </h4>
        <h5 className='h2 text-teal mb-4'>
            ${itemDetails.price}{" "}
            <span className='fw-light' style={{color: '#B0B0B0'}}>
                per {itemDetails.unit}
            </span>
        </h5>
        <label htmlFor='duration'>How long you will stay ?</label>
        <InputNumber
            max={30}
            suffix={" night"}
            isSuffixPlural
            onChange={this.updateDate}
            name="duration"
            value={data.duration}
        />
        <label htmlFor='duration'>Pick a date</label>
        <InputDate
            onChange={this.updateDate}
            name="date"
            value={data.date}
        />

        <h6 className='fw-light' style={{color: '#B0B0B0', marginBottom: 40}}>
            You will play{" "}
            <span style={{color: '#152C5B'}}>
                ${itemDetails.price * data.duration} USD
            </span>{" "}
            per{" "}
            <span style={{color: '#152C5B'}}>
                {data.duration} {itemDetails.unit}
            </span>
        </h6>

        <Button className='btn' style={{height: 50}} hasShadow type="link" isPrimary isBlock href="/checkout" onClick={startBooking}>
            Continue to Book
        </Button>
      </div>
    )
  }
}

BookingForm.propType = {
    itemDetails : propType.object,
    startBooking : propType.func
}

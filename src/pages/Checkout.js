import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "../parts/Header";

import Button from "../elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../elements/Stepper";
import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";

import ItemDetails from "../json/itemDetails.json";

export default class Checkout extends Component {

  state = {
    data : {
      firstName : "",
      lastName : "",
      email : "",
      phone : "",
      proofPayment : "",
      bankName : "",
      bankHolder : ""
    }
  }

  onChange = (event) => {
    this.setState({
        data : {
          ...this.state.data,
          [event.target.name] : event.target.value
        }
      }
    )
  }

  componentDidMount(){
    window.scroll(0, 0)
  }

  render() {
    const { data } = this.state;

    const checkout = {
      duration : 3,
    }
    
    const steps = {
      bookingInformation : {
        title : "Booking Information",
        description : "please fill up the blank fields bellow",
        content : (
          <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange}/>
        )
      },
      payment : {
        title : "Payment",
        description : "Kindly follow the instructions below",
        content : (
          <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />
        )
      },
      completed : {
        title : "Yay! Completed",
        description : null,
        content : (<Completed />)
      }
    }
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {
            (prevStep, nextStep, CurrentStep, steps) => (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{marginBottom: 50}}
                />
                <Meta
                  data={steps}
                  current={CurrentStep}
                />
                <MainContent
                  data={steps}
                  current={CurrentStep}
                />
                {CurrentStep === "bookingInformation" && (
                    <Controller>
                      {
                        data.firstName !== "" && 
                        data.lastName !== "" &&
                        data.email !== "" &&
                        data.phone !== "" && (
                          <Fade>
                            <Button
                              className="btn mb-3"
                              type="button"
                              isBlock
                              isPrimary
                              hasShadow
                              onClick={nextStep}
                              style={{height: 50, width: 300}}
                            >
                              Continue to Book
                            </Button>
                          </Fade>
                        )
                      }
                      <Button
                        className="btn"
                        type="link"
                        isBlock
                        isLight
                        href={`/properties/${ItemDetails._id}`}
                        style={{height: 50, width: 300, color: '#B0B0B0'}}
                      >
                        Cancel
                      </Button>
                    </Controller>
                )}
                {CurrentStep === "payment" && (
                    <Controller>
                      {
                        data.proofPayment !== "" && 
                        data.bankName !== "" &&
                        data.bankHolder !== "" && (
                          <Fade>
                            <Button
                              className="btn mb-3"
                              type="button"
                              isBlock
                              isPrimary
                              hasShadow
                              onClick={nextStep}
                              style={{height: 50, width: 300}}
                            >
                              Continue to Book
                            </Button>
                          </Fade>
                        )
                      }
                      <Button
                        className="btn"
                        type="link"
                        isBlock
                        isLight
                        onClick={prevStep}
                        style={{height: 50, width: 300, color: '#B0B0B0'}}
                      >
                        Cancel
                      </Button>
                    </Controller>
                )}
                {CurrentStep === "completed" && (
                    <Controller>
                      <Button
                        className="btn"
                        type="link"
                        isBlock
                        isPrimary
                        hasShadow
                        href="/"
                        style={{height: 50, width: 300}}
                      >
                        Back To Home
                      </Button>
                    </Controller>
                )}

              </>
            )
          }
        </Stepper>
      </>
    );
  }
}

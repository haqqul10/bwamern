import React from 'react'
import Fade from 'react-reveal/Fade'

import { InputText, InputFile } from '../../elements/Form'

import LogoBca from '../../assets/images/logo bca.png'
import LogoMandiri from '../../assets/images/logo mandiri.png'

const Payment = (props) => {
    const {data, ItemDetails, checkout} = props;
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
        <div className='container payment' style={{marginBottom: 30}}>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-12 col-md-5 border-end py-5 bank-payment'>
                    <Fade delay={300}>
                        <p className='mb-4'>Tranfer Pembayaran:</p>
                        <p>Tax: {tax}%</p>
                        <p>Sub Total: ${subTotal} USD</p>
                        <p>Total: ${grandTotal} USD</p>
                        <div className='row mt-4'>
                            <div className='col-3 text-right'>
                                <img
                                    src={LogoBca} alt='bank central asia' width="60"
                                />
                            </div>
                            <div className='col'>
                                <dl>
                                    <dd>Bank Central Asia</dd>
                                    <dd>2022 1990</dd>
                                    <dd>Risky Firdaus</dd>
                                </dl>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3 text-right'>
                                <img
                                    src={LogoMandiri} alt='Mandiri' width="60"
                                />
                            </div>
                            <div className='col'>
                                <dl>
                                    <dd>Bank Mandiri</dd>
                                    <dd>2022 9890</dd>
                                    <dd>Risky Firdaus</dd>
                                </dl>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-12 col-md-5 py-5 form-payment'>
                    <Fade delay={600}>
                        <label htmlFor='proofPayment'>Upload Bukti Transfer</label>
                        <InputFile
                            accept="image/*"
                            id='proofPayment'
                            name='proofPayment'
                            value={data.proofPayment}
                            onChange={props.onChange}
                        />
                        <label htmlFor='bankName'>Asal Bank</label>
                        <InputText
                            id='bankName'
                            name='bankName'
                            type="text"
                            value={data.bankName}
                            onChange={props.onChange}
                        />
                        <label htmlFor='bankHolder'>Nama Pengirim</label>
                        <InputText
                            id='bankHolder'
                            name='bankHolder'
                            type="text"
                            value={data.bankHolder}
                            onChange={props.onChange}
                        />

                    </Fade>
                </div>
            </div>
        </div>
    </Fade>
  )
}

export default Payment
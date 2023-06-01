import React from 'react'
import Fade from 'react-reveal/Fade'

import Breadcrumb from '../elements/Breadcrumb/index'

const PageDetailTitle = ({data, breadcrumb}) => {
  return (
    <section className='container spacing-sm'>
        <Fade bottom>
            <div className='row align-items-center'>
                <div className='col-12 col-md'>
                    <Breadcrumb data={breadcrumb} />
                </div>
                <div className='col-12 col-md-auto text-center'>
                    <h1 className='h2'>{data.name}</h1>
                    <span style={{color: '#ced4da'}}>
                        {data.city}, {data.country}
                    </span>
                </div>
                <div className='col'></div>
            </div>
        </Fade>
    </section>
  )
}

export default PageDetailTitle
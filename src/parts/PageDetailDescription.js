import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const PageDetailDescription = ({data}) => {
  return (
    <main>
        <h4>About the place</h4>
        { ReactHtmlParser(data.description) }
        <div className='row' style={{marginTop: 30}}>
            {data.features.map((featured, index) => (
                <div key={`featured-${index}`} className='col-4 col-md-3' style={{marginBottom: 20}}>
                    <img width="38" className='d-block mb-2' src={featured.imageUrl} alt={featured.name}/>{" "}
                    <span>{featured.qty}</span>{" "}
                    <span className='fw-light' style={{color: '#B0B0B0'}}>
                        {featured.name}
                    </span>
                </div>
            ))}
        </div>
    </main>
  )
}

export default PageDetailDescription
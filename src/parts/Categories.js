import React from "react";
import Button from "../elements/Button";
import Fade from 'react-reveal/Fade';

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-item-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${index1}-item-${index2}`}
                  >
                    <Fade bottom delay={300 * index2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular <span className="fw-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{height: 180}}>
                            <img src={item.imageUrl} className="img-cover" alt={item.name}/>
                        </figure>
                        <div className="meta-wrapper">
                            <Button type="link" href={`properties/${item._id}`} className="stretched-link d-block" style={{color: '#343a40'}}>
                                <h5 className="h4">{item.name}</h5>
                            </Button>
                            <span style={{color: '#adb5bd'}}>
                                {item.city}, {item.country}
                            </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}

import React from 'react'

const ProductCard = ({ data }) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='card card-product border-0'>
        <div className='image-box'>
          <img src={data.images[0]} alt={data.title} />
        </div>
        <div className="mx-3 my-2">
          <div className="d-flex justify-content-between">
            <h6 className='title mt-1'>
              { data.title }
            </h6>
            <div>
              <span className="badge rounded-pill bg-dark">
                $ { data.price }
              </span>
            </div>
          </div>
          <h6 className="description text-secondary">
            { data.description }
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
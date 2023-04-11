import React from 'react'

const NewsCard = ({ data }) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <a className='card card-news border-0'
        href={ data.readMoreUrl }
        target='_blank'
      >
        <div className='image-box'>
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <h6 className="mx-3 my-2 date text-secondary">
          { data.date }
        </h6>
        <h6 className='mx-3 title'>
          { data.title }
        </h6>
      </a>
    </div>
  )
}

export default NewsCard
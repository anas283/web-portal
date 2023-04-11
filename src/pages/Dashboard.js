import React, { useCallback, useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Get latest news
  const getNews = useCallback(() => {
    fetch('https://inshorts.deta.dev/news?category=technology')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.data)
        setLoading(false);
      })
      .catch(error => console.log(error));
  },[])

  useEffect(() => {
    getNews();
  },[])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // Remove token and logout
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className='container vh-100 py-4'>
      <div className="col-11 col-lg-10 mx-auto">

        <div className="d-flex justify-content-between">
          <h3>Latest News 📰</h3>
          <button className="btn btn-light"
            onClick={logout}
          >Logout</button>
        </div>

        {loading &&
          <div className='w-100 d-flex justify-content-center mt-5 py-5'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }

        {!loading &&
          <div>
            <div className='row mt-3'>
              {currentItems.map((news,key) => {
                return (
                  <NewsCard 
                    key={key}
                    data={news}
                  />
                )
              })}
            </div>

            <div className='d-flex justify-content-center pb-3'>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Dashboard
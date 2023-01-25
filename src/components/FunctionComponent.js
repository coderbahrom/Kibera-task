import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { api } from '../utils/api';
import './Pagination.css';
function FunctionComponent({ name, body }) {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get(`/comments?_page=${currentPage}&_limit=10`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  if (comments.length === 0) {
    return <div className='loader'></div>;
  }

  return (
    <>
      <div className='wrapper'>
        {' '}
        <table className='styled-table'>
          <thead>
            {name || body ? (
              <tr>
                {name && <th>Name</th>}
                {body && <th>Description</th>}
              </tr>
            ) : (
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
              </tr>
            )}
          </thead>
          <tbody>
            {comments?.map((item, index) =>
              name || body ? (
                <tr key={index}>
                  {name && <td>{item.name}</td>}
                  {/* <td>{item.email}</td> */}
                  {body ? <td>{item.body}</td> : null}
                </tr>
              ) : (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
}

export default FunctionComponent;

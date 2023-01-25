import React from 'react';
import { api } from '../utils/api';
import Pagination from './Pagination';
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], currentPage: 1, postsPerPage: 10 };
    this.update = this.update.bind(this);
  }
  update(nextState) {
    this.setState(nextState);
  }
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      console.log('update', this.state.currentPage);
      return this.getComments();
    }
  }
  componentWillUnmount() {
    return <p>Loading...</p>;
  }
  getComments() {
    api
      .get(`/comments?_page=${this.state.currentPage}&_limit=10`)
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <div className='wrapper'>
          {' '}
          <table className='styled-table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.comments?.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination updateParent={this.update} />
      </>
    );
  }
}

export default ClassComponent;

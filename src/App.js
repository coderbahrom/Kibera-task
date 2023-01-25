import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  const [name, setName] = useState(false);
  const [body, setBody] = useState(false);
  return (
    <div className='App'>
      <div className='filters'>
        <div className='filters_inputs'>
          <div>
            <input
              onChange={() => setName((prev) => !prev)}
              type='checkbox'
              id='name'
              // name='fav_language'
              value='Name'
            />
              <label htmlFor='name'>Name</label>
          </div>
          <div>
            <input
              onChange={() => setBody((prev) => !prev)}
              type='checkbox'
              id='body'
              // name='fav_language'
              value='Body'
            />{' '}
            <label htmlFor='body'>Body</label>
          </div>
        </div>
      </div>
      <FunctionComponent name={name} body={body} />
      {/* <ClassComponent /> */}
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './hello.css';

export default function Hello() {
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div>
        <h7>What do you want to write?</h7>
        <div/>
        <input
            type="text"
            id="message"
            name="message"
            placeholder='Hello, World'
            onChange={handleChange}
        />
        <div/>
        <p1>Message: {message}</p1>
    </div>
  );
}
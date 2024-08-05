
import './App.css';
import { useState } from 'react';

function Counter() {
    var [num, setnum] = useState(0)
    function increment() {
        setnum(num + 1)
    }
    function decrement() {
        setnum(num - 1)
    }
    function reset() {
        setnum(0)
    }
    return (
        <div className='container'>
            <div className='random'>
                <h1 className='topic'>Counter App</h1>
                <h1 className='number'>{num}</h1>
                <button onClick={increment} className='btn'>INC</button>
                <button onClick={reset} className='btn'>RESET</button>
                <button onClick={decrement} className='btn'>DEC</button>
            </div>
        </div>
    )
}

export default Counter;

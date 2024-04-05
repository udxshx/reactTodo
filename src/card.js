import React from 'react';

function Card({ todo }) {
    return (
        <div className='m-2 flex flex-row gap-5 justify-between '>
            <input type='checkbox' />
            <h3>{todo}</h3>
            <button className='bg-red-400 p-1 px-2 rounded-[5px]'>Delete</button>
        </div>
    )
}

export default Card;

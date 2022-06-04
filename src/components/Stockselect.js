import React from 'react'

function Stockselect({ getStock, setStockId }) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();

    const inputHandler = (e) => {
        setStockId(e.target.value);
    };

    return (
        <div>
            <p>stockSelect</p>
            <input type="text" onChange={inputHandler} />
            <button onClick={getStock}>Search</button>
        </div>

    )
}

export default Stockselect
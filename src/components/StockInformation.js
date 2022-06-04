import React from 'react'

function StockInformation({ data }) {
    let lastsetData = data.data[data.data.length - 1];

    return (
        <div>
            <div className="date">{data.date}</div>
            <ul className="price">
                <li className="info">當前股價:{lastsetData[6]}</li>
                <li className="info">開盤價:{lastsetData[3]}</li>
                <li className="info">最高價:{lastsetData[4]}</li>
                <li className="info">最低價:{lastsetData[5]}</li>
            </ul>
        </div>
    )
}

export default StockInformation
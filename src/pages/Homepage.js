import React, { useEffect, useState } from 'react';
import Stockselect from '../components/Stockselect';
import StockInformation from '../components/StockInformation'

function Homepage() {
  const [date, setDate] = useState("");
  const [stockId, setStockId] = useState(null);
  const [data, setData] = useState(null);

  const intialURL = 'https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&stockNo=0050';
  const intialURL4 = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json1&stockNo=${stockId}`;

  const getStock = async () => {
    const dataFetch = await fetch(intialURL4);
    let parseData = await dataFetch.json();
    setData(parseData)
  }

  const getAllStock = () => fetch(intialURL)
    .then((response) => response.json())
    .then((data) => console.log(data, 'data'));


  return (
    <div>
      <p>台灣股票當日收盤</p>
      <button onClick={getAllStock}>抓取資料</button>
      <Stockselect
        setStockId={setStockId}
        getStock={getStock}
      />
      <div className="stockInfo">
        {data && <StockInformation data={data} />}
      </div>

    </div>
  )
}

export default Homepage
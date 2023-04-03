import React, { useState, useEffect } from 'react';
import "./Stats.css";
import axios from "axios"
import StatsRow from "./StatsRow"

const TOKEN = "cglk5f9r01qrjukr9figcglk5f9r01qrjukr9fj0"
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

  const [stockData, setstockData] = useState([])
  const getStocksData = (stock) => {
    return axios
    .get(`${BASE_URL}?symbol={stock}&token=${TOKEN}`)
    .catch((error) => {
      console.error("Error", error.message);
    });
  }
  useEffect(()=>{
    let tempStocksData = []
    const stocksList = ["AAPL", "MSFI", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUS"];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          console.log(res);
          tempStocksData.push({
            name: stock,
            ...res.data 
          });
        })
      )
  });
  Promise.all(promises).then(()=>{
    setstockData(tempStocksData);
    console.log(tempStocksData);
  })
  }, [])

  return (
    <div className='stats'>
        <div className="stats__container">
            <div className='stats__header'>
              <p>Stocks</p>
            </div>
            <div className='stats__header'>
              <p>Lists</p>
            </div>
            <div className='stats__content'>
              <div className='stats__rows'>
                {stockData.map((stock) => (
                  <StatsRow
                      key={stock.name}
                      name={stock.name}
                      openPrice={stock.o}
                      price={stock.c}
                  />
                  ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Stats
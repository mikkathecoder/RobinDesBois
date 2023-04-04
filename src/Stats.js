import React, { useState, useEffect } from 'react';
import "./Stats.css";
import axios from "axios"
import StatsRow from "./StatsRow"
import { db } from "./firebase";
import { collection, onSnapshot } from 'firebase/firestore';


const TOKEN = "cglk5f9r01qrjukr9figcglk5f9r01qrjukr9fj0"
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

  const [stockData, setstockData] = useState([])
  const [ myStocks, setMyStocks] = useState([])
  const getMyStocks = () => {
    const stocksRef = collection(db, 'myStocks');
    onSnapshot(stocksRef, (snapshot) => {
      console.log(snapshot.docs);
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        console.log(doc.data());
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };
  
  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error(`API error for ${stock}:`, error);
      });
  }  
  useEffect(()=>{
    let tempStocksData = []
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
    let promises = [];
    getMyStocks ();
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          console.log(`API response for ${stock}:`, res.data);
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
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Mes Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header2">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
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
  );
            }

export default Stats
import React, { useState} from 'react'
import "./Newsfeed.css"
import LineGraph from './LineGraph'
import TimeLine from "./TimeLine"
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  return (
    <div className='newsfeed'>
        <div className="newsfeed__container">
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>€3,584,102.255</h1>
                    <p>+€2,021.621 (+0.01%) AJD</p>
                </div>
                <div className='newsfeed__chart'>
                   <LineGraph />
                   <TimeLine />
                </div>
            </div>
            <div className='newsfeed__buying__section'>
              <h2>Pouvoir d'Achat</h2>
              <h2>€5,191.001</h2>
            </div>
            <div className='newsfeed__market__section'>
              <div className='newsfeed__market__box'>
                <p>Le marché est ouvert !</p>
                <h1>Bonjour chers investisseur :D</h1>
              </div>
            </div>
            <div className="newsfeed__popularlists__section">
              <div className="newsfeed__popularlists__intro">
                <h1> En Tendance dans le monde</h1>
                <p>Voir plus</p>
              </div>
              <div className="newsfeed_popularlists_badges">
                {popularTopics.map((topic) => (
                  <Chip 
                    className="topic__badge"
                    variant="outlined"
                    label={topic}
                    avatar={<Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />} 
               />
              ))}
           </div>
          </div>
        </div>
    </div>
  )
}

export default Newsfeed
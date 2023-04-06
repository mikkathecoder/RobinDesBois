import axios from 'axios';
import React, { useState, useEffect, useRef} from 'react'
import "./Newsfeed.css"
import LineGraph from './LineGraph'
import TimeLine from "./TimeLine"
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';


function Newsfeed() {
  async function sendMessage(userMessage) {
    try {
      const response = await axios.post('http://localhost:3000/chat', {
        message: userMessage,
      });

      console.log('response.data.message:', response.data.message);
  
      await addDoc(collection(db, 'messages'), {
        text: userMessage,
        sender: 'user',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      await addDoc(collection(db, 'messages'), {
        text: response.data.message,
        sender: 'chatbot',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      inputRef.current.value = '';
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  
  const inputRef = useRef();
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  
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
            <div className='chatbot__container__box'>
              <p>Interface du conseiller</p>
              <h1>Votre conseiller est la pour vous aider :D</h1>
              <div className="chatbot__input__container">
                <input ref={inputRef} type="text" className="chatbot__input" placeholder="Type your message here..." />
                <button className="chatbot__send__button" onClick={() => sendMessage(inputRef.current.value)}>Send</button>
              </div>
              <div className="chatbot__messages__container">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`chatbot__message ${
                      message.sender === 'user'? 'user' : 'chatbot'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
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


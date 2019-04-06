import React, { useState, useEffect } from 'react';
import style from './App.module.css';

const App = props => {
  
  const [emojiList, setEmojiList] =useState([
    '😄', '😎', '😁', '😊'
  ])
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("😊 Welcome");
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    document.title = "useEffect hook in action!";
    setTimeout(()=> setLoading(false), 2000);
  }, [])

  useEffect(()=> {
    let count = updateCount;
    setUpdateCount(++count);
  },[msg])

  const updateText = () => {
    setMsg(`${emojiList[Math.trunc(Math.random()*4)]} Hello!, Nice to meet you.`);
  }

  return(
    <div className={style.App}>
      <p className={style.info}>Click to update the heading</p>
      <h1 className={style.heading} onClick={updateText}>{loading ? "⏱ Loading..." : msg }</h1>
      <p className={style.caption}>{`updated ${updateCount} times so far.`}</p>
    </div>
  )
}
export default App;

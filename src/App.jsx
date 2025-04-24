
import { useEffect, useState } from 'react';
import './App.css'
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';

function App() {
  const [vote, setVote] = useState(() => {
    const savedStatistics = localStorage.getItem("currentFeedback");
    if (savedStatistics !== null) {
      return JSON.parse ( savedStatistics );
    }
    return {good: 0,
    neutral: 0,
    bad: 0,}
 });

  const updateFeedback = (voteType) => {
    setVote({ ...vote, [voteType]: vote[voteType] + 1 });
  };
  
  const totalFeedback = vote.good + vote.neutral + vote.bad;

  const positiveFeedback = Math.round((vote.good / totalFeedback) * 100);

  const onReset = () => {
    setVote({good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => { localStorage.setItem('currentFeedback', JSON.stringify(vote)) }, [vote]);
  
  return (
    <>
      <Description />
      <Options onClickVote={updateFeedback} onResetBtn = {onReset} />
      {totalFeedback > 0 ? <Feedback
        valueGood={vote.good}
        valueNeutral={vote.neutral}
        valueBad={vote.bad}
        totalValue={totalFeedback} positiveCount = {positiveFeedback} /> : <Notification />}
    </>
  )
}

export default App

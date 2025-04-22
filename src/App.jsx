
import { useState } from 'react';
import './App.css'
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [vote, setVote] = useState ({
	good: 0,
	neutral: 0,
	bad: 0,
  });

  const updateVote = (voteType) => {
    setVote({ ...vote, [voteType]: vote[voteType] + 1 });
  };
  
  const totalFeedback = vote.good + vote.neutral + vote.bad;

  return (
    <>
      <Description />
      <Options onClickVote={updateVote} />
      {totalFeedback > 0 ? <Feedback
        valueGood={vote.good}
        valueNeutral={vote.neutral}
        valueBad={vote.bad}
        totalValue={totalFeedback} /> : <Notification />}
    </>
  )
}

export default App

import { useState } from 'react';
import { PiSmileyBold, PiSmileyMehBold, PiSmileySadBold } from 'react-icons/pi';

import Title from './Title';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
const iconsArr = [<PiSmileyBold />, <PiSmileyMehBold />, <PiSmileySadBold />];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = Object.values(options).reduce(
      (acc, option) => acc + option,
      0
    );
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    const total = countTotalFeedback();
    return Math.round((good * 100) / Number(total)) || 0;
  };

  return (
    <>
      <Title title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            icon={iconsArr}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Title>
    </>
  );
}

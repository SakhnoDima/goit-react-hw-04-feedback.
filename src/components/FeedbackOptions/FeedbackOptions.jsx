import React from 'react';
import PropTypes from 'prop-types';

import { BtnBox, GoodBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BtnBox>
      {options.map(option => (
        <GoodBtn
          name={option}
          key={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </GoodBtn>
      ))}
    </BtnBox>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

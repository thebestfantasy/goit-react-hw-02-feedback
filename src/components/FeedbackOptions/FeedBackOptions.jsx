import PropTypes from 'prop-types';
import { ContainerButton } from './FeedBackOption.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ContainerButton>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </ContainerButton>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

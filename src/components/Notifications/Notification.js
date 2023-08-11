import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styled';

const Notification = ({ message }) => {
  return <Paragraph>{message}</Paragraph>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

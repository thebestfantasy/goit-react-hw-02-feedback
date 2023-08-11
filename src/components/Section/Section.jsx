import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

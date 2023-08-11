import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedBackOptions';
import Section from './Section/Section';
import Notification from './Notifications/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };

  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleFeedback}
            options={feedbackOptions}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;

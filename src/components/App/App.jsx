import React from "react";
import css from './App.module.css'
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import {Section} from 'components/Section/Section'

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  

  
  render() {
    const { good,neutral,bad } = this.state;
    

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good','neutral','bad']} />
        </Section>
      </div>
    );
  }
}
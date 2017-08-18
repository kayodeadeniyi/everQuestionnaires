import React from 'react';
import { shallow } from 'enzyme';
import Questionnaire from '../components/Questionnaire';
import Question from '../../question/components/Question'
import {formattedData, question} from './testData';

const setup = (title = formattedData.title, questions = question) => {
    const component = shallow(
      <Questionnaire title={title} questions={questions}/>
    );

  return {
    component
  };
}

describe('Questionnaire component', () => {
  it('passes props to Question components', () => {
    const { component } = setup();
    expect(component.find(Question).props()).toEqual(question["1"]); 
    expect(component.find(Question).length).toEqual(1);
  });
  
  it('renders a list of Question components', () => {
    const { component } = setup(formattedData.title, formattedData.questions); 
    expect(component.find(Question).length).toEqual(2);
  });
});
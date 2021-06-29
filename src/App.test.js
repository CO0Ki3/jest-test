import React from 'react';
import Counter from './counter';
import { render, fireEvent } from '@testing-library/react';

describe('<Counter />', () => {
  it('성공적으로 렌더링되어야 합니다.', () => {
    const wrapper = render(<Counter />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it('타이틀 인풋과 버튼이 렌더링되어야 합니다.', () => {
    const wrapper = render(<Counter />);
    wrapper.getByTestId('inputtest');
    wrapper.getByText('증가');
    wrapper.getByText('0');
  });

  // it('타이틀 인풋이 변경되어야 합니다.', () => {
  //   const wrapper = render(<Counter />);
  //   const inputText = wrapper.getByTestId('inputtest');
  //   fireEvent.change(inputText, { target: { value: 'hello world' } });
  //   expect(inputText).toBe('hello world');
  // });

  it('숫자가 올라가야 합니다.', () => {
    const wrapper = render(<Counter />);
    const number = wrapper.getByText('0');
    const plusButton = wrapper.getByText('증가');
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('2');
    expect(number.textContent).toBe('2');
  });
});
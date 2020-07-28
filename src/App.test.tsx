import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import addTask  from './App';

test('renders input box', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputBox = getByPlaceholderText('Enter your todo here');
  expect(inputBox).toBeInTheDocument();
});

test('renders Add Btn', () => {
  const { getByText } = render(<App />);
  const addBtn = getByText('Add');
  expect(addBtn).toBeInTheDocument();
});




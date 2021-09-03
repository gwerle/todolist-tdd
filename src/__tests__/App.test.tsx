import { render, fireEvent } from '@testing-library/react';

import App from '../App';


describe('<App />', () => {
    it('should render a todo input', () => {
      const { getByPlaceholderText } = render(<App />)

      expect(getByPlaceholderText('Add a todo')).toBeInTheDocument()
    })

    it('adds a todo when submiting a text', () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<App />)

        const input = getByPlaceholderText('Add a todo');

        fireEvent.change(input, {
            target: {
                value: 'Aprender React'
            }
        })

        fireEvent.submit(input)

        expect(getByTestId('todo-list', getByText('Aprender React'))).toBeInTheDocument()
    })
    
    it('should delete a todo', () => {
      const { getByPlaceholderText, getByTestId, queryByText } = render(<App />)

        const input = getByPlaceholderText('Add a todo');

        fireEvent.change(input, {
            target: {
                value: 'Aprender React 2'
            }
        })

        fireEvent.submit(input)

        const button = getByTestId('button-remove-0')

        fireEvent.click(button);

        expect(queryByText('Aprender React 2')).toBeNull();

    })
});
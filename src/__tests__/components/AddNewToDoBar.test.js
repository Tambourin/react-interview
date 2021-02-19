import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AddNewTodoItemBar from '../../components/AddNewToDoBar';

describe('AddNewToddoBar test', () => {
    const setup = () => {        
        const addTodoMockFunction = jest.fn();
        const { getByPlaceholderText, getByText } = render(<AddNewTodoItemBar addTodo={addTodoMockFunction} />);
        const input = getByPlaceholderText('Add new todo');
        const submitButton = getByText('Submit');
        return { input, submitButton, addTodoMockFunction };
    };

    it('New todo can be created', () => {        
        const {input, submitButton, addTodoMockFunction} = setup();
        fireEvent.change(input, { target: { value: 'new test todo' } });    
        fireEvent.click(submitButton);
        expect(addTodoMockFunction).toBeCalled();
        expect(addTodoMockFunction.mock.calls[0][0]).toEqual('new test todo');
    });

    it('Text field is cleared after successfull submit', () => {
        const {input, submitButton} = setup();
        fireEvent.change(input, { target: { value: 'new test todo' } });    
        expect(input.value).toBe('new test todo');
        fireEvent.click(submitButton);
        expect(input.value).toBe('');
    });

    it('Too short input is not allowed', () => {        
        const {input, submitButton, addTodoMockFunction} = setup();
        fireEvent.change(input, { target: { value: '12' } });    
        fireEvent.click(submitButton);
        expect(addTodoMockFunction).not.toBeCalled();
    });
});
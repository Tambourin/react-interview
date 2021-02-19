import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNewTodoItemBar from '../../components/AddNewTodoBar';

describe('AddNewToddoBar test', () => {
    const setup = () => {        
        const addTodoMockFunction = jest.fn();

        const { getByPlaceholderText, getByText } = render(
            <AddNewTodoItemBar addTodo={addTodoMockFunction} />);
        const input = getByPlaceholderText('Add new todo');
        const submitButton = getByText('Submit');
        
        return { input, submitButton, addTodoMockFunction, getByText };
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

    it('Too short input is not added', () => {        
        const {input, submitButton, addTodoMockFunction} = setup();
        fireEvent.change(input, { target: { value: '12' } });    
        fireEvent.click(submitButton);
        expect(addTodoMockFunction).not.toBeCalled();
    });

    it('Too short input results on error message', () => {        
        const {input, submitButton, getByText} = setup();
        fireEvent.change(input, { target: { value: '12' } });    
        fireEvent.click(submitButton);
        expect(getByText('Name should be longer than 3 characters'))
            .toBeInstanceOf(HTMLParagraphElement);
    });
});
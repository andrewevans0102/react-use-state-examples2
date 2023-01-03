import { useState } from 'react';

interface textInput {
    text: string;
}

export const Multiple = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    const handleTodoChange = (event: any) => {
        setTodoInput(event?.target.value);
        console.log(
            `todo input was updated successfully to be ${event?.target.value}`
        );
    };

    const addTodo = (newTodo: string) => {
        const localTodos: textInput[] = todos;
        localTodos.push({ text: newTodo });
        // set value
        // use spread syntax to trigger re render
        setTodos([...localTodos]);
        console.log(
            `todo array was updated to be ${JSON.stringify(localTodos)}`
        );

        // clear input field
        setTodoInput('');
        console.log('todo input was cleared');
    };

    return (
        <section>
            <h2>Multiple Values</h2>
            <input type="text" onChange={handleTodoChange} value={todoInput} />
            <div>
                <button
                    onClick={() => {
                        addTodo(todoInput);
                    }}
                >
                    Create Todo
                </button>
            </div>
            <ul>
                {todos &&
                    todos.map((value: textInput, index: number) => {
                        return <li key={index}>{value.text}</li>;
                    })}
            </ul>
        </section>
    );
};

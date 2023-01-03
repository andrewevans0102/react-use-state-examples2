import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <section>
            <h2>One Value</h2>
            <p>You clicked {count} times</p>
            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                        console.log(
                            `count value was incremented to be ${count + 1}`
                        );
                    }}
                >
                    Click me
                </button>
            </div>
        </section>
    );
};

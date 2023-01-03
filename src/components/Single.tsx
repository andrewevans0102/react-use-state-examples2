import { useState } from 'react';

export const Single = () => {
    const [title, setTitle] = useState('hello world');

    return (
        <section>
            <h1>{title}</h1>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                    console.log(
                        `single component value was updated with ${e.target.value}`
                    );
                }}
                value={title}
            />
        </section>
    );
};

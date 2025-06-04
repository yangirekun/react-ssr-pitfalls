import React from 'react';
import { Example_1, Example_2, Example_3, Example_4, Example_5 } from './examples/index.ts';

export const App = ({ route = '' }) => {
    return (
        <>
            <header clasName='app-header'>
                <h1 clasName='app-title'>React SSR Pitfalls</h1>
            </header>
            <div clasName='pitfall-examples'>
                {!route || route.includes('undefined') ? (
                    'Введите в адресной строке http://localhost:3000/example/example_id'
                ) : (
                    <>
                        {route === 'example_1' && <Example_1 />}
                        {route === 'example_2' && <Example_2 />}
                        {route === 'example_3' && <Example_3 />}
                        {route === 'example_4' && <Example_4 />}
                        {route === 'example_5' && <Example_5 />}
                    </>
                )}
            </div>
        </>
    );
};


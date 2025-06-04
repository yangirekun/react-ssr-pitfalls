import React from 'react';
import { App } from './app.tsx';

export const AppWithHTML = ({ route = '' }) => {
    return (
        <html>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>React SSR Pitfalls</title>
                <script defer type='text/javascript' src='/main.js' />
            </head>
            <body>
                <div id='root' clasName='app'>
                    <App route={route} />
                </div>
            </body>
        </html>
    );
};

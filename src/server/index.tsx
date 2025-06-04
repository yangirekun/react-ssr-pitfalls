import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { AppWithHTML } from '../shared/index.ts';
import express from 'express';
import path from 'path';

const app = express();

app.get(['/', '/example/:example_id'], (req, res) => {
    const route = `example_${req.params.example_id}`;

    const { pipe } = renderToPipeableStream(<AppWithHTML route={route} />, {
        onShellReady() {
            res.setHeader('content-type', 'text/html');
            pipe(res);
        },
    });
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => console.log('Server running on port 3000'));

/*
// you can try it with earlier React versions

import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from '../shared/index.ts';
import express from 'express';
import path from 'path';

const app = express();

app.get(['/', '/example/:example_id'], (req, res) => {
    const route = `example_${req.params.example_id}`;

    res.send(ReactDOMServer.renderToString(<AppWithHTML route={route} />));
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => console.log('Server running on port 3000'));
*/

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from '../shared/index.ts';

const root = document.getElementById('root');

if (root) {
    const route = window.location.pathname.slice(1).replace('/', '_');
    hydrateRoot(root, <App route={route} />);
}

/*
// you can try it with earlier React versions

import React from 'react';
import { hydrate } from 'react-dom';
import { App } from '../shared/index.ts';

const root = document.getElementById('root');

if (root) {
    const route = window.location.pathname.slice(1).replace('/', '_');
    hydrate(<App route={route} />, root);
}
*/

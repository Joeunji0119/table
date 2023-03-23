import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import App from './App';

import { variables } from './styles/variables';
import { global } from './styles/globalStyle';
import { colors } from './styles/colors';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Global styles={global} />
		<ThemeProvider theme={{ colors, variables }}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';


import Login from './views/Login/Index';

import './styles/global.css'

ReactDOM.render(
	<StyledEngineProvider injectFirst>
		<Login/>

	</StyledEngineProvider>,
	document.querySelector("#root")
  )

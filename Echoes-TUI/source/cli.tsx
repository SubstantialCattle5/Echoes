#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import { App } from './app.js';

// const cli = meow(
// 	`
// 	Usage
// 	  $ Echoes-TUI

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ Echoes-TUI --name=Jane
// 	  Hello, Jane
// `,
// 	{
// 		importMeta: import.meta,
// 	},
// );

render(<App />);

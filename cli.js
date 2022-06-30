#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const meow = require("meow");

const { render } = require("ink");

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ f1-cli-tool

	Options
		--season  Season you want to check quali results for (by default 2022)
		--round	  Round of the season (by default 1)

	Examples
	  $ f1-cli-tool --season=2022 --round=1
`);

render(React.createElement(ui, cli.flags));

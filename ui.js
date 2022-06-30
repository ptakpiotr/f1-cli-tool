"use strict";
const React = require("react");
const importJsx = require("import-jsx");

const Header = importJsx("./components/Header");
const Table = importJsx("./components/Table");
const Footer = importJsx("./components/Footer");

const App = ({ season = 2022, round = 1 }) => (
	<>
		<Header season={season} round={round} />
		<Table season={season} round={round} />
		<Footer />
	</>
);

module.exports = App;

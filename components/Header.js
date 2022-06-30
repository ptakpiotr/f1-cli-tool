const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Header = ({ season, round }) => {
	return (
		<Gradient name="vice">
			<BigText
				text={`Quali: ${season} Round: ${round}`}
				align="center"
				font="slick"
			/>
		</Gradient>
	);
};

module.exports = Header;

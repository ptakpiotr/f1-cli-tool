const React = require("react");
const { Box, Text } = require("ink");

const Footer = () => {
	return (
		<Box alignSelf="center">
			<Box>
				<Text>powered by ergast API: http://ergast.com/mrd/</Text>
			</Box>
		</Box>
	);
};

module.exports = Footer;

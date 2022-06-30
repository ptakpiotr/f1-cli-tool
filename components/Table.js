const React = require("react");
const { useEffect, useState } = require("react");
const { Box, Text } = require("ink");
const { default: axios } = require("axios");

const Table = ({ season, round }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios
			.get(`http://ergast.com/api/f1/${season}/${round}/qualifying.json`)
			.then((dt) => {
				setData(dt.data.MRData.RaceTable.Races[0].QualifyingResults);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<>
			{data != null ? (
				<Box borderStyle="round" padding={3} flexDirection="column">
					<Box>
						<Box width="7%"></Box>
						<Box width="16%">
							<Text>Name</Text>
						</Box>
						<Box width="16%">
							<Text>Surname</Text>
						</Box>
						<Box width="16%">
							<Text>Nation</Text>
						</Box>
						<Box width="20%">
							<Text>Team</Text>
						</Box>
						<Box width="16%">
							<Text>Time</Text>
						</Box>
					</Box>
					{data.map((dt) => {
						return (
							<Box key={dt.Driver.driverId}>
								<Box width="6%">
									<Text color="cyan">{dt.position}. </Text>
								</Box>
								<Box width="16%">
									<Text color="green"> {dt.Driver.givenName} </Text>
								</Box>
								<Box width="16%">
									<Text color="green"> {dt.Driver.familyName} </Text>
								</Box>
								<Box width="16%">
									<Text color="blue"> {dt.Driver.nationality} </Text>
								</Box>
								<Box width="20%">
									<Text color="red"> {dt.Constructor.name} </Text>
								</Box>
								<Box width="16%">
									<Text color="yellow"> {dt.Q3 ?? dt.Q2 ?? dt.Q1} </Text>
								</Box>
							</Box>
						);
					})}
				</Box>
			) : (
				<></>
			)}
		</>
	);
};

module.exports = Table;

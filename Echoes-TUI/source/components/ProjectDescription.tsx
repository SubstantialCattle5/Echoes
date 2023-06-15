import React from 'react';
import {Box, Text} from 'ink';
import Gradient from 'ink-gradient';
import chalk from 'chalk';
import BigText from 'ink-big-text';

interface Data {
	name: string;
	version: string;
	frameWork: string;
	path: string;
}

const ProjectsDescription = ({name, version, frameWork, path}: Data) => (
	<Box
		borderStyle="round"
		borderColor="redBright"
		flexDirection="column"
		width={'80%'}
	>
		<Box width={'100%'} justifyContent={'center'}>
			<Gradient name="morning">
				<BigText text={name} font={'tiny'} />
			</Gradient>
		</Box>

		<Box>
			<Text bold>Version: </Text>
			<Text>{chalk.green(version)}</Text>
		</Box>
		<Box>
			<Text bold>Component Path: </Text>
			<Text>{chalk.green(path.slice(path.length - 20))}</Text>
		</Box>
		<Box>
			<Text bold>Backend Path: </Text>
			<Text>{chalk.green(path.slice(path.length - 20))}</Text>
		</Box>
		<Box>
			<Text bold>Domains: </Text>
			<Text>{chalk.green(`${frameWork},TailwindCSS,Prisma`)}</Text>
		</Box>
	</Box>
);

export default ProjectsDescription;

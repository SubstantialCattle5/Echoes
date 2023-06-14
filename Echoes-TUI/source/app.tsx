import React, {useState} from 'react';
import {Box, Text, useFocusManager, useInput, useStdin} from 'ink';
import {Header} from './components/Header.js';
import clear from 'clear';
import {readPackageJson} from './checkFramework.js';
import ProjectDescription from './components/ProjectDescription.js';
import ProjectsList from './components/ProjectsList.js';
import MenuSelect from './components/MenuSelect.js';
import TemplateList from './components/TemplateList.js';
import TemplateOutput from './components/TemplateOutput.js';

export const App = () => {
	const [Option, setOption] = useState('frontend');
	const [SelectedTemplate, setSelectedTemplate] = useState('navbar');
	const fileData = readPackageJson();
	const {name, version, frameWork, path} = fileData;
	const {isRawModeSupported} = useStdin();
	const {focus} = useFocusManager();

	const optionHandler = (option: string): string => {
		if (option === 'frontend' || option === 'backend') {
			setOption(option);
		}
		return option;
	};

	const templateHandler = (selectedTemplate: string): string => {
		setSelectedTemplate(selectedTemplate);
		return selectedTemplate;
	};
	useInput(input => {
		if (input === '1') {
			clear();
			focus('1');
		}
		if (input === '2') {
			clear();
			focus('2');
		}
	});

	return (
		<>
			<Header />
			<Box
				borderColor={'blue'}
				borderStyle={'double'}
				height={'100%'}
				width={'100%'}
			>
				<Box flexDirection="column" width={'50%'}>
					<ProjectDescription
						name={name}
						version={version}
						frameWork={frameWork}
						path={path?.slice() || 'cannot find path'}
					/>
					{isRawModeSupported ? (
						<>
							<MenuSelect optionHandler={optionHandler} id={'1'} />
							<TemplateList
								optionHandler={templateHandler}
								id={'2'}
								selectedOption={Option}
							/>
						</>
					) : (
						<Text color={'redBright'}>Raw mode is not supported</Text>
					)}
				</Box>
				<TemplateOutput selectedOption={SelectedTemplate} />
				<ProjectsList />
			</Box>

		</>
	);
};

export default App;

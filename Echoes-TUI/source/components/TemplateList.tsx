import React from 'react';
import {Box, useFocus, Text} from 'ink';
import SelectInput from 'ink-select-input';

interface Item {
	label: string;
	value: string;
}

const frontendTemplates: Item[] = [
	{
		label: 'Nav Bar',
		value: 'navbar',
	},
	{
		label: 'Footer',
		value: 'footer',
	},
	{
		label: 'Header',
		value: 'header',
	},
	{
		label: 'Carousel',
		value: 'carousel',
	},
	{
		label: 'Modal',
		value: 'modal',
	},
	{
		label: 'Login',
		value: 'login',
	},
];
const backendTemplates = [
	{
		label: 'Google Auth',
		value: 'googleauth',
	},
	{
		label: 'Sanitize Input',
		value: 'sanitationinput',
	},
	{
		label: 'Github Auth',
		value: 'githubauth',
	},
	{
		label: 'Two Factor Authentication',
		value: 'twofactorauthentication',
	},
	{
		label: 'Session Management',
		value: 'sessionmanagement',
	},
	{
		label: 'Database Connection',
		value: 'databaseconnection',
	},
];
interface TemplateListProps {
	optionHandler: (option: string) => string;
	id: string;
	selectedOption: string;
}

const TemplateList = ({
	optionHandler,
	id,
	selectedOption,
}: TemplateListProps) => {
	const {isFocused} = useFocus({id});

	const handleSelect = (item: Item) => {
		return optionHandler(item.value);
	};
	let itemsData: Item[] = frontendTemplates;
	if (selectedOption === 'backend') {
		itemsData = backendTemplates;
	}
	return (
		<Box flexDirection="column" paddingX={1}>
			<Text bold inverse>
				Select a template:
			</Text>
			<Box borderStyle={'round'} borderColor={!isFocused?"redBright" : "green"} width={'80%'}>
				<SelectInput
					items={itemsData}
					onSelect={handleSelect}
					isFocused={isFocused}
				/>
			</Box>
		</Box>
	);
};

export default TemplateList;

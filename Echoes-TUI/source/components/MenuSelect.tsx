import React from 'react';
import {Box, useFocus, Text} from 'ink';
import SelectInput from 'ink-select-input';

interface Item {
	label: string;
	value: string;
}

const items = [
	{
		label: 'Frontend',
		value: 'frontend',
	},
	{
		label: 'Backend',
		value: 'backend',
	},
];

interface MenuSelectProps {
	optionHandler: (option: string) => string;
	id: string;
}

const MenuSelect = ({optionHandler, id}: MenuSelectProps) => {
	const {isFocused} = useFocus({id});
	const handleSelect = (item: Item) => {
		return optionHandler(item.value);
	};

	return (
		<Box flexDirection="column" paddingX={1}>
			<Text bold inverse>
				Select a Domain:
			</Text>
			<Box
				borderStyle={'round'}
				borderColor={!isFocused ? 'redBright' : 'green'}
				width={'80%'}
			>
				<SelectInput
					items={items}
					onSelect={handleSelect}
					isFocused={isFocused}
				/>
			</Box>
		</Box>
	);
};

export default MenuSelect;

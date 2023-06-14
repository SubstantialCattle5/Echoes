import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import React from 'react';

export const Header = () => {
	return (
		<Gradient name="morning">
			<BigText text={'Echoes'} align={'center'} font={"tiny"} />
		</Gradient>
	);
};

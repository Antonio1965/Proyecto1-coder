import React from 'react';
import styled from 'styled-components';
import { PushSpinner } from 'react-spinners-kit';

const StyledLoaderContainer = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Loader = () => {
	return (
		<StyledLoaderContainer>
			<PushSpinner color="#3f51b5" loading />
		</StyledLoaderContainer>
	);
};

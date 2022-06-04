import './App.css';
import Posts from './components/Posts/Posts';
import { Box } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
`




const App = () => {
	return (
		<Wrapper>
			<Title>Post list</Title>
			<Box className='App'>
				<Posts />
			</Box>
		</Wrapper>
	)
}

export default App;
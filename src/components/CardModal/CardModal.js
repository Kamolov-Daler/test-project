import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components'

const Avatar = styled.img`
	width: 90%;
	height: auto;
	border-radius: 12px;
`;

const UserName = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	`;

const UserEmail = styled.h3`
	color: gray;
	font-size: 1.5rem;
	font-weight: 600;
`

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

export default function CardModal({ open, setOpen, fullName, email, avatar }) {

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				maxWidth='lg'
				fullWidth
			>
				<DialogContent>
					<Grid container>
						<Grid item xs={12} sm={12} md={6}>
							<Avatar src={avatar} />
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Box mt={2} mb={1}>
								<UserName>{fullName}</UserName>
							</Box>
							<Box mt={2} mb={1}><UserEmail>{email}</UserEmail></Box>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button variant='outlined' color='secondary' onClick={handleClose}>Confirm</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div >
	);
}
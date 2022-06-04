import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardModal from '../CardModal/CardModal'



export default function PostCard({ firstName, lastName, avatar, email }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Card onClick={() => setOpen(true)} sx={{ maxWidth: 345, cursor: 'pointer' }}>
				<CardMedia
					component="img"
					height="340"
					image={avatar}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{`${firstName} ${lastName}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{email}
					</Typography>
				</CardContent>
			</Card>
			<CardModal open={open} setOpen={setOpen} fullName={`${firstName} ${lastName}`} avatar={avatar} email={email} />
		</>
	);
}
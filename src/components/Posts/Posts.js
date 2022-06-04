import { useState, useEffect } from 'react';
import { Grid, Box, TextField, Alert, CircularProgress, Pagination } from '@mui/material'
import PostCard from '../PostCard/PostCard';

const Posts = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [search, setSearch] = useState("");
	const [searchItems, setSearchItems] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);


	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const response = await fetch(`https://reqres.in/api/users?page=${page}`)
				const responseJson = await response.json();
				setItems(responseJson.data);
				setTotalPage(responseJson.total_pages)
				setError(false);
				setLoading(false);
			} catch (e) {
				setError(e);
				setLoading(false);
			}
		})()
	}, [page])

	useEffect(() => {
		if (search.trim() === '') {
			setSearchItems(items);
		} else {
			const filterItems = items.filter(item =>
				item.first_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
				item.last_name.toLowerCase().includes(search.toLocaleLowerCase()));
			setSearchItems(filterItems);
		}
	}, [search, items])

	if (error) {
		return <Box textAlign='left' mt={3} mb={3}><Alert severity="error">{error}</Alert></Box>;
	} else if (loading) {
		return <Box textAlign='center'>
			<CircularProgress />
		</Box>;
	} else {
		return (
			<>
				<Box textAlign='left' mt={3} mb={3}>
					<TextField value={search} onChange={e => setSearch(e.target.value)} id="outlined-basic" label="Search" variant="outlined" />
				</Box>
				{searchItems?.length ?
					<>
						<Grid spacing={4} container>
							<>
								{searchItems.map(item => (
									<Grid container justifyContent={'center'} item xs={12} sm={6} md={4} lg={3} key={item.id}>
										<PostCard firstName={item.first_name} lastName={item.last_name} avatar={item.avatar} email={item.email} />
									</Grid>
								))}
							</>
						</Grid>
						<Box sx={{ padding: '50px 20px', display: 'flex', justifyContent: 'flex-end' }} >
							<Pagination page={page} onChange={(_, page) => setPage(page)} variant="outlined" shape="rounded" count={totalPage} />
						</Box>
					</>
					:
					<Box mt={3} sx={{ width: '50%' }} ><Alert severity="warning">No data</Alert> </Box>
				}
			</>
		);
	}
}

export default Posts;
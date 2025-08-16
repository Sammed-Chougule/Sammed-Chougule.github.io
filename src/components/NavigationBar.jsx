import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Avatar } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { LinkedIn, GitHub } from '@mui/icons-material'

const navigationLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/projects', label: 'Projects' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' }
]

export default function NavigationBar() {
	const currentLocation = useLocation()
	return (
		<AppBar 
			position="sticky" 
			color="default" 
			elevation={0}
			sx={{ 
				backgroundColor: 'rgba(255, 255, 255, 0.95)',
				backdropFilter: 'blur(10px)',
				borderBottom: '1px solid rgba(10, 14, 39, 0.06)'
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ gap: 3, py: 1 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<Avatar
							sx={{
								width: 40,
								height: 40,
								bgcolor: 'primary.main',
								fontWeight: 700,
								fontSize: '18px'
							}}
						>
							SC
						</Avatar>
						<Typography variant="h6" fontWeight={700} color="primary">
							Sammed Chougule
						</Typography>
					</Box>
					
					<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
						<Box sx={{ display: 'flex', gap: 1 }}>
							{navigationLinks.map(link => (
								<Button
									key={link.to}
									component={RouterLink}
									to={link.to}
									color={currentLocation.pathname === link.to ? 'primary' : 'inherit'}
									sx={{
										px: 3,
										py: 1,
										borderRadius: 2,
										fontWeight: currentLocation.pathname === link.to ? 600 : 500,
										'&:hover': {
											backgroundColor: currentLocation.pathname === link.to 
												? 'primary.light' 
												: 'rgba(10, 14, 39, 0.08)'
										}
									}}
								>
									{link.label}
								</Button>
							))}
						</Box>
					</Box>

					<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
						<IconButton
							color="primary"
							onClick={() => window.open('https://linkedin.com/in/sammed-16', '_blank')}
							sx={{ 
								'&:hover': { 
									backgroundColor: 'rgba(10, 14, 39, 0.08)',
									transform: 'translateY(-1px)'
								},
								transition: 'all 0.2s ease'
							}}
						>
							<LinkedIn />
						</IconButton>
						<IconButton
							color="primary"
							onClick={() => window.open('https://github.com/sammed-chougule', '_blank')}
							sx={{ 
								'&:hover': { 
									backgroundColor: 'rgba(10, 14, 39, 0.08)',
									transform: 'translateY(-1px)'
								},
								transition: 'all 0.2s ease'
							}}
						>
							<GitHub />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}


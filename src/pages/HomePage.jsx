import React from 'react'
import { Box, Typography, Stack, Button, Chip, Grid, LinearProgress, Avatar, Container, Paper } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Person, Language, Settings, Download, ArrowDownward } from '@mui/icons-material'

export default function HomePage() {
	const handleDownloadResume = () => {
		// Create a link element to trigger download
		const link = document.createElement('a')
		link.href = '/Sammed_Chougule_Resume.pdf'
		link.download = 'Sammed_Chougule_Resume.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<Box sx={{ 
			minHeight: '100vh', 
			bgcolor: 'rgba(10, 14, 39, 0.02)', 
			py: 4 
		}}>
			<Container maxWidth="xl">
				{/* Hero Section - Card Style */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Grid container spacing={6} sx={{ alignItems: 'center', minHeight: '70vh' }}>
						<Grid item xs={12} md={6}>
							<Stack spacing={4}>
								<Box>
									<Typography variant="h1" fontWeight={800} sx={{ 
										mb: 1, 
										fontSize: { xs: '2.5rem', md: '3.5rem' },
										lineHeight: 1.1
									}}>
										Hi,
									</Typography>
									<Typography variant="h1" fontWeight={800} sx={{ 
										mb: 2, 
										fontSize: { xs: '2.5rem', md: '3.5rem' },
										lineHeight: 1.1
									}}>
										I'm <Box component="span" sx={{ color: 'secondary.main' }}>Sammed</Box>
									</Typography>
									<Typography variant="h3" fontWeight={700} sx={{ 
										mb: 3,
										fontSize: { xs: '1.5rem', md: '2rem' },
										color: 'text.secondary'
									}}>
										Software Engineer
									</Typography>
									<Typography variant="h6" color="text.secondary" sx={{ 
										maxWidth: 500, 
										lineHeight: 1.7,
										fontWeight: 400
									}}>
										High level experience in React.js, Redux, and modern web technologies, 
										producing quality work with proven results in enterprise applications.
									</Typography>
								</Box>

								<Button 
									variant="contained" 
									size="large" 
									component={RouterLink} 
									to="/contact"
									sx={{ 
										px: 6, 
										py: 2, 
										borderRadius: 3,
										fontSize: '1.1rem',
										fontWeight: 600,
										boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
										'&:hover': {
											boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
											transform: 'translateY(-2px)'
										}
									}}
								>
									Contact Me
								</Button>
								
								<Button 
									variant="outlined" 
									size="large"
									startIcon={<Download />}
									onClick={handleDownloadResume}
									sx={{ 
										px: 6, 
										py: 2, 
										borderRadius: 3,
										fontSize: '1.1rem',
										fontWeight: 600,
										borderColor: 'rgba(10, 14, 39, 0.2)',
										color: 'primary.main',
										'&:hover': {
											borderColor: 'primary.main',
											bgcolor: 'rgba(10, 14, 39, 0.05)',
											transform: 'translateY(-2px)'
										}
									}}
								>
									Download CV
								</Button>
							</Stack>
						</Grid>

						<Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
							<Box sx={{ position: 'relative' }}>
								{/* Background blob shape */}
								<Box sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									width: 400,
									height: 400,
									bgcolor: 'secondary.main',
									borderRadius: '50%',
									filter: 'blur(80px)',
									opacity: 0.15,
									zIndex: 0
								}} />
								
								{/* Profile Avatar */}
								<Avatar
									sx={{
										width: 320,
										height: 320,
										bgcolor: 'primary.main',
										fontSize: '120px',
										fontWeight: 700,
										border: '6px solid',
										borderColor: 'background.paper',
										boxShadow: '0 8px 32px rgba(10, 14, 39, 0.15)',
										position: 'relative',
										zIndex: 1
									}}
								>
								<img
									src="/sammed.jpg"
									alt="Sammed Chougule"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '50%'
									}}
								/>
								</Avatar>
							</Box>
						</Grid>
					</Grid>
				</Paper>

				{/* About Me Section - Card Style */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Grid container spacing={6} sx={{ alignItems: 'center' }}>
						<Grid item xs={12} md={6}>
							<Avatar
								sx={{
									width: 300,
									height: 300,
									bgcolor: 'grey.100',
									fontSize: '100px',
									fontWeight: 700,
									color: 'text.secondary',
									border: '4px solid',
									borderColor: 'grey.200'
								}}
							>
								<img
									src="/sammed2.jpg"
									alt="Sammed Chougule"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '50%'
									}}
								/>
								
							</Avatar>
						</Grid>

						<Grid item xs={12} md={6}>
							<Stack spacing={4}>
								<Box>
									<Typography variant="h3" fontWeight={700} sx={{ mb: 1 }}>
										About Me
									</Typography>
									<Typography variant="h5" color="secondary.main" sx={{ mb: 3, fontWeight: 600 }}>
										My Introduction
									</Typography>
									<Typography variant="body1" color="text.secondary" sx={{ 
										lineHeight: 1.8, 
										mb: 4,
										fontSize: '1.1rem'
									}}>
										Software Engineer with extensive knowledge and years of experience, 
										working in React.js, Redux, and modern web technologies, delivering quality work 
										that serves 1000+ enterprise clients.
									</Typography>
								</Box>

								<Grid container spacing={4}>
									<Grid item xs={6}>
										<Box sx={{ 
											textAlign: 'center',
											p: 3,
											bgcolor: 'rgba(0, 212, 255, 0.05)',
											borderRadius: 3,
											border: '1px solid rgba(0, 212, 255, 0.1)'
										}}>
											<Typography variant="h3" fontWeight={700} color="secondary.main">
												3.5+
											</Typography>
											<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
												Years experience
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={6}>
										<Box sx={{ 
											textAlign: 'center',
											p: 3,
											bgcolor: 'rgba(10, 14, 39, 0.05)',
											borderRadius: 3,
											border: '1px solid rgba(10, 14, 39, 0.1)'
										}}>
											<Typography variant="h3" fontWeight={700} color="primary.main">
												2+
											</Typography>
											<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
												Companies worked
											</Typography>
										</Box>
									</Grid>
								</Grid>
							</Stack>
						</Grid>
					</Grid>
				</Paper>

				{/* Skills Section - Card Style */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ textAlign: 'center', mb: 6 }}>
						<Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
							Skills
						</Typography>
						<Typography variant="h5" color="secondary.main" sx={{ fontWeight: 600 }}>
							My technical level
						</Typography>
					</Box>

					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<Box sx={{ 
								p: 4, 
								border: '1px solid', 
								borderColor: 'divider', 
								borderRadius: 3,
								bgcolor: 'rgba(10, 14, 39, 0.02)',
								height: '100%'
							}}>
								<Typography variant="h5" fontWeight={600} sx={{ mb: 4, color: 'primary.main' }}>
									Frontend Developer
								</Typography>
								<Stack spacing={4}>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>React.js</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>90%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={90} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>Redux</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>85%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={85} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>TypeScript</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>80%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={80} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>Material-UI</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>85%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={85} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
								</Stack>
							</Box>
						</Grid>

						<Grid item xs={12} md={6}>
							<Box sx={{ 
								p: 4, 
								border: '1px solid', 
								borderColor: 'divider', 
								borderRadius: 3,
								bgcolor: 'rgba(10, 14, 39, 0.02)',
								height: '100%'
							}}>
								<Typography variant="h5" fontWeight={600} sx={{ mb: 4, color: 'primary.main' }}>
									Backend & Testing
								</Typography>
								<Stack spacing={4}>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>React Testing Library</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>75%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={75} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>React Query</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>80%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={80} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>Bootstrap</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>85%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={85} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
									<Box>
										<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
											<Typography variant="body1" fontWeight={500}>HTML/CSS</Typography>
											<Typography variant="body1" color="secondary.main" fontWeight={600}>90%</Typography>
										</Box>
										<LinearProgress 
											variant="determinate" 
											value={90} 
											sx={{ 
												height: 10, 
												borderRadius: 5,
												bgcolor: 'rgba(0, 212, 255, 0.1)',
												'& .MuiLinearProgress-bar': {
													bgcolor: 'secondary.main'
												}
											}} 
										/>
									</Box>
								</Stack>
							</Box>
						</Grid>
					</Grid>
				</Paper>

				{/* Tech Stack Chips - Card Style */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ textAlign: 'center' }}>
						<Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 500 }}>
							Technologies I work with
						</Typography>
						<Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
							<Chip label="React.js" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="Redux" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="TypeScript" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="Material-UI" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="React Testing Library" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="React Query" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="Bootstrap" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
							<Chip label="HTML/CSS" color="primary" sx={{ fontWeight: 600, px: 2, py: 1 }} />
						</Stack>
					</Box>
				</Paper>
			</Container>
		</Box>
	)
}


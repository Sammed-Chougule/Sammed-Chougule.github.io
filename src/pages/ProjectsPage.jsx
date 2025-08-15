import React from 'react'
import { Box, Typography, Stack, Chip, Grid, Container, Paper, Card, CardContent, CardActions, Button } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'

export default function ProjectsPage() {
	const projects = [
		{
			title: "Optessa - Car Delivery Platform",
			company: "Josh Software Private Limited",
			description: "Built end-to-end car delivery estimation platform serving automotive dealerships. Implemented Redux Toolkit architecture for complex filtering logic, improving performance by 25%.",
			techStack: ["React.js", "Redux Toolkit", "React Query", "Bootstrap", "React Router"],
			achievements: [
				"Improved performance by 25% using Redux Toolkit",
				"Served automotive dealerships with delivery estimation",
				"Implemented complex filtering and search functionality"
			]
		},
		{
			title: "Rebel Foods - Inventory Management",
			company: "Josh Software Private Limited",
			description: "Developed three-layer acceptance module for store inventory handling 500+ daily transactions. Built comprehensive inventory tracking and management system.",
			techStack: ["React.js", "Redux", "Bootstrap", "React Router", "JavaScript"],
			achievements: [
				"Handled 500+ daily transactions",
				"Built three-layer acceptance module",
				"Comprehensive inventory tracking system"
			]
		},
		{
			title: "Semtech Router Interface",
			company: "Semtech",
			description: "Built enterprise-grade interface for routers and gateways serving 1000+ enterprise clients. Led UI simplification initiative with Basic/Advanced mode interface, improving user experience by 40%.",
			techStack: ["React.js", "Redux", "TypeScript", "Material-UI", "React Testing Library"],
			achievements: [
				"Served 1000+ enterprise clients",
				"Improved user experience by 40%",
				"Modernized testing infrastructure",
				"Led UI simplification initiative"
			]
		}
	]

	return (
		<Box sx={{ 
			minHeight: '100vh', 
			bgcolor: 'rgba(10, 14, 39, 0.02)', 
			py: 4 
		}}>
			<Container maxWidth="xl">
				{/* Header Section */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)',
					textAlign: 'center'
				}}>
					<Typography variant="h2" fontWeight={800} sx={{ mb: 2 }}>
						My Projects
					</Typography>
					<Typography variant="h5" color="secondary.main" sx={{ fontWeight: 600, mb: 3 }}>
						Recent Work
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ 
						maxWidth: 600, 
						mx: 'auto',
						lineHeight: 1.7,
						fontSize: '1.1rem'
					}}>
						Here are some of the key projects I've worked on, showcasing my expertise in React.js, 
						Redux, and modern web technologies for enterprise applications.
					</Typography>
				</Paper>

				{/* Projects Grid */}
				<Grid container spacing={4}>
					{projects.map((project, index) => (
						<Grid item xs={12} md={6} lg={4} key={index}>
							<Paper elevation={0} sx={{ 
								bgcolor: 'background.paper',
								borderRadius: 4,
								height: '100%',
								boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
								border: '1px solid rgba(10, 14, 39, 0.06)',
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'translateY(-8px)',
									boxShadow: '0 8px 30px rgba(10, 14, 39, 0.12)'
								}
							}}>
								<Box sx={{ p: 4 }}>
									{/* Project Header */}
									<Box sx={{ mb: 3 }}>
										<Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: 'primary.main' }}>
											{project.title}
										</Typography>
										<Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600, mb: 2 }}>
											{project.company}
										</Typography>
									</Box>

									{/* Description */}
									<Typography variant="body1" color="text.secondary" sx={{ 
										mb: 4, 
										lineHeight: 1.7,
										fontSize: '1rem'
									}}>
										{project.description}
									</Typography>

									{/* Tech Stack */}
									<Box sx={{ mb: 4 }}>
										<Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'primary.main' }}>
											Technologies Used
										</Typography>
										<Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
											{project.techStack.map((tech, techIndex) => (
												<Chip 
													key={techIndex} 
													label={tech} 
													color="primary" 
													variant="outlined"
													sx={{ 
														fontWeight: 500, 
														borderColor: 'rgba(10, 14, 39, 0.2)',
														'&:hover': {
															borderColor: 'primary.main',
															bgcolor: 'rgba(10, 14, 39, 0.05)'
														}
													}} 
												/>
											))}
										</Stack>
									</Box>

									{/* Key Achievements */}
									<Box sx={{ mb: 3 }}>
										<Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: 'primary.main' }}>
											Key Achievements
										</Typography>
										<Stack spacing={1}>
											{project.achievements.map((achievement, achievementIndex) => (
												<Typography 
													key={achievementIndex} 
													variant="body2" 
													color="text.secondary"
													sx={{ 
														display: 'flex', 
														alignItems: 'center',
														'&::before': {
															content: '""',
															width: 6,
															height: 6,
															bgcolor: 'secondary.main',
															borderRadius: '50%',
															mr: 2,
															flexShrink: 0
														}
													}}
												>
													{achievement}
												</Typography>
											))}
										</Stack>
									</Box>

									{/* Action Buttons */}
									<Stack direction="row" spacing={2}>
										<Button 
											variant="outlined" 
											startIcon={<GitHub />}
											sx={{ 
												borderRadius: 2,
												px: 3,
												py: 1,
												borderColor: 'rgba(10, 14, 39, 0.2)',
												color: 'primary.main',
												'&:hover': {
													borderColor: 'primary.main',
													bgcolor: 'rgba(10, 14, 39, 0.05)'
												}
											}}
										>
											View Code
										</Button>
										<Button 
											variant="contained" 
											startIcon={<Launch />}
											sx={{ 
												borderRadius: 2,
												px: 3,
												py: 1,
												bgcolor: 'secondary.main',
												'&:hover': {
													bgcolor: 'secondary.dark',
													transform: 'translateY(-1px)'
												}
											}}
										>
											Live Demo
										</Button>
									</Stack>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>

				{/* Call to Action */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mt: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)',
					textAlign: 'center'
				}}>
					<Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
						Interested in working together?
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
						Let's discuss how I can help bring your next project to life with modern web technologies.
					</Typography>
					<Button 
						variant="contained" 
						size="large"
						href="/contact"
						sx={{ 
							px: 6, 
							py: 2, 
							borderRadius: 3,
							fontSize: '1.1rem',
							fontWeight: 600,
							bgcolor: 'secondary.main',
							boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
							'&:hover': {
								bgcolor: 'secondary.dark',
								boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
								transform: 'translateY(-2px)'
							}
						}}
					>
						Get In Touch
					</Button>
				</Paper>
			</Container>
		</Box>
	)
}


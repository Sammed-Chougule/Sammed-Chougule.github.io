import React from 'react'
import { Box, Typography, Stack, Chip, Grid, Container, Paper, Divider } from '@mui/material'
import { Work, School, Code, Person } from '@mui/icons-material'

export default function AboutPage() {
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
						About Me
					</Typography>
					<Typography variant="h5" color="secondary.main" sx={{ fontWeight: 600, mb: 3 }}>
						Get to know me better
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ 
						maxWidth: 700, 
						mx: 'auto',
						lineHeight: 1.7,
						fontSize: '1.1rem'
					}}>
						I'm a passionate Software Engineer with 3.5+ years of experience building modern web applications. 
						I love creating user-friendly interfaces and solving complex technical challenges.
					</Typography>
				</Paper>

				{/* Professional Summary */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
						<Person sx={{ 
							color: 'secondary.main', 
							fontSize: 40, 
							mr: 2 
						}} />
						<Typography variant="h4" fontWeight={700} color="primary.main">
							Professional Summary
						</Typography>
					</Box>
					<Typography variant="body1" color="text.secondary" sx={{ 
						lineHeight: 1.8, 
						fontSize: '1.1rem',
						mb: 3
					}}>
						Software Engineer with extensive knowledge and years of experience, working in React.js, Redux, 
						and modern web technologies, delivering quality work that serves 1000+ enterprise clients. 
						Led UI simplification initiatives improving user experience by 40%, built enterprise-grade 
						interfaces, and modernized testing infrastructure for better reliability.
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ 
						lineHeight: 1.8, 
						fontSize: '1.1rem'
					}}>
						I specialize in building scalable frontend applications with a focus on performance, 
						user experience, and maintainable code. My expertise includes state management, 
						testing strategies, and modern development workflows.
					</Typography>
				</Paper>

				{/* Work Experience */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
						<Work sx={{ 
							color: 'secondary.main', 
							fontSize: 40, 
							mr: 2 
						}} />
						<Typography variant="h4" fontWeight={700} color="primary.main">
							Work Experience
						</Typography>
					</Box>

					<Stack spacing={4}>
						{/* Semtech */}
						<Box sx={{ 
							p: 4, 
							bgcolor: 'rgba(0, 212, 255, 0.03)', 
							borderRadius: 3,
							border: '1px solid rgba(0, 212, 255, 0.1)'
						}}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
								<Box>
									<Typography variant="h5" fontWeight={700} color="primary.main">
										Software Engineer
									</Typography>
									<Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600 }}>
										Semtech
									</Typography>
								</Box>
								<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
									June 2023 - Present
								</Typography>
							</Box>
							<Typography variant="body1" color="text.secondary" sx={{ 
								lineHeight: 1.7, 
								mb: 3,
								fontSize: '1rem'
							}}>
								Built enterprise-grade interface for routers and gateways serving 1000+ enterprise clients. 
								Led UI simplification initiative with Basic/Advanced mode interface, improving user experience by 40%.
							</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
								<Chip label="React.js" color="primary" variant="outlined" />
								<Chip label="Redux" color="primary" variant="outlined" />
								<Chip label="TypeScript" color="primary" variant="outlined" />
								<Chip label="Material-UI" color="primary" variant="outlined" />
								<Chip label="React Testing Library" color="primary" variant="outlined" />
							</Box>
						</Box>

						{/* Josh Software */}
						<Box sx={{ 
							p: 4, 
							bgcolor: 'rgba(10, 14, 39, 0.03)', 
							borderRadius: 3,
							border: '1px solid rgba(10, 14, 39, 0.1)'
						}}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
								<Box>
									<Typography variant="h5" fontWeight={700} color="primary.main">
										Software Engineer
									</Typography>
									<Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600 }}>
										Josh Software Private Limited
									</Typography>
								</Box>
								<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
									January 2022 - June 2023
								</Typography>
							</Box>
							<Typography variant="body1" color="text.secondary" sx={{ 
								lineHeight: 1.7, 
								mb: 3,
								fontSize: '1rem'
							}}>
								Built end-to-end car delivery estimation platform and developed three-layer acceptance 
								module for store inventory handling 500+ daily transactions.
							</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
								<Chip label="React.js" color="primary" variant="outlined" />
								<Chip label="Redux Toolkit" color="primary" variant="outlined" />
								<Chip label="React Query" color="primary" variant="outlined" />
								<Chip label="Bootstrap" color="primary" variant="outlined" />
								<Chip label="React Router" color="primary" variant="outlined" />
							</Box>
						</Box>
					</Stack>
				</Paper>

				{/* Education */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					mb: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
						<School sx={{ 
							color: 'secondary.main', 
							fontSize: 40, 
							mr: 2 
						}} />
						<Typography variant="h4" fontWeight={700} color="primary.main">
							Education
						</Typography>
					</Box>
					<Box sx={{ 
						p: 4, 
						bgcolor: 'rgba(0, 212, 255, 0.03)', 
						borderRadius: 3,
						border: '1px solid rgba(0, 212, 255, 0.1)'
					}}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
							<Box>
								<Typography variant="h5" fontWeight={700} color="primary.main">
									B.Tech Electronics Engineering
								</Typography>
								<Typography variant="h6" color="secondary.main" sx={{ fontWeight: 600 }}>
									Walchand College of Engineering, Sangli
								</Typography>
							</Box>
							<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
								2018 - 2022
							</Typography>
						</Box>
						<Typography variant="body1" color="text.secondary" sx={{ 
							lineHeight: 1.7, 
							fontSize: '1rem'
						}}>
							Graduated with a CGPA of 8.21. Studied electronics engineering with focus on 
							digital systems, microprocessors, and embedded systems.
						</Typography>
					</Box>
				</Paper>

				{/* Technical Skills */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)'
				}}>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
						<Code sx={{ 
							color: 'secondary.main', 
							fontSize: 40, 
							mr: 2 
						}} />
						<Typography variant="h4" fontWeight={700} color="primary.main">
							Technical Skills
						</Typography>
					</Box>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: 'secondary.main' }}>
								Frontend Technologies
							</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
								<Chip label="React.js" color="primary" />
								<Chip label="Redux" color="primary" />
								<Chip label="TypeScript" color="primary" />
								<Chip label="Material-UI" color="primary" />
								<Chip label="Bootstrap" color="primary" />
								<Chip label="HTML/CSS" color="primary" />
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: 'secondary.main' }}>
								Testing & Tools
							</Typography>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
								<Chip label="React Testing Library" color="primary" />
								<Chip label="React Query" color="primary" />
								<Chip label="React Router" color="primary" />
								<Chip label="Git" color="primary" />
								<Chip label="npm" color="primary" />
								<Chip label="Webpack" color="primary" />
							</Box>
						</Grid>
					</Grid>
				</Paper>

				{/* Call to Action */}
				<Paper elevation={0} sx={{ 
					bgcolor: 'background.paper',
					borderRadius: 4,
					p: 6,
					boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
					border: '1px solid rgba(10, 14, 39, 0.06)',
					textAlign: 'center'
				}}>
					<Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
						Ready to work together?
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
						I'm always open to discussing new opportunities and exciting projects. 
						Let's connect and explore how we can collaborate!
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
						<Chip 
							label="React.js Expert" 
							color="secondary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
						<Chip 
							label="3.5+ Years Experience" 
							color="primary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
						<Chip 
							label="Enterprise Solutions" 
							color="secondary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
					</Box>
				</Paper>
			</Container>
		</Box>
	)
}


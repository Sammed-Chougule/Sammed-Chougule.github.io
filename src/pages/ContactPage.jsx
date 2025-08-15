import React from 'react'
import { Box, Typography, Stack, Chip, Grid, Container, Paper, TextField, Button, Divider } from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, Language, Send } from '@mui/icons-material'

export default function ContactPage() {
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
						Get In Touch
					</Typography>
					<Typography variant="h5" color="secondary.main" sx={{ fontWeight: 600, mb: 3 }}>
						Let's work together
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ 
						maxWidth: 600, 
						mx: 'auto',
						lineHeight: 1.7,
						fontSize: '1.1rem'
					}}>
						I'm always open to discussing new opportunities, exciting projects, 
						or just having a chat about technology and development.
					</Typography>
				</Paper>

				<Grid container spacing={6}>
					{/* Contact Information */}
					<Grid item xs={12} md={5}>
						<Paper elevation={0} sx={{ 
							bgcolor: 'background.paper',
							borderRadius: 4,
							p: 6,
							height: 'fit-content',
							boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
							border: '1px solid rgba(10, 14, 39, 0.06)'
						}}>
							<Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: 'primary.main' }}>
								Contact Information
							</Typography>

							<Stack spacing={4}>
								{/* Email */}
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box sx={{ 
										p: 2, 
										bgcolor: 'rgba(0, 212, 255, 0.1)', 
										borderRadius: 2,
										mr: 3
									}}>
										<Email sx={{ color: 'secondary.main', fontSize: 24 }} />
									</Box>
									<Box>
										<Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
											Email
										</Typography>
										<Typography variant="body1" color="text.secondary">
											sammedsanjaychougule@gmail.com
										</Typography>
									</Box>
								</Box>

								{/* Phone */}
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box sx={{ 
										p: 2, 
										bgcolor: 'rgba(10, 14, 39, 0.1)', 
										borderRadius: 2,
										mr: 3
									}}>
										<Phone sx={{ color: 'primary.main', fontSize: 24 }} />
									</Box>
									<Box>
										<Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
											Phone
										</Typography>
										<Typography variant="body1" color="text.secondary">
											+91 7887336078
										</Typography>
									</Box>
								</Box>

								{/* Location */}
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box sx={{ 
										p: 2, 
										bgcolor: 'rgba(0, 212, 255, 0.1)', 
										borderRadius: 2,
										mr: 3
									}}>
										<LocationOn sx={{ color: 'secondary.main', fontSize: 24 }} />
									</Box>
									<Box>
										<Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
											Location
										</Typography>
										<Typography variant="body1" color="text.secondary">
											Kolhapur, Maharashtra, India
										</Typography>
									</Box>
								</Box>
							</Stack>

							<Divider sx={{ my: 4 }} />

							{/* Professional Links */}
							<Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: 'primary.main' }}>
								Professional Links
							</Typography>
							<Stack spacing={2}>
								<Chip 
									icon={<LinkedIn />}
									label="LinkedIn Profile"
									onClick={() => window.open('https://www.linkedin.com/in/sammed-16', '_blank')}
									sx={{ 
										justifyContent: 'flex-start',
										p: 2,
										fontSize: '1rem',
										fontWeight: 500,
										bgcolor: 'rgba(10, 14, 39, 0.05)',
										border: '1px solid rgba(10, 14, 39, 0.1)',
										'&:hover': {
											bgcolor: 'rgba(10, 14, 39, 0.1)',
											transform: 'translateY(-1px)'
										}
									}}
								/>
								<Chip 
									icon={<Language />}
									label="Portfolio Website"
									onClick={() => window.open('https://sammed.me', '_blank')}
									sx={{ 
										justifyContent: 'flex-start',
										p: 2,
										fontSize: '1rem',
										fontWeight: 500,
										bgcolor: 'rgba(0, 212, 255, 0.05)',
										border: '1px solid rgba(0, 212, 255, 0.1)',
										'&:hover': {
											bgcolor: 'rgba(0, 212, 255, 0.1)',
											transform: 'translateY(-1px)'
										}
									}}
								/>
							</Stack>
						</Paper>
					</Grid>

					{/* Contact Form */}
					<Grid item xs={12} md={7}>
						<Paper elevation={0} sx={{ 
							bgcolor: 'background.paper',
							borderRadius: 4,
							p: 6,
							boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
							border: '1px solid rgba(10, 14, 39, 0.06)'
						}}>
							<Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: 'primary.main' }}>
								Send a Message
							</Typography>

							<Stack spacing={4}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Name"
											variant="outlined"
											sx={{
												'& .MuiOutlinedInput-root': {
													borderRadius: 2,
													'&:hover .MuiOutlinedInput-notchedOutline': {
														borderColor: 'secondary.main'
													},
													'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
														borderColor: 'secondary.main'
													}
												}
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Email"
											type="email"
											variant="outlined"
											sx={{
												'& .MuiOutlinedInput-root': {
													borderRadius: 2,
													'&:hover .MuiOutlinedInput-notchedOutline': {
														borderColor: 'secondary.main'
													},
													'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
														borderColor: 'secondary.main'
													}
												}
											}}
										/>
									</Grid>
								</Grid>

								<TextField
									fullWidth
									label="Subject"
									variant="outlined"
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 2,
											'&:hover .MuiOutlinedInput-notchedOutline': {
												borderColor: 'secondary.main'
											},
											'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
												borderColor: 'secondary.main'
											}
										}
									}}
								/>

								<TextField
									fullWidth
									label="Message"
									multiline
									rows={6}
									variant="outlined"
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 2,
											'&:hover .MuiOutlinedInput-notchedOutline': {
												borderColor: 'secondary.main'
											},
											'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
												borderColor: 'secondary.main'
											}
										}
									}}
								/>

								<Button
									variant="contained"
									size="large"
									startIcon={<Send />}
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
									Send Message
								</Button>
							</Stack>
						</Paper>
					</Grid>
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
						Let's Start a Conversation
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
						Whether you have a project in mind, want to discuss opportunities, 
						or just want to say hello, I'd love to hear from you.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
						<Chip 
							label="React.js Development" 
							color="secondary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
						<Chip 
							label="Frontend Architecture" 
							color="primary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
						<Chip 
							label="UI/UX Design" 
							color="secondary" 
							sx={{ fontWeight: 600, px: 2, py: 1 }}
						/>
					</Box>
				</Paper>
			</Container>
		</Box>
	)
}


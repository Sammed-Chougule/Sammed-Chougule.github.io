import React from 'react'
import { 
	Box, 
	Container, 
	Typography, 
	Paper, 
	Grid,
	useTheme
} from '@mui/material'

const SkillsPage = () => {
	const theme = useTheme()

	const skillCategories = [
		{
			title: "Programming Languages",
			skills: [
				{ 
					name: "C++", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"
				},
				{ 
					name: "JavaScript", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
				},
				{ 
					name: "C", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/c/c.png"
				},
				{ 
					name: "TypeScript", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
				}
			]
		},
		{
			title: "Database",
			skills: [
				{ 
					name: "SQL", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
				},
				{ 
					name: "MongoDB", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
				},
				{ 
					name: "PostgreSQL", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
				},
				{ 
					name: "Redis", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redis/redis.png"
				}
			]
		},
		{
			title: "Web Development",
			skills: [
				{ 
					name: "React", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
				},
				{ 
					name: "Node.js", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
				},
				{ 
					name: "Express", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
				},
				{ 
					name: "HTML", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
				},
				{ 
					name: "CSS", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
				}
			]
		},
		{
			title: "Tools & Others",
			skills: [
				{ 
					name: "Git", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
				},
				{ 
					name: "Linux", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png"
				},
				{ 
					name: "Docker", 
					icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
				},
				{ 
					name: "AWS", 
					icon: "https://raw.githubusercontent.com/github/explore/01ea2a586e5da744792d0ccfce2f68b861f29301/topics/aws/aws.png"
				}
			]
		}
	]

	const SkillCard = ({ skill }) => (
		<Paper
			elevation={0}
			sx={{
				p: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 120,
				bgcolor: 'rgba(10, 14, 39, 0.02)',
				border: '2px solid rgba(0, 212, 255, 0.1)',
				borderRadius: 3,
				transition: 'all 0.3s ease',
				cursor: 'pointer',
				'&:hover': {
					transform: 'translateY(-5px)',
					border: '2px solid rgba(0, 212, 255, 0.3)',
					boxShadow: '0 8px 25px rgba(0, 212, 255, 0.15)',
					bgcolor: 'rgba(0, 212, 255, 0.05)'
				}
			}}
		>
			<Box
				component="img"
				src={skill.icon}
				alt={skill.name}
				sx={{
					width: 50,
					height: 50,
					mb: 2,
					filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))'
				}}
			/>
			<Typography 
				variant="body2" 
				fontWeight={600}
				color="text.primary"
				textAlign="center"
			>
				{skill.name}
			</Typography>
		</Paper>
	)

	return (
		<Box sx={{ 
			minHeight: '100vh',
			bgcolor: 'background.default',
			py: 8
		}}>
			<Container maxWidth="lg">
				{/* Header */}
				<Box sx={{ textAlign: 'center', mb: 8 }}>
					<Typography 
						variant="h2" 
						sx={{ 
							fontWeight: 700,
							background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							mb: 2
						}}
					>
						My Skills
					</Typography>
					<Typography 
						variant="h6" 
						color="text.secondary" 
						sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
					>
						Technologies and tools I use to bring ideas to life
					</Typography>
				</Box>

				{/* Skills Categories */}
				{skillCategories.map((category, categoryIndex) => (
					<Paper 
						key={categoryIndex}
						elevation={0} 
						sx={{ 
							bgcolor: 'background.paper',
							borderRadius: 4,
							p: 6,
							mb: 6,
							boxShadow: '0 4px 20px rgba(10, 14, 39, 0.08)',
							border: '1px solid rgba(10, 14, 39, 0.06)'
						}}
					>
						{/* Category Title */}
						<Typography 
							variant="h5" 
							sx={{ 
								mb: 4, 
								fontWeight: 600,
								color: 'primary.main',
								textAlign: 'center',
								position: 'relative',
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: -8,
									left: '50%',
									transform: 'translateX(-50%)',
									width: 60,
									height: 3,
									bgcolor: 'secondary.main',
									borderRadius: 2
								}
							}}
						>
							&lt; {category.title} &gt;
						</Typography>

						{/* Skills Grid */}
						<Grid container spacing={3} justifyContent="center">
							{category.skills.map((skill, skillIndex) => (
								<Grid item xs={6} sm={4} md={3} key={skillIndex}>
									<SkillCard skill={skill} />
								</Grid>
							))}
						</Grid>
					</Paper>
				))}
			</Container>
		</Box>
	)
}

export default SkillsPage

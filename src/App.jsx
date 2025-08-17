import React from 'react'
import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'

export default function App() {
	return (
		<>
			<NavigationBar />
			<Container sx={{ py: 4 }}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/skills" element={<SkillsPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</Container>
		</>
	)
}


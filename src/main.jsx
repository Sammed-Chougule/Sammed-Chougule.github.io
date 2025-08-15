import React from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const applicationTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { 
			main: '#0a0e27',
			light: '#1a1f3a',
			dark: '#050812'
		},
		secondary: { 
			main: '#00d4ff',
			light: '#4de3ff',
			dark: '#00a3cc'
		},
		background: {
			default: '#ffffff',
			paper: '#f8f9fa'
		},
		text: {
			primary: '#0a0e27',
			secondary: '#4a5568'
		}
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h2: {
			fontWeight: 800,
			letterSpacing: '-0.02em'
		},
		h3: {
			fontWeight: 700,
			letterSpacing: '-0.01em'
		},
		h4: {
			fontWeight: 700,
			letterSpacing: '-0.01em'
		},
		h5: {
			fontWeight: 600,
			letterSpacing: '-0.01em'
		},
		h6: {
			fontWeight: 600,
			letterSpacing: '-0.01em'
		},
		button: {
			fontWeight: 600,
			textTransform: 'none',
			borderRadius: '12px'
		}
	},
	shape: {
		borderRadius: 12
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					'&:hover': {
						boxShadow: '0 4px 12px rgba(10, 14, 39, 0.3)'
					}
				},
				contained: {
					background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
					'&:hover': {
						background: 'linear-gradient(135deg, #050812 0%, #0a0e27 100%)'
					}
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
					border: '1px solid rgba(0, 0, 0, 0.06)',
					'&:hover': {
						boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
						transform: 'translateY(-2px)',
						transition: 'all 0.3s ease'
					}
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					'&:hover': {
						transform: 'translateY(-1px)',
						transition: 'transform 0.2s ease'
					}
				}
			}
		}
	}
})

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<ThemeProvider theme={applicationTheme}>
			<CssBaseline />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
)


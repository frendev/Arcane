import React from 'react'

const UnderConstruction = () => {
	const styles = {
		main: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			margin: 'auto'
		},
		heading: {
			fontSize: '24px',
			marginBottom: '20px'
		},
		message: {
			fontSize: '16px',
			textAlign: 'center'
		},
		svg: {
			width: '100px',
			height: '100px'
		}
	}

	return (
		<div style={styles.main}>
			<div style={styles.container}>
				<img src="https://assets.nicepagecdn.com/d2cc3eaa/300651/images/60028-Converted.png" />
				<h1 style={styles.heading}>Under Maintenance</h1>
				<p style={styles.message}>
					We apologize for the inconvenience, but our site is
					currently undergoing maintenance. Please check back later.
				</p>
			</div>
		</div>
	)
}

export default UnderConstruction

import React from 'react';
import 'uikit/dist/css/uikit.min.css';

const Header = () => {
    const headerStyle = {
		backgroundColor: 'lavender',
		backgroundBlendMode: 'multiply',
		borderBottomStyle: 'solid',
		borderBottomWidth: '3px',
		borderColor: '#F5EDF7',
		padding: '17px 24px',
		boxShadow: '0px 4px 15px 20px rgba(255, 255, 255, 0.30)'
	};

    return (
		<header uk-sticky="position: top">
			<nav style={headerStyle} className="uk-flex uk-flex-column">
				<div className="uk-container">
					<div className="uk-navbar-center" style={{gap: 0}}>
						<h1 uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">🌤☁ current weather ☁🌤</h1>
					</div>
				</div>
			</nav>
		</header>
	);
};
export default Header; 
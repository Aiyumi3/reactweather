import React from 'react';
import 'uikit/dist/css/uikit.min.css';

const Footer = () => {
	const footerStyle = {
		borderTop: '2px solid #F5EDF7',
		backgroundColor: 'lavender',
		backgroundBlendMode: 'darken',
		boxShadow: '0px 5px 20px 15px rgba(255, 255, 255, 0.15) inset',
		padding: '17px 24px',
		position: 'relative',
		marginTop: '90px',
		zIndex: 9
	};

    return (
        <footer style={footerStyle} className="uk-flex uk-flex-column">
			<br/>
			<div className="uk-flex uk-flex-bottom uk-flex-wrap uk-flex-wrap-around uk-position-relative uk-position-bottom-center">
				<h3>
					Copyright &copy; 2024 <a href="https://github.com/Aiyumi3" target="_blank" title="Visit GitHub Profile" rel="nofollow noopener noreferrer" >
					Aiyumi S2</a>, For Entertainment, All rights reserved.
				</h3>
			</div>
		</footer>
	);
};
export default Footer;

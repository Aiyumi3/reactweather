import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeP from "./components/HomeP";

const App = () => {

	return (
        <>
            <Header />
            <HomeP />
            <Footer />
        </>
    );
};
export default App;
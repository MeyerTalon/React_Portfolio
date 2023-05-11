import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const styles = {
    header: {
        background: '#56A3A6'
    }
}

export default function Header() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        } else if (currentPage === 'About') {
            return <About />;
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } else {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <div className="row flex-fill" style={styles.header}>
                <h1>Talon's Portfolio</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
            <div className="container">
                {renderPage()}
            </div>
        </div>
    );
}
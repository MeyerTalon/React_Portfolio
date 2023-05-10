import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'Resume') {
        return <Resume />;
        }
        if (currentPage === 'About') {
        return <About />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        return <Contact />;
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="flex-box justify-content-center">
            <div class="row">
                <h1>Talon's Portfolio</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                {renderPage()}
            </div>
        </div>
    );
}
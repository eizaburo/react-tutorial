import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import AboutContent from './AboutContent';
import Footer from './Footer';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header />
                <AboutContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;
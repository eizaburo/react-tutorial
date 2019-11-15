import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import HomeContent from './HomeContent';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header />
                <HomeContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
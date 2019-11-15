import React from 'react';

//screens
import Nav from './Nav';
import Header from './Header';
import ContactContent from './ContactContent';
import Footer from './Footer';

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <ContactContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
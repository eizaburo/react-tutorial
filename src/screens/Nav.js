import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends React.Component {

    handleLogout = () => {
        localStorage.setItem("login", "false");
        this.props.history.push("/");
    }

    render() {
        return (
            <nav style={{ background: "#666" }}>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
                    <li style={{ margin: 10 }}><NavLink exact to="/" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Home</NavLink></li>
                    <li style={{ margin: 10 }}><NavLink exact to="/about" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>About</NavLink></li>
                    <li style={{ margin: 10 }}><NavLink exact to="/contact" style={{ color: "#fff", textDecoration: 'none' }} activeStyle={{ color: '#aaf' }}>Contact</NavLink></li>
                    <li style={{ margin: 10 }}><span style={{ color: "#fff", cursor: 'pointer' }} onClick={() => this.handleLogout()}>Logout</span></li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Nav);
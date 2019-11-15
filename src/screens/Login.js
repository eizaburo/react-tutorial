import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    handleLogin = () => {
        localStorage.setItem("login", "true");
        this.props.history.push("/");
    }

    render() {
        return (
            <div style={{ background: "#eee", height: 200, width: 300, margin: '100px auto', textAlign: 'center', padding: 30 }}>
                <h3>ログイン</h3>
                ID: <input type="text" style={{ marginTop: 10 }} /><br />
                PW: <input tppe="text" style={{ marginTop: 10 }} /><br />
                <button style={{ marginTop: 10 }} onClick={() => this.handleLogin()}>ログイン</button>
            </div>
        );
    }
}

export default withRouter(Login);
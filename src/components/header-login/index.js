import React from 'react';
import Logo from 'assets/logos/logopreta.png';

function HeaderLogin() {
    return (
        <header className="login-header">
            <div className="logo_container">
                <img src={Logo} className="logo" />
            </div>
        </header>
    );
}

export default HeaderLogin;

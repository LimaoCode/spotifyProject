import React from 'react';
import 'pages/login/login.css';
import 'assets/estilos/tipografia.css'

import HeaderLogin from 'components/header-login/index';
import FormLogin from 'components/form-login/index';
import SingupLogin from 'components/singup-login/index';


function Login() {
    return (
        <div className="login-body">
            <HeaderLogin />
            <main className="login-main">
                <FormLogin />
                <SingupLogin />
            </main>
        </div>
    );
}

export default Login;
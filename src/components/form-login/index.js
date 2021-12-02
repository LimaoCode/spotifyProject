import React from 'react';

function FormLogin() {
    return (
        <section>
            <div className="login-form-container">
                <form>
                    <h2 className="login-titulo">Para continuar, faça login no Spotify.</h2>
                    <label>Endereço de e-mail ou nome de usuário</label>
                    <div className="login-email-wrap">
                        <input className="login-input" type="email" placeholder="Endereço de e-mail ou nome de usuário" />
                    </div>
                    <label>Senha</label>
                    <div className="login-password-wrap">
                        <input className="login-input" type="password" placeholder="Senha" />
                    </div>
                    <span><a className="login-forget">Esqueceu sua senha?</a></span>
                    <div className="login-confirm-wrap">
                        <div className="login-remember">
                            <input type="checkbox" id="remember" className="login-checkbox" /><label htmlFor="remember" className="login-remember-span">Lembrar de mim</label>
                        </div>
                        <div className="login-submit">
                            <button type="submit" className="login-botao-entrar">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormLogin;
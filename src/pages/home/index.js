import React from 'react';
import 'pages/home/home.css';
import Main from 'components/header-home/index';
import CardContainer from 'components/card-container/index';
import Sidebar from 'components/sidebar/index';
import Navegation from 'components/navegation/index';


function Home() {
    return (
        <div className="home-body">
            <div className="home__container">
                <Main />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <Sidebar />
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import Logo from "assets/logos/logobranca.png"


import Playlist from 'components/playslist/index';
import Navegation from 'components/navegation/index';

function Sidebar() {
    return (
        <>
            <div className="sidebar-container">
                <Navegation />
            </div>
        </>
    );
}

export default Sidebar;
import React from 'react';

import { CgSearch, CgMediaPodcast } from 'react-icons/cg';
import { BiLibrary, BiHeartSquare } from 'react-icons/bi';
import { AiFillPlusSquare } from 'react-icons/ai';
import { MdHomeFilled } from 'react-icons/md';

function Navegation() {
    return (
        <>
            <div className="navegation-container">
                <div className="navegation-wrap">
                    <a className="navegation-botao"><MdHomeFilled className="navegation-icon" /><span className="navegation-titulo">Início</span></a>
                    <a className="navegation-botao"><CgSearch className="navegation-icon" /><span className="navegation-titulo">Buscar</span></a>
                    <a className="navegation-botao"><BiLibrary className="navegation-icon" /><span className="navegation-titulo">Sua biblioteca</span></a>
                </div>
            </div>
        </>
    );
}

export default Navegation;
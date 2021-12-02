import React from 'react';
import Arcane from "assets/logos/arcane-logo.png"

function Card() {
    return (
        <>
            <div className="card">
                <img src={Arcane} className="card__imagem" />
                <div>
                    <h3 className="card__titulo">Playlist teste sehloiro</h3>
                </div>
            </div>
        </>
    );
}

export default Card;
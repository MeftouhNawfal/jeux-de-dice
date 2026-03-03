import { useState } from "react";

function JeuDe(){
    const [face,setFace] = useState(0);
    const [essais, setEssais] = useState(0);
    const [imageSrc, setImageSrc] = useState("/dice/dice-init.PNG")

    function jouer (){
        const nb = Math.floor(Math.random()*6 +1);

        setFace(nb);
        setEssais(essais + 1);
        setImageSrc(`/dice/dice${nb}.PNG`)
    }


    return(
        <div className="card">
            <h1 className="title">Jeu de Dé</h1>

            <div className="image-container">
                <img src={imageSrc} alt="De" className="dice-image"></img>
            </div>

            <div className="info">
                <p><b>face: {face}</b></p>
                <p><b>nombre d'essais: {essais}</b></p>
            </div>

            <div className="actions">
                <button onClick={jouer}>Jouer</button>
            </div>
        </div>
    )
}

export default JeuDe;
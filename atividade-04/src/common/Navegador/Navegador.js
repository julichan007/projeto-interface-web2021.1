import './Navegador.css';
import logo from '../../logo.svg';

export function Navegador(){
    return(
        <nav>
            <div className = "logo">
                <img src={logo} width="100" height="50"/>
            </div>
            <spam>Orkut</spam>

            <div>
                <button className ="active">Linha do tempo  </button>
                <button>Postar</button>
                <spam>Julichan</spam>
            </div>
        </nav>
    );
}
import { Navegador } from '../../common/Navegador/Navegador';
import { LinhaDoTempo } from '../../common/LinhaDoTempo/LinhaDoTempo';

export function PaginaFeed(){
    return(
        <div className = "container">
            <Navegador/>
            <LinhaDoTempo/>
        </div>
    );
}
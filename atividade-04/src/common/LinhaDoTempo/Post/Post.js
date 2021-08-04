import "./Post.css";

export function Post(
    {nomeUsuario, texto, qtdLikes}
){
    return(
        <div className = "card">
            <spam className = "card_nome">{nomeUsuario}</spam>
            <spam className = "card_mensagem">{texto}</spam>
            <div className = "container_likes">
                <spam className ="card_mensagem-like">{qtdLikes}</spam>
                <button className ="card_mensagem-like-button">Curtir</button>
            </div>
        </div>
    );
}
export default function Pessoa(props) {
    return (
        <div className="Pessoa">
            <b>Nome</b>: {props.nome}
            <br/>
            <b>Idade</b>: {props.idade}
            <br/>
            <br/>
        </div>
    );
}
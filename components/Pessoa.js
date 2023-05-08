export default function Pessoa({nome, idade}) {
    return (
        <div className="Pessoa">
            <b>Nome</b>: {nome}
            <br/>
            <b>Idade</b>: {idade}
            <br/>
            <br/>
        </div>
    );
}
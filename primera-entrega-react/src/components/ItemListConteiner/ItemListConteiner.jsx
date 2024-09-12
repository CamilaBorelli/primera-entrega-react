import "./ItemListConteiner.css";

function Mensaje({ greeting }) {
    return (
        <>
            <div className="saludo">
                <h1>{greeting}</h1>
            </div>
        </>
    )

}

export default Mensaje
import "../Styles/GlobalStyles.css"

// eslint-disable-next-line react/prop-types
const IconeEndereco = ({ item }) => {
    return (
        <>
            <li className='icone-endereco' key={item.idAddres}>
                {item.planetName === "marte" ? (
                    <img className="icon-planet" src="/mars.gif" alt="Mars" />
                ) : (
                    <img className="icon-planet" src="/earth.gif" alt="Earth" />
                )}
                <p>{item.addresType}</p>
                <p>{item.addressName}</p>
                <p>{item.addressContact}</p>
                <img className="icon-edit-address" src="/edit-pen.svg" alt="Edit" />
            </li>

        </>
    )
}

export default IconeEndereco;
import "../Styles/GlobalStyles.css"

// eslint-disable-next-line react/prop-types
const IconeEndereco = ({ item }) => {
    return (
        <>
            <li className='icone-endereco line' key={item.idAddres}>
                <p>{item.addressName}</p>
            </li>
        </>
    )
}

export default IconeEndereco;
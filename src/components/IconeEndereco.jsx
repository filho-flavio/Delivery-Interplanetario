// Icone para endereços

import { Link } from "react-router-dom";
import "../Styles/GlobalStyles.css"
import { deleteAddress } from "../services/api";

// eslint-disable-next-line react/prop-types
const IconeEndereco = ({ item, setGetAddress }) => {
    const handleDeleteAddres = (id) => {
        deleteAddress(id);
        // essa função atualiza o getAddress para que o useEffect faça uma requisição com a lista atualizada de endereços
        setGetAddress(true);
    }

    return (
        <>
            <li className='icone-endereco' key={item.id} data-planet={item.planet}>
                {/* Renderização condicional para exibir icone de marte ou da terra */}
                {item.planet === "Marte" ? (
                    <img className="icon-planet" src="/mars.gif" alt="Mars" />
                ) : (
                    <img className="icon-planet" src="/earth.gif" alt="Earth" />
                )}

                <p className="address-label">{item.address_label}</p>

                <p>{item.fullName}</p>

                <p>{item.planet === "Marte" ? item.lot_number : item.address_zip_code}</p>

                {/* link para editar endereço dinamicamente */}
                <Link to={`/edit/${item.id}`}>
                    <svg className="icon-edit-address" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.438 16.875l5.688 5.689-7.126 1.436 1.438-7.125zm22.562-11.186l-15.46 15.46-5.688-5.689 15.459-15.46 5.689 5.689zm-4.839-2.017l-.849-.849-12.614 12.599.85.849 12.613-12.599z" /></svg>
                </Link>

                {/* button para excluir endereço */}
                <button className="btn-delete-address" onClick={() => handleDeleteAddres(item.id)}>
                    <svg className="icon-delete-address" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                    </svg>
                </button>
            </li>
        </>
    )
}

export default IconeEndereco;

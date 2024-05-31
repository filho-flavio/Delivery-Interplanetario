import "../Styles/GlobalStyles.css";
import { useState } from "react";
import { salvarNovoEndereco } from "../services/api";
import { v4 as uuidv4 } from 'uuid';

const commonFields = {
    address_label: '',
    fullName: '',
    address_contact: '',
    lot_number: '',
    address_country: '',
    address_state: '',
    address_city: '',
    address_zip_code: ''
};

// eslint-disable-next-line react/prop-types
const ModalCriarEnderecos = ({ setAddingAddress }) => {
    const [address, setAddress] = useState({ planet: '', ...commonFields });
    const [planet, setPlanet] = useState("");
    const [messageError, setMessageError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "planet") {
            setPlanet(value);
            setMessageError(""); 

            const updatedAddress = { ...commonFields, id: uuidv4(), planet: value };
            if (value === "Marte") {
                updatedAddress.address_country = 'null';
                updatedAddress.address_state = 'null';
                updatedAddress.address_city = 'null';
                updatedAddress.address_zip_code = 'null';
            } else {
                updatedAddress.lot_number = 'null';
            }
            setAddress(updatedAddress);
        } else {
            setAddress(prevAddress => ({ ...prevAddress, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await salvarNovoEndereco(address);
            if (response) {
                handleCloseForm();
            }
        } catch (error) {
            setMessageError(error.message);
        }
    };

    const handleCloseForm = () => {
        setAddingAddress(false);
    };

    return (
        <div className="container-modal">
            <form onSubmit={handleSubmit} className="form-new-address">

                <label className="label-planet">
                    Planeta:
                    <select name="planet" value={address.planet} onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                    </select>
                </label>

                {
                    planet !== "" &&
                    <>
                        <label className="label-planet">
                            Apelido do endereço:
                            <select name="address_label" value={address.address_label} onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="Casa">Casa</option>
                                <option value="Trabalho">Trabalho</option>
                                <option value="Escritório">Escritório</option>
                                <option value="Despache">Local de despache</option>
                            </select>
                        </label>

                        <div className="flex">
                            <label className="label-planet">
                                Nome completo:
                                <input placeholder="Nome completo..." className="in-new-addres" type="text" name="fullName" value={address.fullName} onChange={handleChange} />
                            </label>
                            <label className="label-planet">
                                Telefone:
                                <input placeholder="Telefone do endereço..." className="in-new-addres" type="text" name="address_contact" value={address.address_contact} onChange={handleChange} />
                            </label>
                        </div>
                    </>

                }


                {
                    planet == "Terra" &&
                    <div className="endereco-terra">
                        <label className="label-planet">
                            País:
                            <input placeholder="País do endereço..." className="in-new-addres" type="text" name="address_country" value={address.address_country} onChange={handleChange} />
                        </label>
                        <label className="label-planet">
                            Estado:
                            <input placeholder="Estado do endereço..." className="in-new-addres" type="text" name="address_state" value={address.state} onChange={handleChange} />
                        </label>
                        <label className="label-planet">
                            Cidade:
                            <input placeholder="Cidade do endereço..." className="in-new-addres" type="text" name="address_city" value={address.address_city} onChange={handleChange} />
                        </label>
                        <label className="label-planet">
                            Código postal:
                            <input placeholder="Código postal do endereço..." className="in-new-addres" type="text" name="address_zip_code" value={address.address_zip_code} onChange={handleChange} />
                        </label>
                    </div>
                }

                {
                    planet == "Marte" &&
                    <label className="label-planet">
                        Lote:
                        <input placeholder="Lote em Marte..." className="in-new-addres" type="text" name="lot_number" value={address.lot_number} onChange={handleChange} />
                    </label>
                }

                <p className="form-message-error">{messageError}</p>

                <div className="wrap-btns-form">
                    <button className="btn-cancelar-new-address" onClick={handleCloseForm}>Cancelar</button>
                    <button className="btn-salvar-new-address" type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                </div>
            </form>
        </div>

    )
}

export default ModalCriarEnderecos;
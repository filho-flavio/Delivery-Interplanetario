// Página de edição de endereço
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editarEndereco, getEnderecoPorId } from '../services/api';

const Edit = () => {
  const { id } = useParams();
  const [address, setAddress] = useState({ planet: '', lot: '' });
  const [planet, setPlanet] = useState("");
  const navigate = useNavigate();
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    const data = getEnderecoPorId(id);
    console.log(data);
    setAddress(data);
    setPlanet(data.planet)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "planet") {
      setPlanet(address.planet);

      setAddress({
        planet: value,
        address_label: '',
        fullName: '',
        address_contact: '',
        lot_number: '',
        address_country: '',
        address_state: ''
      });
    } else {
      setAddress(prevAddress => ({ ...prevAddress, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = editarEndereco(address);
      if (response) {
        handleCloseForm();
      }
    } catch (error) {
      setMessageError(error.message);
    }
  };

  const handleCloseForm = () => {

    navigate("/")
  }

  return (
    <div className="container-register">

      <div className="container-rocket">
        <img src="/public/gifs-de-foguete-2.gif" alt="Foguete flutuando" />
      </div>

      <div className='container-form'>

        <h1 className=''>Delivery Interplanetário</h1>

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
                  </select>
                </label>

                <div className="flex">
                  <label className="label-planet">
                    Nome completo:
                    <input className="in-new-addres" type="text" name="fullName" value={address.fullName} onChange={handleChange} />
                  </label>
                  <label className="label-planet">
                    Telefone:
                    <input className="in-new-addres" type="text" name="address_contact" value={address.address_contact} onChange={handleChange} />
                  </label>
                </div>
              </>

            }


            {
              planet == "Terra" &&
              <div className="endereco-terra">
                <label className="label-planet">
                  País:
                  <input className="in-new-addres" type="text" name="address_country" value={address.address_country} onChange={handleChange} />
                </label>
                <label className="label-planet">
                  Estado:
                  <input className="in-new-addres" type="text" name="address_state" value={address.address_state} onChange={handleChange} />
                </label>
                <label className="label-planet">
                  Cidade:
                  <input className="in-new-addres" type="text" name="address_city" value={address.address_city} onChange={handleChange} />
                </label>
                <label className="label-planet">
                  Código postal:
                  <input className="in-new-addres" type="text" name="address_zip_code" value={address.address_zip_code} onChange={handleChange} />
                </label>
              </div>
            }

            {
              planet == "Marte" &&
              <label className="label-planet">
                Lote:
                <input className="in-new-addres" type="text" name="lot_number" value={address.lot_number} onChange={handleChange} />
              </label>
            }
            <p className="form-message-error">{messageError}</p>
            <div className="wrap-btns-form">
              <button className="btn-cancelar-new-address" onClick={handleCloseForm}>Cancelar</button>
              <button className="btn-salvar-new-address" type="submit" onSubmit={handleSubmit}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;

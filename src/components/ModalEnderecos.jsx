import "../Styles/GlobalStyles.css";
import { useState } from "react";

const ModalEnderecos = () => {
    const [address, setAddress] = useState({ planet: '', lot: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
        console.log(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar dados para o backend
    };
    return (
        <div className="container-modal line">
            <form onSubmit={handleSubmit}>

                <label className="label-planet">
                    Planeta:
                    <select name="planet" value={address.planet} onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                    </select>
                </label>

                <label className="label-planet">
                    Apelido do endereço:
                    <select name="planet" value={address.planet} onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="Terra">Casa</option>
                        <option value="Marte">Trabalho</option>
                    </select>
                </label>

                <div className="flex">
                    <label className="label-planet">
                        Nome completo:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                    <label className="label-planet">
                        Telefone:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                </div>

                <div className="endereco-terra">
                    <label className="label-planet">
                        Nome completo:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                    <label className="label-planet">
                        Telefone:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                    <label className="label-planet">
                        Nome completo:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                    <label className="label-planet">
                        Telefone:
                        <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                    </label>
                </div>

                <label className="label-planet">
                    Lote:
                    <input className="in-new-addres" type="text" name="lot" value={address.lot} onChange={handleChange} />
                </label>

                <button>Cancelar</button>
                <button type="submit">Cadastrar</button>
            </form>
        </div>

    )
}

export default ModalEnderecos;
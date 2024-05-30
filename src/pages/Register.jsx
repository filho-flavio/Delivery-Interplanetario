import { useState } from 'react';
import "../Styles/GlobalStyles.css"
import IconeEndereco from '../components/IconeEndereco';
import ModalEnderecos from '../components/ModalEnderecos';

const Register = () => {
    const [addingAddress, setAddingAddress] = useState(false);

    const arrEnderecos = [
        { idAddres: 1, planetName: "marte", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "marte", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 },
        { idAddres: 1, planetName: "terra", addressName: "Home", addressContact: "0800 2001", addresType: "Main house", lot: 2345 }
    ]


    return (
        <div className="container-register">

            <div className='container-form'>

                <h1 className=''>Delivery Interplanetário</h1>

                {addingAddress ? (<ModalEnderecos />) :
                    (<>
                        <button className='btn-add-endereco' onClick={() => setAddingAddress(!addingAddress)}>Adicionar novo endereço</button>

                        <div className='content-enderecos'>
                            <h3 className='titulo-wrap-enderecos'>Endereços</h3>
                            <span className='escolher-terra-marte'>
                                <span>
                                    <p>Terra</p>
                                    <p>Marte</p>
                                </span>
                                <p className='underline'></p>
                            </span>

                            <input placeholder="Pesquisar endereço" className="in-new-addres" type="text" name="lot" />


                            <ul className='lista-enderecos'>
                                {arrEnderecos.map((item) => (
                                    <IconeEndereco item={item} key={item.idAddres} />
                                ))}
                            </ul>
                        </div>

                    </>

                    )}


            </div>

            <div className="container-rocket">
                <img src="/public/gifs-de-foguete-2.gif" alt="Foguete flutuando" />
            </div>
        </div>
    );
};

export default Register;

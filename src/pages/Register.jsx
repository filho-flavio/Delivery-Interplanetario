// Página de Registro de endereço
import "../Styles/GlobalStyles.css";
import { useEffect, useState } from 'react';
import IconeEndereco from '../components/IconeEndereco';
import ModalCriarEnderecos from '../components/ModalCriarEnderecos';
import { getTodosEnderecos } from '../services/api';

const Register = () => {
    const [addingAddress, setAddingAddress] = useState(false);
    const [arrAddresses, setArrAddresses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [getAddress, setGetAddress] = useState(false);

    useEffect(() => {
        const allAddresses = getTodosEnderecos();
        setArrAddresses(allAddresses);
    }, [addingAddress, getAddress])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAddresses = arrAddresses.filter(address =>
        address.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className="container-register">
            <div className='container-form'>
                <h1 className=''>Delivery Interplanetário</h1>
                {addingAddress ? (
                    <ModalCriarEnderecos setAddingAddress={setAddingAddress} />
                ) : (
                    <>
                        <button className='btn-add-endereco' onClick={() => setAddingAddress(!addingAddress)}>Adicionar novo endereço</button>
                        <div className='content-enderecos'>
                            <h3 className='titulo-wrap-enderecos'>Endereços</h3>
                            <input
                                placeholder="Pesquisar endereço por nome"
                                className="in-new-addres"
                                type="text"
                                name="search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <ul className='lista-enderecos'>
                                {filteredAddresses.map((item, index) => (
                                    <IconeEndereco item={item} key={index} setGetAddress={setGetAddress} />
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
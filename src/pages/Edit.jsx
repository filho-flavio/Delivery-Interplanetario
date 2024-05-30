// src/pages/Edit.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [address, setAddress] = useState({ planet: '', lot: '' });

  useEffect(() => {
    // Buscar dados do endereço para edição usando o id
    // setAddress(data);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar dados atualizados para o backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Planeta:
        <select name="planet" value={address.planet} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
        </select>
      </label>
      <label>
        Lote:
        <input type="text" name="lot" value={address.lot} onChange={handleChange} />
      </label>
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default Edit;

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
    <button type="submit">Cadastrar</button>
</form>
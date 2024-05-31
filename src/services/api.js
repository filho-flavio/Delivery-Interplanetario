// Funções para lidar com as requisições do frontend


// Função que retorna todos os endereços salvos no Local Storage
export const getTodosEnderecos = () => {
  const enderecos = JSON.parse(localStorage.getItem("db_addresses")) || [];
  return enderecos;
};

// Função para criar novo endereço
export const salvarNovoEndereco = (address) => {
  // validando dados recebidos
  if (validateForm(address)) {
    const existingAddresses =
      JSON.parse(localStorage.getItem("db_addresses")) || [];
    const updatedAddresses = [...existingAddresses, address];
    localStorage.setItem("db_addresses", JSON.stringify(updatedAddresses));
    // Se a validação retornar verdadeiro então retornaJSON de sucesso para o frontend
    return { message: "Endereço cadastrado!" };
  }
};

// Validando formulário
const validateForm = (address) => {
  for (let key in address) {
    if (address[key].trim() === "") {
      throw new Error("Todos os campos devem ser preenchidos.");
    }
  }

  // Verificando se o campo de lot_number foi preenchido corretamente
  const lotNumberRegex = /^\d{4}$/;
  if (
    !(lotNumberRegex.test(address.lot_number) || address.lot_number === "null")
  ) {
    throw new Error("O campo lote deve ter 4 dígitos numéricos.");
  }

  const numericRegex = /^\d+$/;
  // Verificando se o campo de address_contact foi preenchido corretamente
  if (
    !numericRegex.test(address.address_contact) &&
    address.address_contact !== "null"
  ) {
    throw new Error("O campo de telefone deve conter apenas números.");
  }

  // Verificando se o campo de address_zip_code foi preenchido corretamente
  if (
    !numericRegex.test(address.address_zip_code) &&
    address.address_zip_code !== "null"
  ) {
    throw new Error("O campo Código Postal deve conter apenas números.");
  }

  return true;
};

// Função para deletar endereço do Local Storage
export const deleteAddress = (id) => {
  const existingAddresses =
    JSON.parse(localStorage.getItem("db_addresses")) || [];

    // Verificando se endereço existe
  const updatedAddresses = existingAddresses.filter(
    (address) => address.id !== id
  );

  // Salvando os dados agora atualizados
  localStorage.setItem("db_addresses", JSON.stringify(updatedAddresses));
};

// Função para editar endereço
export const editarEndereco = (editedAddress) => {
  // Validando dados recebidos do front
  if (validateForm(editedAddress)) {
    const existingAddresses =
      JSON.parse(localStorage.getItem("db_addresses")) || [];

    const addressIndex = existingAddresses.findIndex(
      (address) => address.id === editedAddress.id
    );

    // Verificando se o endereco a ser editado foi encontrado
    if (addressIndex !== -1) {
      // Atualizando o endereco com os novos dados
      existingAddresses[addressIndex] = editedAddress;

      localStorage.setItem("db_addresses", JSON.stringify(existingAddresses));
      // Retornando mensagem de sucesso para o front
      return { message: "Endereço atualizado!" };
    }
  } else {
    throw new Error("Endereço não encontrado para edição.");
  }
};

// Função que retorna endereço pelo id para edição
export const getEnderecoPorId = (id) => {
  const existingAddresses =
    JSON.parse(localStorage.getItem("db_addresses")) || [];

  const foundAddress = existingAddresses.find((address) => address.id === id);

  return foundAddress;
};

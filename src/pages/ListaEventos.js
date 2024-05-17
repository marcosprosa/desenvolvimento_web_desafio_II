import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ListaEventos() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {

    const eventosFromStorage = JSON.parse(localStorage.getItem('eventos')) || [];
    setEventos(eventosFromStorage);
  }, []);

  const handleDetalhes = (id) => {
    navigate(`/detalhes/${id}`);
  };

  const handleAlteracao = (id) => {
    navigate(`/alteracao/${id}`);
  };

  const handleExclusao = (id) => {

    const eventosAtualizados = eventos.filter((evento, index) => index !== id);

    localStorage.setItem('eventos', JSON.stringify(eventosAtualizados));
    alert('Evento excluído com sucesso!');

    window.location.reload();
  };

  return (
    <div>
      <h1>Listagem de Eventos</h1>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <p><strong>Placa Veículo:</strong>  {evento.placaVeiculo}</p>
            <p>Nome do Proprietário: {evento.nomeProprietario}</p>
            <p>Número do Apartamento: {evento.numeroApartamento}</p>
            <p>Bloco do Apartamento: {evento.blocoApartamento}</p>
            <p>Modelo do Veículo: {evento.modeloVeiculo}</p>
            <p>Cor do Veículo: {evento.corVeiculo}</p>
            <p>Número da Vaga de Estacionamento: {evento.numeroVagaEstacionamento}</p>
            <button onClick={() => handleDetalhes(index)}>Detalhes</button>
            <button onClick={() => handleAlteracao(index)}>Alterar</button>
            <button onClick={() => handleExclusao(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default ListaEventos;

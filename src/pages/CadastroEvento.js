import React, { useState } from 'react';
import './CadastroEvento.css';

function CadastroEvento() {
    const [evento, setEvento] = useState({
        titulo: '',
        descricao: '',
        data: '',
        local: '',
        placaVeiculo: '',
        nomeProprietario: '',
        numeroApartamento: '',
        blocoApartamento: '',
        modeloVeiculo: '',
        corVeiculo: '',
        numeroVagaEstacionamento: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
        eventosCadastrados.push(evento);
        localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));

        setEvento({

            placaVeiculo: '',
            nomeProprietario: '',
            numeroApartamento: '',
            blocoApartamento: '',
            modeloVeiculo: '',
            corVeiculo: '',
            numeroVagaEstacionamento: ''
        });
    };

    return (
        <div>
            <h1>Cadastro de Evento</h1>
            <form onSubmit={handleSubmit}>

                <label>Placa do Veículo:</label>
                <input type="text" name="placaVeiculo" value={evento.placaVeiculo} onChange={handleInputChange} />

                <label>Nome do Proprietário:</label>
                <input type="text" name="nomeProprietario" value={evento.nomeProprietario} onChange={handleInputChange} />

                <label>Número do Apartamento:</label>
                <input type="text" name="numeroApartamento" value={evento.numeroApartamento} onChange={handleInputChange} />

                <label>Bloco do Apartamento:</label>
                <input type="text" name="blocoApartamento" value={evento.blocoApartamento} onChange={handleInputChange} />

                <label>Modelo do Veículo:</label>
                <input type="text" name="modeloVeiculo" value={evento.modeloVeiculo} onChange={handleInputChange} />

                <label>Cor do Veículo:</label>
                <input type="text" name="corVeiculo" value={evento.corVeiculo} onChange={handleInputChange} />

                <label>Número da Vaga de Estacionamento:</label>
                <input type="text" name="numeroVagaEstacionamento" value={evento.numeroVagaEstacionamento} onChange={handleInputChange} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroEvento;

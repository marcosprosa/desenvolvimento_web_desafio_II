
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AlteracaoEventos.css'

function AlteracaoEvento() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [evento, setEvento] = useState({
        placaVeiculo: '',
        nomeProprietario: '',
        numeroApartamento: '',
        blocoApartamento: '',
        modeloVeiculo: '',
        corVeiculo: '',
        numeroVagaEstacionamento: ''
    });

    useEffect(() => {

        const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
        const eventoEncontrado = eventosCadastrados.find((evento, index) => index === Number(id));

        if (eventoEncontrado) {
            setEvento(eventoEncontrado);
        } else {
            alert('Evento não encontrado!');
            navigate('/lista');
        }
    }, [id, navigate]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!evento.placaVeiculo || !evento.nomeProprietario || !evento.numeroApartamento || !evento.blocoApartamento || !evento.modeloVeiculo || !evento.corVeiculo || !evento.numeroVagaEstacionamento) {
            alert('Preencha todos os campos!');
            return;
        }


        const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];

        const eventoIndex = eventosCadastrados.findIndex((evento, index) => index === Number(id));

        if (eventoIndex !== -1) {

            eventosCadastrados[eventoIndex] = evento;

            localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));
            alert('Evento alterado com sucesso!');
            navigate('/lista');
        } else {
            alert('Evento não encontrado!');
            navigate('/lista');
        }
    };

    return (
        <div>
            <h1>Alteração de Evento</h1>
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

                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default AlteracaoEvento;

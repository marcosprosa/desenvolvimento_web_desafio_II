import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetalhesEvento.css';

function DetalhesEvento() {
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

    /*const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
    };*/

    /*const handleSubmit = (event) => {
        event.preventDefault();
    };*/

    return (
        <div>
            <h1>Detalhes do Evento</h1>
            <div>
                <h2>{evento.placaVeiculo}</h2>
                <p>{evento.nomeProprietario}</p>
                <p>Número do Apartamento: {evento.numeroApartamento}</p>
                <p>Bloco do Apartamento: {evento.blocoApartamento}</p>
                <p>Modelo do Veículo: {evento.modeloVeiculo}</p>
                <p>Cor do Veículo: {evento.corVeiculo}</p>
                <p>Número da Vaga de Estacionamento: {evento.numeroVagaEstacionamento}</p>
            </div>
        </div>
    );
}

export default DetalhesEvento;

import React, { Component } from 'react';
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

//Import CSS
import '../../App.css';
import './Species.css';

export default class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: []
        };
    }

    componentDidMount() {
        apisw.getSpecies()
            .then(species => this.setState({ species }))
    }

    render() {
        return (
            <div className="padding-principal">
                <h3 style={{ marginBottom: 30 }} className="centraliza-titulo">Espécies</h3>

                <Table striped bordered hover className="centraliza-tabela centraliza-colunasTabela">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Nome</th>
                            <th>Classificação</th>
                            <th>Designação</th>
                            <th>Tempo de vida médio</th>
                            <th>Altura Média</th>
                            <th>Lingua</th>
                            <th>Cor da Skin</th>
                        </tr>

                        {this.state.species.map((item, i) => {
                            return <tr key={i}>
                                <th>{i+1}</th>
                                <th>{item.name}</th>
                                <th>{item.classification}</th>
                                <th>{item.designation}</th>
                                <th>{item.average_lifespan}</th>
                                <th>{item.average_height}</th>
                                <th>{item.language}</th>
                                <th>{item.skin_colors}</th>
                            </tr>   
                        })}
                    </thead>
                </Table>
            </div>
        )
    }
}
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class Parents extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { handleState } = this.props;
        handleState(name, value);
    }

    render(){
        const { state } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4}>
                                <TextField
                                    id="NameMom"
                                    label="Nombre de la madre"
                                    name="NameMom"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMotherName}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="ocupationMom"
                                    label="Ocupacion"
                                    name="ocupationMom"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMotherOccupation}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="phoneMom"
                                    label="Numero de telefono"
                                    name="phoneMom"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMotherPhone}
                                />   
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4}>
                                <TextField
                                    id="nameDad"
                                    label="Nombre del padre"
                                    name="nameDad"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateFatherName}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="ocupationDad"
                                    label="Ocupacion"
                                    name="ocupationDad"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateFatherOccupation}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="phoneDad"
                                    label="Numero de telefono"
                                    name="phoneDad"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateFatherPhone}
                                />   
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Parents;
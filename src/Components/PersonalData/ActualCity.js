import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class ActualCity extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { handleState } = this.props;
        handleState(name, value);
    }

    render (){
        const { state } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4}>
                                <TextField
                                    id="street"
                                    label="Calle y Numero"
                                    name="streetC"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateCurrentStreet}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="colony"
                                    label="Colonia"
                                    name="colonyC"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateNeighborhood}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="zp"
                                    label="Codigo Postal"
                                    name="zpC"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateCurrentZipCode}
                                />   
                            </Col>
                        </Row>
                    </Col>
                </Row>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={4}>
                                    <TextField
                                        id="localityc"
                                        label="Localidad"
                                        name="localityC"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        value={state.candidateCurrentLocality}
                                    />   
                                </Col>
                                <Col xs={4}>
                                    <TextField
                                        id="municipality"
                                        label="Municipio"
                                        name="municipalityC"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        value={state.candidateCurrentMunicipality}
                                    />   
                                </Col>
                                <Col xs={4}>
                                    <TextField
                                        id="statec"
                                        label="Estado"
                                        name="stateC"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                        value={state.candidateCurrentState}
                                    />   
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Grid>
        );
    }
 }

 export default ActualCity;
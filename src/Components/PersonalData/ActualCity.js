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
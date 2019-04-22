import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class ActualCity extends Component{
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
                                    name="street"
                                    margin="normal"
                                    variant="outlined"
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="colony"
                                    label="Colonia"
                                    name="colony"
                                    margin="normal"
                                    variant="outlined"
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="cp"
                                    label="Codigo Postal"
                                    name="cp"
                                    margin="normal"
                                    variant="outlined"
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
                                        id="localityac"
                                        label="Localidad"
                                        name="localityac"
                                        margin="normal"
                                        variant="outlined"
                                    />   
                                </Col>
                                <Col xs={4}>
                                    <TextField
                                        id="municipalyac"
                                        label="Municipio"
                                        name="municipalyac"
                                        margin="normal"
                                        variant="outlined"
                                    />   
                                </Col>
                                <Col xs={4}>
                                    <TextField
                                        id="stateac"
                                        label="Estado"
                                        name="stateac"
                                        margin="normal"
                                        variant="outlined"
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
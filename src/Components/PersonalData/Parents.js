import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class Parents extends Component{
    render(){
        return(
            <Grid>
                    <Row between="xs">
                        <Col xs={2}>
                            <TextField
                                    id="NameMom"
                                    label="Nombre de la madre"
                                    name="NameMom"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="ocupationMom"
                                    label="Ocupacion"
                                    name="ocupationMom"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="phoneMom"
                                    label="Numero de telefono"
                                    name="phoneMom"
                                    margin="normal"
                                    variant="outlined"
                                />   
                        </Col>
                    </Row>
                    <Row between="xs">
                        <Col xs={2}>
                            <TextField
                                    id="nameDad"
                                    label="Nombre del padre"
                                    name="nameDad"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="ocupationDad"
                                    label="Ocupacion"
                                    name="ocupationDad"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="phoneDad"
                                    label="Numero de telefono"
                                    name="phoneDad"
                                    margin="normal"
                                    variant="outlined"
                                />   
                        </Col>
                    </Row>
            </Grid>
        );
    }
}
export default Parents;
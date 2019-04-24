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
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4}>
                                <TextField
                                        id="NameMom"
                                        label="Nombre de la madre"
                                        name="NameMom"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                        id="ocupationMom"
                                        label="Ocupacion"
                                        name="ocupationMom"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                        id="phoneMom"
                                        label="Numero de telefono"
                                        name="phoneMom"
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
                                        id="nameDad"
                                        label="Nombre del padre"
                                        name="nameDad"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                        id="ocupationDad"
                                        label="Ocupacion"
                                        name="ocupationDad"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleChange}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                        id="phoneDad"
                                        label="Numero de telefono"
                                        name="phoneDad"
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
export default Parents;
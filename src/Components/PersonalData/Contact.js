import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class Contact extends Component{
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
                                    id="phoneP"
                                    label="Telefono particular"
                                    name="phoneP"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidatePersonalPhone}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="cellPhone"
                                    label="Telefono Celular"
                                    name="cellPhone"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateCellPhone}
                                />   
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="email"
                                    label="Correo Electronico"
                                    name="email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateEmail}
                                />   
                            </Col>
                        </Row>
                    </Col>        
                </Row>
            </Grid>
        );
    }
}

export default Contact; 
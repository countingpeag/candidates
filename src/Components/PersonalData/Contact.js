import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class Contact extends Component{
    render(){
        return(
            <Grid>  
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4}>
                                <TextField
                                    id="phoneP"
                                    label="Telefono particular"
                                    name="honeP"
                                    margin="normal"
                                    variant="outlined"
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="cellPhone"
                                    label="Telefono Celular"
                                    name="cellPhone"
                                    margin="normal"
                                    variant="outlined"
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="email"
                                    label="Correo Electronico"
                                    name="email"
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
export default Contact; 
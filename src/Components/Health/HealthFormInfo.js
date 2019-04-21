import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import StylesHealt from '../../Styles/StylesHealt.css';


class HealthFormInfo extends Component{
    
    render(){      
        
        return(
            <Grid id='gridSelect'>
                <Row >
                        <Col xs={6}>
                        <TextField
                            id="Nss"
                            label="Número seguro social"
                            name="nss"
                            autoComplete=""
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>                    
                        <Col xs={6} >
                        <TextField
                            id="Height"
                            label="Estatura"
                            name="height"
                            autoComplete=""
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>
                </Row>
                <Row >
                        <Col xs={6}>
                            <TextField
                                id="Weight"
                                label="Peso"
                                name="weight"                           
                                autoComplete=""
                                margin="normal"
                                variant="outlined"
                            />
                        </Col>
                   
                    
                        <Col xs={6}>
                        <TextField
                            id="Blood"
                            label="Tipo de sangre"
                            name="blood"
                            autoComplete=""
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>                    
                       
                    </Row>
            </Grid>  
        );
    }
}
export default HealthFormInfo;
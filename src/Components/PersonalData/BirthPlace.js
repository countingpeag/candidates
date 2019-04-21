import React,{Component} from 'react';
import { Grid } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';


class BirthPlace extends Component{

    render(){
        return(
            <Grid>
                <Row between="xs">
                <Col xs={2}>
                        <TextField
                            id="Municipaly"
                            label="Municipio"
                            name="municipaly"
                            autoComplete="municypaly"
                            margin="normal"
                            variant="outlined"
                        />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                id="Location"
                                label="Localidad"
                                name="location"
                                autoComplete="location"
                                margin="normal"
                                variant="outlined"
                            />   
                         </Col>
                         <Col xs={2}>
                            <TextField
                                id="State"
                                label="Estado"
                                name="State"
                                autoComplete="state"
                                margin="normal"
                                variant="outlined"
                            />   
                         </Col>
                </Row>               
            </Grid>
        );
    }
}
export default BirthPlace;
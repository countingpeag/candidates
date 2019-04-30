import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class HealthFormInfo extends Component{
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
                            <Col xs={4}>
                                <TextField
                                    id="Nss"
                                    label="Número seguro social"
                                    name="nss"
                                    autoComplete=""
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.insuranceNumber}
                                />
                            </Col>                    
                            <Col xs={4} >
                                <TextField
                                    id="Height"
                                    label="Estatura"
                                    name="height"
                                    autoComplete=""
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.healthCandidateHeight}
                                />
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="Weight"
                                    label="Peso"
                                    name="weight"                           
                                    autoComplete=""
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.healthCandidateWeight}
                                />
                            </Col>
                        </Row>
                    </Col>    
                </Row>
            </Grid>  
        );
    }
}
export default HealthFormInfo;
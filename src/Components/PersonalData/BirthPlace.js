import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';


class BirthPlace extends Component{

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
                                    id="Municipaly"
                                    label="Municipio"
                                    name="municipaly"
                                    autoComplete="municypaly"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMunicipalityBorn}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="Location"
                                    label="Localidad"
                                    name="location"
                                    autoComplete="location"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateLocalityBorn}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="State"
                                    label="Estado"
                                    name="state"
                                    autoComplete="state"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateStateBorn}
                                />   
                            </Col>
                        </Row>
                    </Col>
                </Row>               
            </Grid>
        );
    }
}

export default BirthPlace;
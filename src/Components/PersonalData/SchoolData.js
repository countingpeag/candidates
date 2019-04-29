import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class SchoolData extends Component{
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
        const { candidateSchoolType, candidateSchoolRegime } = this.props.state;
        const { state } = this.props;
        return(
            <Grid>
                <Row between="xs">
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4}>
                                <TextField
                                    id="nameSchool"
                                    label="Nombre"
                                    name="nameSchool"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMiddleSchool}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="municipalitySchool"
                                    label="Municipio"
                                    name="municipalitySchool"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateMunicipalitySchool}
                                />   
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="stateSchool"
                                    label="Estado"
                                    name="stateSchool"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateStateSchool}
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
                                    id="finishSchool"
                                    name="finishSchool"
                                    label="Año de termino"
                                    type="date"    
                                    onChange={this.handleChange} 
                                    value={state.candidateEndDate}                     
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />  
                            </Col>
                            <Col xs={4}>
                                <TextField
                                    id="SecondaryKey"
                                    label="Clave de la secundaria"
                                    name="secondarykey"
                                    autoComplete=" "
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateSchoolKey}
                                />   
                            </Col>
                            <Col xs={2} className="topSpace">
                                <FormControl variant="outlined"  className="size">
                                    <InputLabel>Tipo</InputLabel>
                                    <Select value={candidateSchoolType} onChange={this.handleChange} name="typeSchool">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Estatal tecnica'}>
                                            Estatal tecnica
                                        </MenuItem>
                                        <MenuItem value={'Estatal general'}>
                                            Estatal general
                                        </MenuItem>
                                        <MenuItem value={'Federal tecnica'}>
                                            Federal tecnica
                                        </MenuItem>
                                        <MenuItem value={'Federal general'}>
                                            Federal general
                                        </MenuItem>
                                        <MenuItem value={'Publica tecnica'}>
                                            Publica tecnica
                                        </MenuItem>
                                        <MenuItem value={'Publica general'}>
                                            Publica general
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={2} className="topSpace">
                                <FormControl variant="outlined"  className="size">
                                    <InputLabel> Regimen </InputLabel>
                                    <Select value={candidateSchoolRegime} onChange={this.handleChange} name="regime">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'particular'}>
                                            Particular
                                        </MenuItem>
                                        <MenuItem value={'public'}>
                                            Publico
                                        </MenuItem> 
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                    </Col>
                </Row>                    
            </Grid>
        );
    }
}

export default SchoolData;

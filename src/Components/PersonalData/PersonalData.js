import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class PersonalData extends Component{

    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event){
        const { handleState } = this.props;
        const { name, value } = event.target;
        handleState( name, value );
    }

    render(){
        const { candidateCivilStatus, candidateGenre } = this.props.state;
        const { state } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4}>
                                <TextField 
                                    id="Name"
                                    label="Nombre"
                                    name="name"
                                    autoComplete="name"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateName}
                                />
                            </Col>                    
                            <Col xs={6} md={4} >
                                <TextField
                                    id="LastNameP"
                                    label="Apellido Paterno"
                                    name="LastNameP"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateLastNameFather}
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <TextField
                                    id="LastNameM"
                                    label="Apellido Materno"
                                    name="LastNameM"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateLastNameMother}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4}>
                                <TextField
                                    id="Age"
                                    label="Edad"
                                    name="age"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.candidateAge}
                                />
                            </Col>
                            <Col xs={6} md={4} className="topSpace">
                                <TextField
                                    id="date"
                                    name="date"
                                    label="Fecha de nacimeinto"
                                    type="date"    
                                    onChange={this.handleChange} 
                                    value={state.candidateBirthDate}                     
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </Col>    
                            <Col xs={6} md={2} className="topSpace">
                                <FormControl variant="outlined" className="size">
                                    <InputLabel>Estado Civil</InputLabel>
                                    <Select value={candidateCivilStatus} onChange={this.handleChange} name="civilStatus">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'single'}>
                                            Soltero
                                        </MenuItem>
                                        <MenuItem value={'married'}>
                                            Casado
                                        </MenuItem>
                                        <MenuItem value={'divorced'}>
                                            Divorciado
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={6} md={2} className="topSpace">
                                <FormControl variant="outlined" className="size">
                                    <InputLabel>Sexo</InputLabel>
                                    <Select value={candidateGenre} onChange={this.handleChange} name="genre">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'H'}>
                                            Hombre
                                        </MenuItem>
                                        <MenuItem value={'M'}>
                                            Mujer
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>                   
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row start="xs">
                            
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default PersonalData;
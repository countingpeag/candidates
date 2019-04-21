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
        this.state = {
            tipeSchool: '',
            regime:'',
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        const {value, name} = event.target;

        if(name==="tipeSchool")
            this.setState({tipeSchool:value});
        else if(name==="regime")
            this.setState({regime:value});
    }

    render(){   
        const { tipeSchool,regime } = this.state;
        return(
            <Grid>
                <Row between="xs">
                        <Col xs={2}>
                            <TextField
                                    id="nameSchool"
                                    label="Nombre"
                                    name="nameSchool"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="municipalySchool"
                                    label="Municipio"
                                    name="municipalySchool"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <TextField
                                    id="estateSchool"
                                    label="Estado"
                                    name="estateSchool"
                                    margin="normal"
                                    variant="outlined"
                                />   
                        </Col>
                    </Row>
                    <Row between="xs">
                        <Col xs={2}>
                            <TextField
                                    id="SecondaryKey"
                                    label="Nombre de secundaria"
                                    name="secondarykey"
                                    autoComplete=" "
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                        <Col xs={2}>
                            <FormControl variant="outlined" id='FControl'>
                                    <InputLabel>Tipo</InputLabel>
                                    <Select value={tipeSchool} onChange={this.handleChange} name="tipeSchool">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'etec'}>
                                            Estatal tecnica
                                        </MenuItem>
                                        <MenuItem value={'egen'}>
                                            Estatal general
                                        </MenuItem>
                                        <MenuItem value={'ftec'}>
                                            Federal tecnica
                                        </MenuItem>
                                        <MenuItem value={'fgen'}>
                                            Federal general
                                        </MenuItem>
                                        <MenuItem value={'ptec'}>
                                            Publica tecnica
                                        </MenuItem>
                                        <MenuItem value={'pgen'}>
                                            Publica general
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                        </Col>
                        <Col xs={2}>
                            <FormControl variant="outlined" id='FControl'>
                                    <InputLabel> Regimen </InputLabel>
                                    <Select value={regime} onChange={this.handleChange} name="regime">
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
                        <Col xs={2}>
                            <TextField
                                    id="finishSchool"
                                    label="Año de termino"
                                    name="finishSchool"
                                    margin="normal"
                                    variant="outlined"
                            />   
                        </Col>
                    </Row>                    
            </Grid>
        );
    }
}
export default SchoolData;

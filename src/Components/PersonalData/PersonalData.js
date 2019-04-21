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
        this.state = {
            civilStatus: '',
            sex:'',
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        const {value, name} = event.target;

        if(name==="civilStatus")
            this.setState({civilStatus:value});
        else if(name==="sex")
            this.setState({sex:value});
    }

    render(){
        const { civilStatus,sex } = this.state;
        return(
            <Grid>
                <Row between="xs">
                        <Col xs={2}>
                        <TextField 
                            id="Name"
                            label="Nombre"
                            name="name"
                            autoComplete="name"
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>                    
                        <Col xs={2} >
                        <TextField
                            id="LastNamep"
                            label="Apellido Paterno"
                            name="LastNamep"
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>
                        <Col xs={2}>
                        <TextField
                            id="LastNamem"
                            label="Apellido Materno"
                            name="LastNamem"
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                        <TextField  id='FControl'
                            id="date"
                            label="Fecha de nacimeinto"
                            type="date"                          
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </Col>  
                    </Row>
                    <Row between="xs">
                        <Col xs={2}>
                            <FormControl variant="outlined" id='FControl'>
                                    <InputLabel>Estado Civil</InputLabel>
                                    <Select value={civilStatus} onChange={this.handleChange} name="civilStatus">
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
                        <Col xs={2}>
                            <FormControl variant="outlined" id='FControl' >
                                    <InputLabel>Sexo</InputLabel>
                                    <Select onChange={this.handleChange} value={sex} name="sex">
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
                    <Col xs={2}>
                        <TextField
                            id="Age"
                            label="Edad"
                            name="age"
                            margin="normal"
                            variant="outlined"
                        />
                        </Col>   
                    </Row>
            </Grid>
        );
    }
}
export default PersonalData;
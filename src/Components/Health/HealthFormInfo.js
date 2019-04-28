import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
        const { healthIllnessFlag, healthDisability } = this.props.state;
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
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4}>
                                <TextField
                                    id="Blood"
                                    label="Tipo de sangre"
                                    name="blood"
                                    autoComplete=""
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={state.healthCandidateBloodType}
                                />
                            </Col> 
                            <Col xs={4} className="topSpace">
                            <FormControl variant="outlined" className="selectsWidthLarge">
                                <InputLabel> ¿Padece alguna enfermedad? </InputLabel>
                                <Select value={healthIllnessFlag} onChange={this.handleChange} name="disease" >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'1'}>
                                        Si
                                    </MenuItem>
                                    <MenuItem value={'0'}>
                                        No
                                    </MenuItem> 
                                </Select>
                            </FormControl>
                            </Col>
                            <Col xs={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthLarge">
                                    <InputLabel> ¿Padece alguna discapacidad? </InputLabel>
                                    <Select value={healthDisability} onChange={this.handleChange} name="disability">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'no'}>
                                            No
                                        </MenuItem>
                                        <MenuItem value={'motriz'}>
                                            Motriz
                                        </MenuItem> 
                                        <MenuItem value={'auditiva'}>
                                            Auditiva
                                        </MenuItem> 
                                        <MenuItem value={'visual'}>
                                            Visual
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
export default HealthFormInfo;
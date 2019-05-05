import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class HealtFormSelect extends Component{
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
        const { healthGlassesFlag, healthSmokingFlag, healthLaterality, healthIllnessFlag, healthDisability, healthCandidateBloodType } = this.props.state;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthLarge">
                                    <InputLabel>Tipo de sangre</InputLabel>
                                    <Select value={healthCandidateBloodType} onChange={this.handleChange} name="blood">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'O+'}>
                                            O+
                                        </MenuItem>
                                        <MenuItem value={'O-'}>
                                            O-
                                        </MenuItem>
                                        <MenuItem value={'A+'}>
                                            A+
                                        </MenuItem>
                                        <MenuItem value={'A-'}>
                                            A-
                                        </MenuItem>
                                        <MenuItem value={'B+'}>
                                            B+
                                        </MenuItem>
                                        <MenuItem value={'B-'}>
                                            B-
                                        </MenuItem>
                                        <MenuItem value={'AB+'}>
                                            AB+
                                        </MenuItem>
                                        <MenuItem value={'AB-'}>
                                            AB-
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col> 
                            <Col xs={6} md={4} className="topSpace">
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
                            <Col xs={6} md={4} className="topSpace">
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
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> ¿Usa lentes? </InputLabel>
                                    <Select value={healthGlassesFlag} onChange={this.handleChange} name="glasses">
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
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> ¿Fuma? </InputLabel>
                                    <Select value={healthSmokingFlag} onChange={this.handleChange} name="smokes">
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
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> Lateralidad </InputLabel>
                                    <Select value={healthLaterality} onChange={this.handleChange} name="laterality">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Diestro'}>
                                            Diestro
                                        </MenuItem>
                                        <MenuItem value={'Zurdo'}>
                                            Zurdo
                                        </MenuItem> 
                                        <MenuItem value={'Ambidiestro'}>
                                            Ambidiestro
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
export default HealtFormSelect;
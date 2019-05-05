import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';;

class SpecialtiesPreferences extends Component {
    render(){
        return(
            <Grid>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <h2>Especialidad de preferencia</h2>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 1 </InputLabel>
                                <Select value={''} onChange={this.handleChange} name="scholarship" >
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
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 2 </InputLabel>
                                <Select value={''} onChange={this.handleChange} name="scholarship" >
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
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 3 </InputLabel>
                                <Select value={''} onChange={this.handleChange} name="scholarship" >
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
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 4 </InputLabel>
                                <Select value={''} onChange={this.handleChange} name="scholarship" >
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
                    </Row>
                </Col>
            </Grid>
        );
    }
}

export default SpecialtiesPreferences;
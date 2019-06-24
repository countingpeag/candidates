import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';;

class SpecialtiesPreferences extends Component {

    constructor(){
        super();
        this.state = {
            options: ['ELECTRÓNICA','LABORATORISTA QUÍMICO','MANTENIMIENTO AUTOMOTRIZ','LABORATORISTA CLÍNICO'],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { handleState } = this.props;
        handleState(name, value);
    }

    render(){
        const { options } = this.state;
        const { preferencesSpecialtyWhished1, preferencesSpecialtyWhished2, preferencesSpecialtyWhished3, preferencesSpecialtyWhished4 } = this.props.state;
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
                            <FormControl variant="outlined" className="specialtiesOptions">
                                <InputLabel> Opcion 1 </InputLabel>
                                <Select value={preferencesSpecialtyWhished1} onChange={this.handleChange} name="option1" >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        options.filter( option => option!==preferencesSpecialtyWhished2 && option!==preferencesSpecialtyWhished3 && option!==preferencesSpecialtyWhished4 )
                                        .map( item => 
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 2 </InputLabel>
                                <Select value={preferencesSpecialtyWhished2} onChange={this.handleChange} name="option2" >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        options.filter( option => option!==preferencesSpecialtyWhished1 && option!==preferencesSpecialtyWhished3 && option!==preferencesSpecialtyWhished4 )
                                        .map( item => 
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 3 </InputLabel>
                                <Select value={preferencesSpecialtyWhished3} onChange={this.handleChange} name="option3" >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        options.filter( option => option!==preferencesSpecialtyWhished1 && option!==preferencesSpecialtyWhished2 && option!==preferencesSpecialtyWhished4 )
                                        .map( item => 
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={6} md={3}>
                            <FormControl variant="outlined" className="selectWidth">
                                <InputLabel> Opcion 4 </InputLabel>
                                <Select value={preferencesSpecialtyWhished4} onChange={this.handleChange} name="option4" >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        options.filter( option => option!==preferencesSpecialtyWhished1 && option!==preferencesSpecialtyWhished2 && option!==preferencesSpecialtyWhished3 )
                                        .map( item => 
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        )
                                    }
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
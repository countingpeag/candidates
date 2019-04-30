import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import '../../Styles/StylesPreferences.css';

class PreferencesInfo extends Component {
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
        const { preferencesScholarshipFlag, preferencesShiftWished, preferencesWayToKnow } = this.props.state;
        return(
            <Grid>
                <Row> 
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectWidth">
                                    <InputLabel> ¿Beca PROSPERA? </InputLabel>
                                    <Select value={preferencesScholarshipFlag} onChange={this.handleChange} name="scholarship" >
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
                                <FormControl variant="outlined" className="selectWidth">
                                    <InputLabel>Turno deseado </InputLabel>
                                    <Select value={preferencesShiftWished} onChange={this.handleChange} name="shift">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'morning'}>
                                            Mañana
                                        </MenuItem> 
                                        <MenuItem value={'afternoon'}>
                                            Tarde
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={6} md={4} className="topSpace">
                                <FormControl variant="outlined" className="selectWidth">
                                    <InputLabel> ¿Como se entero? </InputLabel>
                                    <Select value={preferencesWayToKnow} onChange={this.handleChange} name="info">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'family'}>
                                        <em>Familiares/Amigos</em>
                                        </MenuItem>
                                        <MenuItem value={'internet'}>
                                            Internet
                                        </MenuItem> 
                                        <MenuItem value={'visit'}>
                                            Visita a Secundaria
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
export default PreferencesInfo;
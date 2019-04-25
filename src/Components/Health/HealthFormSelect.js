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
        const { healthGlassesFlag, healthSmokingFlag, healthLaterality } = this.props.state;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4} className="topSpace">
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
                            <Col xs={4} className="topSpace">
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
                            <Col xs={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> Lateralidad </InputLabel>
                                    <Select value={healthLaterality} onChange={this.handleChange} name="laterality">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'right'}>
                                            Diestro
                                        </MenuItem>
                                        <MenuItem value={'left'}>
                                            Zurdo
                                        </MenuItem> 
                                        <MenuItem value={'both'}>
                                            Ambos
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
import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class HealtFormSelect extends Component{
    constructor(){
        super();
        this.state = {
            disease: '',
            disability:'',
            glasses:'',
            smokes:'',
            laterality:'',
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        const {value, name} = event.target;

        if(name==="disease")
            this.setState({disease:value});
            else if(name==="disability")
                this.setState({disability:value});
                else if(name=="glasses")
                    this.setState({glasses:value})
                    else if(name=="smokes")
                        this.setState({smokes:value});
                        else if(name=="laterality")
                            this.setState({laterality:value})
    }
    render(){      
        const { disease,disability,glasses,smokes,laterality } = this.state;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> ¿Usa lentes? </InputLabel>
                                    <Select value={glasses} onChange={this.handleChange} name="glasses">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'yesL'}>
                                            Si
                                        </MenuItem>
                                        <MenuItem value={'noL'}>
                                            No
                                        </MenuItem> 
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> ¿Fuma? </InputLabel>
                                    <Select value={smokes} onChange={this.handleChange} name="smokes">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'yesS'}>
                                            Si
                                        </MenuItem>
                                        <MenuItem value={'noS'}>
                                            No
                                        </MenuItem> 
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={4} className="topSpace">
                                <FormControl variant="outlined" className="selectsWidthShort">
                                    <InputLabel> Lateralidad </InputLabel>
                                    <Select value={laterality} onChange={this.handleChange} name="laterality">
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
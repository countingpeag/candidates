import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


class PreferencesInfo extends Component {
    constructor(){
        super();
        this.state = {
            scholarship: '',
            turn:'',
            info:'',
            
        };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        const {value, name} = event.target;

        if(name==="scholarship")
            this.setState({scholarship:value});
            else if(name==="turn")
                this.setState({turn:value});
                else if(name=="info")
                    this.setState({info:value})
    }
    render(){
        const { scholarship,turn,info } = this.state;
        return(
            <Grid>
                <Row > 
                <Col xs={4}>
                                <FormControl variant="outlined" id='FControl'>
                                    <InputLabel> ¿Beca PROSPERA? </InputLabel>
                                    <Select value={scholarship} onChange={this.handleChange} name="scholarship" >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'yesE'}>
                                            Si
                                        </MenuItem>
                                        <MenuItem value={'noE'}>
                                            No
                                        </MenuItem> 
                                    </Select>
                                </FormControl>
                        </Col>
                        <Col xs={4} >
                            <FormControl variant="outlined" id='FControl'>
                                    <InputLabel>Turno deseado </InputLabel>
                                    <Select value={turn} onChange={this.handleChange} name="turn">
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
                        <Col xs={4} >
                                <FormControl variant="outlined" id='FControl'>
                                        <InputLabel> ¿Como se entero? </InputLabel>
                                        <Select value={info} onChange={this.handleChange} name="info">
                                            <MenuItem value=''>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'family'}>
                                               <em> Familiares/Amigos</em>
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
                        
            </Grid>
        );
            
    }
}
export default PreferencesInfo;
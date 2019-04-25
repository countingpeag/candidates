import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import PreferencesInfo from './PreferencesInfo';
import PreferencesTable from './PreferencesTable';

class Preferences extends Component{

    constructor(){
        super();

        this.state = {
            preferencesScholarshipFlag: '',
            preferencesShiftWished: '',
            preferencesWayToKnow: '',
            preferencesSpecialtyWhished1: '',
            preferencesSpecialtyWhished2: '',
            preferencesSpecialtyWhished3: '',
            preferencesSpecialtyWhished4: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value){
        if(name==="scholarship")
            this.setState({preferencesScholarshipFlag:value});
        else if(name==="shift")
            this.setState({preferencesShiftWished:value});
        else if(name==="info")
            this.setState({preferencesWayToKnow:value});
    } 

    render(){
        const { index, handleSubmit, handleBack } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <PreferencesInfo handleState={this.handleChange} state={this.state}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PreferencesTable/>
                    </Col>    
                </Row>
                <Row>
                    <div className="next">
                        <Button disabled={index === 0} onClick={handleBack}>
                            Regresar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleSubmit(this.state)}>
                            Terminar
                        </Button>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default Preferences;
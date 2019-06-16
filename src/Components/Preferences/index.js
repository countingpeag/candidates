import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PreferencesInfo from './PreferencesInfo';
import ProgressComponent from '../Util/CircularProgress';
import DialogComponent from './../Util/DialogComponent';
import '../../Styles/StylesPreferences.css';

class Preferences extends Component{

    constructor(){
        super();

        this.state = {
            preferencesScholarshipFlag: '',
            preferencesShiftWished: '',
            preferencesWayToKnow: '',
            preferencesSpecialtyWhished1: ''
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
        else if(name==="option1")
            this.setState({preferencesSpecialtyWhished1:value});
    } 

    render(){
        const { index, handleSubmit, handleBack, registrySent, dialogState, aceptDialog, closeDialog } = this.props;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <PreferencesInfo handleState={this.handleChange} state={this.state}/>
                    </Col>
                </Row>
                <Row className="next">
                    <Col>
                        <Button disabled={index === 0} onClick={handleBack}>
                            Regresar
                        </Button>
                    </Col>
                    <Col className="progressComponent">
                        <Button variant="contained" color="primary" onClick={() => handleSubmit(this.state)} disabled={registrySent}>
                            Terminar
                        </Button>
                        {registrySent && <ProgressComponent size={24} />}
                    </Col>
                    <Col>
                        <DialogComponent dialogState={dialogState} aceptDialog={aceptDialog} closeDialog={closeDialog} title={"¿Sus datos son correctos?"} content={"Si le da aceptar sus datos seran registrados y no podran ser modificados."}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    registrySent: state.registrySent
});

export default connect(mapStateToProps, null)(Preferences);
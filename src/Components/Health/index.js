import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import HealthFormInfo from './HealthFormInfo';
import HealthFormSelect from './HealthFormSelect';
import '../../Styles/StylesHealt.css';

class HealthForm extends Component{

    constructor(){
        super();
        this.state = {
            insuranceNumber: '',
            healthCandidateHeight: '',
            healthCandidateWeight: '',
            healthCandidateBloodType: '',
            healthIllnessFlag: '',
            healthDisability: '',
            healthGlassesFlag: '',
            healthSmokingFlag: '',
            healthLaterality: ''
        };

        this.handleCHange = this.handleCHange.bind(this);
    }

    handleCHange(name, value){
        if(name==="nss")
            this.setState({insuranceNumber:value});
        else if(name==="height")
            this.setState({healthCandidateHeight:value});
        else if(name==="weight")
            this.setState({healthCandidateWeight:value});
        else if(name==="blood")
            this.setState({healthCandidateBloodType:value});
        else if(name==="disease")
            this.setState({healthIllnessFlag:value});
        else if(name==="disability")
            this.setState({healthDisability:value});
        else if(name==="glasses")
            this.setState({healthGlassesFlag:value});
        else if(name==="smokes")
            this.setState({healthSmokingFlag:value});
        else if(name==="laterality")
            this.setState({healthLaterality:value});
    }

    componentDidMount(){
        this.setState(this.props.health)
    }

    render(){
        const { index, handleNext, handleBack } = this.props;
        return(
            <Grid>
                <Row>
                    <Col>
                        <HealthFormInfo handleState={this.handleCHange} state={this.state}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HealthFormSelect handleState={this.handleCHange} state={this.state}/>
                    </Col>
                </Row>
                <Row>
                    <div className="next">
                        <Button disabled={index === 0} onClick={handleBack}>
                            Regresar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleNext(this.state, "health")}>
                            Siguiente
                        </Button>
                    </div>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    health: state.health
});

export default connect(mapStateToProps, null)(HealthForm);
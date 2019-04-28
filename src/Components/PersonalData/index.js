import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PersonalData from './PersonalData';
import BirthPlace from './BirthPlace';
import ActualCity from './ActualCity';
import Contact from './Contact';
import Parents from './Parents';
import SchoolData from './SchoolData';
import Button from '@material-ui/core/Button';
import '../../Styles/PersonalFormStyles.css';

class PersonalForm extends Component{

    constructor(){
        super();
        this.state = {
            candidateName: '',
            candidateLastNameFather: '',
            candidateLastNameMother: '',
            candidateBirthDate: '',
            candidateCivilStatus: '',
            candidateGenre: '',
            candidateAge: '',
            candidateMunicipalityBorn: '',
            candidateLocalityBorn: '',
            candidateStateBorn: '',
            candidateCurrentStreet: '',
            candidateCurrentHouseNumber: '',
            candidateNeighborhood: '',
            candidateCurrentZipCode: '',
            candidateCurrentMunicipality: '',
            candidateCurrentLocality: '',
            candidateCurrentState: '',
            candidateCellPhone: '',
            candidatePersonalPhone: '',
            candidateEmail: '',
            candidateFatherName: '',
            candidateMotherName: '',
            candidateMotherOccupation: '',
            candidateFatherOccupation: '',
            candidateMotherPhone: '',
            candidateFatherPhone: '',
            candidateMiddleSchool: '',
            candidateMunicipalitySchool: '',
            candidateStateSchool: '',
            candidateSchoolType: '',
            candidateSchoolRegime: '',
            candidateSchoolKey: '',
            candidateEndDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value){
        if(name==="name")
            this.setState({candidateName:value});
        else if(name==="LastNameP")
            this.setState({candidateLastNameFather:value});
        else if(name==="LastNameM")
            this.setState({candidateLastNameMother:value});
        else if(name==="age")
            this.setState({candidateAge:value});
        else if(name==="date")
            this.setState({candidateBirthDate:value});
        else if(name==="civilStatus")
            this.setState({candidateCivilStatus:value});
        else if(name==="genre")
            this.setState({candidateGenre:value});
        else if(name==="municipaly")
            this.setState({candidateMunicipalityBorn:value});
        else if(name==="location")
            this.setState({candidateLocalityBorn:value});
        else if(name==="state")
            this.setState({candidateStateBorn:value});
        else if(name==="streetC")
            this.setState({candidateCurrentStreet:value});
        else if(name==="colonyC")
            this.setState({candidateNeighborhood:value});
        else if(name==="zpC")
            this.setState({candidateCurrentZipCode:value});
        else if(name==="localityC")
            this.setState({candidateCurrentLocality:value});
        else if(name==="municipalityC")
            this.setState({candidateCurrentMunicipality:value});
        else if(name==="stateC")
            this.setState({candidateCurrentState:value});
        else if(name==="phoneP")
            this.setState({candidatePersonalPhone:value});
        else if(name==="cellPhone")
            this.setState({candidateCellPhone:value});
        else if(name==="email")
            this.setState({candidateEmail:value});
        else if(name==="NameMom")
            this.setState({candidateMotherName:value});
        else if(name==="ocupationMom")
            this.setState({candidateMotherOccupation:value});
        else if(name==="phoneMom")
            this.setState({candidateMotherPhone:value});
        else if(name==="nameDad")
            this.setState({candidateFatherName:value});
        else if(name==="ocupationDad")
            this.setState({candidateFatherOccupation:value});
        else if(name==="phoneDad")
            this.setState({candidateFatherPhone:value});
        else if(name==="nameSchool")
            this.setState({candidateMiddleSchool:value});
        else if(name==="municipalitySchool")
            this.setState({candidateMunicipalitySchool:value});
        else if(name==="stateSchool")
            this.setState({candidateStateSchool:value});
        else if(name==="finishSchool")
            this.setState({candidateEndDate:value});
        else if(name==="secondarykey")
            this.setState({candidateSchoolKey:value});
        else if(name==="typeSchool")
            this.setState({candidateSchoolType:value});
        else if(name==="regime")
            this.setState({candidateSchoolRegime:value});
    }

    componentDidMount(){
        this.setState(this.props.personalData)
    }

    render(){
        const { index, handleNext, handleBack } = this.props;
        return(
            <Grid>
                <Row>
                   <h2>Datos Personales</h2>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PersonalData handleState={this.handleChange} state={this.state}/>
                    </Col>
                </Row>
                <Row >
                   <h2>Lugar de Nacimiento</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <BirthPlace handleState={this.handleChange} state={this.state}/>
                    </Col>
                </Row>
                <Row >
                   <h2> Domicilio Actual</h2>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ActualCity handleState={this.handleChange} state={this.state}/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Contacto</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <Contact handleState={this.handleChange} state={this.state}/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Datos de padres o tutores</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <Parents handleState={this.handleChange} state={this.state}/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Datos de la secundaria</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <SchoolData handleState={this.handleChange} state={this.state}/>  
                    </Col>
                </Row>
                <Row>
                    <div className="next">
                        <Button disabled={index === 0} onClick={handleBack}>
                            Regresar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleNext(this.state, "personalData")}>
                            Siguiente
                        </Button>
                    </div>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    personalData: state.personalData
});

export default connect(mapStateToProps, null)(PersonalForm);
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { sentRegistryCandidate } from '../Actions';
import { updatePeronsalData, updateHealth, updatePreferences, resetCandidateObject } from '../Actions';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HealthForm from '../Components/Health';
import Preferences from './Preferences';
import PersonalForm from './PersonalData';
import Economy from './Economy';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import '../Styles/InicioStyles.css';

function getSteps() {
    return ['Informacion Personal', 'Salud', 'Socioeconomico','Preferencias Escolares'];
  }

function getStepContent(stepIndex, steps, handleBack, handleNext, handleSubmit) {
  switch (stepIndex) {
    case 0:
      return <PersonalForm index={stepIndex} handleNext={handleNext} handleBack={handleBack}/>
    case 1:
      return <HealthForm index={stepIndex} handleNext={handleNext} handleBack={handleBack}/>;
    case 2:
      return <Economy index={stepIndex} handleNext={handleNext} handleBack={handleBack}/>;
    case 3:
      return <Preferences index={stepIndex} handleSubmit={handleSubmit} handleBack={handleBack}/>;
    default:
      return 'Unknown stepIndex';
  }
}

class Inicio extends Component { 

    constructor(){
        super();
        this.state={
            activeStep:0,
            personalData: {},
            health: {},
            economy: {},
            preferences: {},
            open: false
        }
        this.handleNext=this.handleNext.bind(this);
        this.handleBack=this.handleBack.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleNext = (state, obj) => {
        const { activeStep } = this.state;
        if(obj==="personalData"){
          if(state.candidateName!=='' && state.candidateLastNameFather!=='' && state.candidateLastNameMother!==''
            && state.candidateBirthDate!=='' && state.candidateGenre!=='' && state.candidateAge!=='' && state.candidateCurrentZipCode!==''
            && state.candidateCurrentMunicipality!=='' && state.candidateCurrentLocality!=='' && state.candidateCurrentState!==''
            && state.candidateCellPhone!=='' && state.candidateEmail!=='' && state.candidateFatherName!==''
            && state.candidateMotherName!=='' && state.candidateMotherPhone!=='' && state.candidateFatherPhone!==''
            && state.candidateSchoolKey!=='')
            {
              this.props.updatePersonalData(state);
              this.setState({activeStep: activeStep + 1, personalData: state});
            }
            else
              this.setState({open:true});
        }
        else if(obj==="health"){
          if(state.insuranceNumber!=='' && state.healthCandidateHeight!=='' &&  state.healthCandidateWeight!==''
            && state.healthCandidateBloodType!=='' && state.healthIllnessFlag!=='' && state.healthDisability!==''
            && state.healthGlassesFlag!=='' && state.healthSmokingFlag!=='' && state.healthLaterality!==''){
              this.setState({activeStep: activeStep + 1, health: state});
              this.props.updateHealth(state);
            }
            else{
              this.setState({open:true});
            }
        }
        else if(obj==="economy")
          this.setState({activeStep: activeStep + 1, economy: state});
      };
    
    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };
  
    handleReset = () => {
      //this.props.resetCandidateObject({});
      this.setState({activeStep: 0});
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    handleSubmit(state){
      const { personalData, health, economy } = this.state;

      if(state.preferencesScholarshipFlag!=='' && state.preferencesShiftWished!=='' && state.preferencesWayToKnow!==''){
        let candidate = {
          candidateName: personalData.candidateName,
          candidateLastNameFather: personalData.candidateLastNameFather,
          candidateLastNameMother: personalData.candidateLastNameMother,
          candidateBirthDate: personalData.candidateBirthDate,
          candidateCivilStatus: personalData.candidateCivilStatus,
          candidateGenre: personalData.candidateGenre,
          candidateAge: personalData.candidateAge,
          candidateMunicipalityBorn: personalData.candidateMunicipalityBorn,
          candidateLocalityBorn: personalData.candidateLocalityBorn,
          candidateStateBorn: personalData.candidateStateBorn,
          candidateCurrentStreet: personalData.candidateCurrentStreet,
          candidateCurrentHouseNumber: personalData.candidateCurrentHouseNumber,
          candidateNeighborhood: personalData.candidateNeighborhood,
          candidateCurrentZipCode: personalData.candidateCurrentZipCode,
          candidateCurrentMunicipality: personalData.candidateCurrentMunicipality,
          candidateCurrentLocality: personalData.candidateCurrentLocality,
          candidateCurrentState: personalData.candidateCurrentState,
          candidateCellPhone: personalData.candidateCellPhone,
          candidatePersonalPhone: personalData.candidatePersonalPhone,
          candidateEmail: personalData.candidateEmail,
          candidateFatherName: personalData.candidateFatherName,
          candidateMotherName: personalData.candidateMotherName,
          candidateMotherOccupation: personalData.candidateMotherOccupation,
          candidateFatherOccupation: personalData.candidateFatherOccupation,
          candidateMotherPhone: personalData.candidateMotherPhone,
          candidateFatherPhone: personalData.candidateFatherPhone,
          candidateMiddleSchool: personalData.candidateMiddleSchool,
          candidateMunicipalitySchool: personalData.candidateMunicipalitySchool,
          candidateStateSchool: personalData.candidateStateSchool,
          candidateSchoolType: personalData.candidateSchoolType,
          candidateSchoolRegime: personalData.candidateSchoolRegime,
          candidateSchoolKey: personalData.candidateSchoolKey,
          candidateEndDate: personalData.candidateEndDate,
          candidateScore: 0,
          candidateLastupdate: new Date(),
          
          health: health,
          preference: state,
          economy: {salaryMonth:23000},
          specialty: {specialityKeycode:1, specialityName:"None"}
        };

        this.props.updatePreferences(state);
        this.props.sendRegitry(candidate);
      }
      else
        this.setState({open:true});
    }

    componentWillReceiveProps(props){
      const { activeStep } = this.state;
      if(props.registrySuccess==="successful")
        this.setState({activeStep: activeStep + 1});
    }
    
    render(){
        const steps = getSteps();
        const { activeStep, open } = this.state;
        return(
          <Grid className="boxShadow">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {this.state.activeStep === steps.length ? (
                <Row>
                  <Col xs={12}>
                    <Row center="xs">
                      <Col xs={12}>
                        <Typography >Haz completado el registro exitosamente</Typography>
                      </Col>
                      <Col xs={12} className="newCandidate">
                        <Button variant="outlined" color="primary" onClick={this.handleReset}>Nuevo Registro</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <div>
                    {
                      getStepContent(activeStep, steps, this.handleBack, this.handleNext, this.handleSubmit)
                    }
                </div>
              )}
            </div>
            <div>
              <Snackbar
                anchorOrigin={{ vertical:'top', horizontal: 'center'}}
                open={open}
                onClose={this.handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Complete todos los campos vacios</span>}
              />
            </div>
          </Grid>
        );        
    }
}

const mapDispatchToProps = dispatch => ({
  sendRegitry: value => dispatch(sentRegistryCandidate(value)),
  updatePersonalData: value => dispatch(updatePeronsalData(value)),
  updateHealth: value => dispatch(updateHealth(value)),
  updatePreferences: value => dispatch(updatePreferences(value)),
  resetCandidateObject: value => dispatch(resetCandidateObject(value))
});

const mapStateToProps = state => ({
  registrySuccess: state.registrySuccess
});

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
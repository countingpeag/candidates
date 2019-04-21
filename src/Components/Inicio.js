import React, { Component } from 'react';
import {Grid} from 'react-flexbox-grid';
import '../Styles/InicioStyles.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HealthForm from '../Components/Health';
import Preferences from './Preferences';
import PersonalForm from './PersonalData';
import ActualCity from './PersonalData/ActualCity';

function getSteps() {
    return ['Informacion Personal', 'Salud', 'Socioeconomico','Preferencias Escolares'];
  }
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalForm/>
      case 1:
        return <HealthForm/>;
      case 2:
        return 'Tercer Componente';
      case 3:
        return <Preferences />;
      default:
        return 'Unknown stepIndex';
    }
  }

class Inicio extends Component { 

    constructor(){
        super();
        this.state={
            activeStep:0
        }
        this.handleNext=this.handleNext.bind(this);
        this.handleBack=this.handleBack.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }
    handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
    render(){
        const steps = getSteps();
        const { activeStep } = this.state;
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
                <div>
                  <Typography >Haz completado el registro</Typography>
                  <Button onClick={this.handleReset}>Nuevo Registro</Button>
                
                </div>
              ) : (
                <div >
                  <Typography>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div className="next">
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Regresar
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                      {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente  '}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        );        
    }
}
export default Inicio;
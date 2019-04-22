import React,{Component} from 'react';
import { Grid } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';
import '../../Styles/PersonalFormStyles.css';
import PersonalData from './PersonalData';
import BirthPlace from './BirthPlace';
import ActualCity from './ActualCity';
import Contact from './Contact';
import Parents from './Parents';
import SchoolData from './SchoolData';

class PersonalForm extends Component{

    render(){
        return(
            <Grid >
                <Row>
                   <h2>Datos Personales</h2>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PersonalData/>
                    </Col>
                </Row>
                <Row >
                   <h2>Lugar de Nacimiento</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <BirthPlace/>
                    </Col>
                </Row>
                <Row >
                   <h2> Domicilio Actual</h2>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ActualCity/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Contacto</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <Contact/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Datos de padres o tutores</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <Parents/>  
                    </Col>
                </Row>
                <Row >
                   <h2>Datos de la secundaria</h2> 
                </Row>
                <Row>
                    <Col xs={12}>
                        <SchoolData/>  
                    </Col>
                </Row>
            </Grid>
        );
         
    }
}
export default PersonalForm;
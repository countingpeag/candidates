import React,{Component} from 'react';
import { Grid } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';
import HealthFormInfo from './HealthFormInfo';
import HealthFormSelect from './HealthFormSelect';

class HealthForm extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col>
                        <HealthFormInfo/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HealthFormSelect/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default HealthForm;
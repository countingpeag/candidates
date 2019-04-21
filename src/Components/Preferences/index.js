import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PreferencesInfo from './PreferencesInfo';
import PreferencesTable from './PreferencesTable';

class Preferences extends Component{

    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                      <PreferencesInfo/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PreferencesTable/>
                    </Col>    
                </Row>
            </Grid>
        );
    }
}

export default Preferences;
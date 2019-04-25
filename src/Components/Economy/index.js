import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';

class Economy extends Component{
    render(){
        const { index, handleNext, handleBack } = this.props;
        return(
            <Grid>
                <Row>
                    <Col>
                        <h2>Tercer Componente</h2>
                    </Col>
                </Row>
                <Row>
                    <div className="next">
                        <Button disabled={index === 0} onClick={handleBack}>
                            Regresar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleNext({}, "economy")}>
                            Siguiente
                        </Button>
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default Economy;
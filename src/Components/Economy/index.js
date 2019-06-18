import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './../../Styles/PreferencesStyle.css';



class Economy extends Component{

    constructor(){
        super();
        this.state = {
            income:'',
            feeding:'',
            rent:'',
            light:'',
            gas:'',
            tuition:'',
            bills:'',
            transport:'',
            clothing:'',
            othersOut:'',
            totalOut:'',
            father:'',
            mother:'',
            siblings:'',
            othersIn:'',
            totalIn:'',
            fixedIncome:'',
            comments:'',
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event){
        const {name, value} = event.target;
        if(name==="income" && this.numberValidation(value)!==false)
            this.setState({income:value});
        else if(name==="feeding" && this.numberValidation(value)!==false)
            this.setState({feeding:value});
        else if(name==="rent" && this.numberValidation(value)!==false)
            this.setState({rent:value});
        else if(name==="light" && this.numberValidation(value)!==false)
            this.setState({light:value});
        else if(name==="gas" && this.numberValidation(value)!==false)
            this.setState({gas:value});
        else if(name==="tuition" && this.numberValidation(value)!==false)
            this.setState({tuition:value});
        else if(name==="bills" && this.numberValidation(value)!==false)
            this.setState({bills:value});
        else if(name==="transport" && this.numberValidation(value)!==false)
            this.setState({transport:value});
        else if(name==="clothing" && this.numberValidation(value)!==false)
            this.setState({clothing:value});
        else if(name==="othersOut" && this.numberValidation(value)!==false)
            this.setState({othersOut:value});
        else if(name==="totalOut" && this.numberValidation(value)!==false)
            this.setState({totalOut:value});
        else if(name==="father" && this.numberValidation(value)!==false)
            this.setState({father:value});
        else if(name==="mother" && this.numberValidation(value)!==false)
            this.setState({mother:value});
        else if(name==="siblings" && this.numberValidation(value)!==false)
            this.setState({siblings:value});
        else if(name==="othersIn" && this.numberValidation(value)!==false)
            this.setState({othersIn:value});
        else if(name==="totalIn" && this.numberValidation(value)!==false)
            this.setState({totalIn:value});
        else if(name==="fixedIncome")
            this.setState({fixedIncome:value});
        else if(name==="comments")
            this.setState({comments:value});        
    }

    numberValidation(value){
        if(!isNaN(value)){
            let number = Number(value);
            return number;
        }
        else{
            alert("Ingresa solo numeros");
            return false;
        }
    }

    componentDidMount(){
        this.setState(this.props.economy);
    }

    render(){
        const { index, handleNext, handleBack } = this.props;
        const { income, feeding, rent, light, gas, tuition, bills, transport, clothing, 
            othersOut, totalOut, father, mother, siblings, othersIn, totalIn, comments, fixedIncome} = this.state;
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col>
                                <h3>Tomando en cuenta las personas que viven en tu casa, y tu sueldo si trabajas, el sueldo de tu papa y de tu mama, ¿Que ingreso  mensual tienen?</h3>
                                <TextField
                                    id="income"
                                    label="Ingreso mensual"
                                    name="income"
                                    autoComplete=""
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    value={income}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col md={6}>
                                <h2>Egresos Mensuales</h2>
                                <Row center="md">
                                    <Col md={6}>
                                        <TextField
                                            id="feeding"
                                            label="Alimentacion"
                                            name="feeding"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={feeding}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="rent"
                                            label="Renta"
                                            name="rent"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={rent}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="light"
                                            label="Luz"
                                            name="light"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={light}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="gas"
                                            label="Gas"
                                            name="gas"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={gas}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="tuition"
                                            label="Colegiaturas"
                                            name="tuition"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={tuition}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="bills"
                                            label="Abonos"
                                            name="bills"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={bills}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="transport"
                                            label="Transporte"
                                            name="transport"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={transport}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="clothing"
                                            label="Vestido"
                                            name="clothing"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={clothing}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="othersOut"
                                            label="Otros"
                                            name="othersOut"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={othersOut}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="totalOut"
                                            label="Total"
                                            name="totalOut"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={totalOut}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <h2>Ingresos Mensuales</h2>
                                <Row center="md">
                                    <Col md={6}>
                                        <TextField
                                            id="father"
                                            label="Padre"
                                            name="father"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={father}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="mother"
                                            label="Madre"
                                            name="mother"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={mother}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="siblings"
                                            label="Hermanos"
                                            name="siblings"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={siblings}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="othersIn"
                                            label="Otros"
                                            name="othersIn"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={othersIn}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="totalIn"
                                            label="Total"
                                            name="totalIn"
                                            autoComplete=""
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChange}
                                            value={totalIn}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col md={6}>
                                <FormControl className="comments">
                                    <FormLabel component="legend"><h3>¿Sus ingresos son fijos?</h3></FormLabel>
                                    <RadioGroup
                                        aria-label="fixedIncome"
                                        name="fixedIncome"
                                        value={fixedIncome}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value="si" control={<Radio color="primary"/>} label="Si" />
                                        <FormControlLabel value="no" control={<Radio color="primary"/>} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Col>
                            <Col md={6}>
                                <h3>Comentarios</h3>
                                <TextField
                                    id="comments"
                                    label="Comentarios"
                                    name="comments"
                                    placeholder="Comentarios"
                                    multiline
                                    value={comments}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    className="comments"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <div className="next">
                                <Button disabled={index === 0} onClick={handleBack}>
                                    Regresar
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => handleNext(this.state, "economy")}>
                                    Siguiente
                                </Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    economy: state.economy
});

export default connect(mapStateToProps, null)(Economy);
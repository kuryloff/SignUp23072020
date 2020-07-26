import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100ch',
    },
    input: {
        margin: theme.spacing(1),
    },
    email: {
        margin: theme.spacing(1),
        width: '100ch',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        justifyContent: 'space-between',
        boxShadow: "0px 5px 10px #555"
    },
    header: {
        width: "100%",
        textAlign: 'center',
        fontFamily: "Roboto",
    },
    button: {
        width: '100%',
        margin: theme.spacing(1),

    },
    error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",

    }
}));

export default function SignUpContainer() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        firstNameText: "",
        lastNameText: "",
        emailText: "",
        passwordText: "",
        confirmPasswordText: "",
        showPassword: false,
        showConfirmPassword: false,
    });

    const clearFormFields = () => {
        setValues({
            ...values,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    const validatorSetState = (fieldName, value = '', errorField, error = false, helpTextField, helpText = '') => {
        setValues({
            ...values,
            [fieldName]: value,
            [errorField]: error,
            [helpTextField]: helpText
        })
    }

    const fieldValidator = (fieldName, value = '') => {
        switch (fieldName) {
            case 'firstName':
                if (value === "") {
                    validatorSetState('firstName', value, 'firstNameError', true, 'firstNameText', 'Field is empty');
                } else if (value.length > 100) {
                    validatorSetState('firstName', value, 'firstNameError', true, 'firstNameText', 'Maximum 100 characters allowed');
                } else {
                    validatorSetState('firstName', value, 'firstNameError', false, 'firstNameText', '');
                }
                break;

            case 'lastName':
                if (value === "") {
                    validatorSetState('lastName', value, 'lastNameError', true, 'lastNameText', 'Field is empty');
                } else if (value.length > 100) {
                    validatorSetState('lastName', value, 'lastNameError', true, 'lastNameText', 'Maximum 100 characters allowed');
                } else {
                    validatorSetState('lastName', value, 'lastNameError', false, 'lastNameText', '');
                }
                break;

            case 'email':
                if (!value.match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                )) {
                    validatorSetState('email', value, 'emailError', true, 'emailText', 'Enter valid email');
                } else {
                    validatorSetState('email', value, 'emailError', false, 'emailText', '');
                }
                break;

            case 'password':
                if (!value.match(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/)) {
                    validatorSetState('password', value, 'passwordError', true, 'passwordText', `Password must include 8-64 characters: lowercase, uppercase, digit, symbol`);
                } else {
                    validatorSetState('password', value, 'passwordError', false, 'passwordText', ``);
                }
                break;

            case 'confirmPassword':
                if (values.password !== values.confirmPassword || value === "") {
                    validatorSetState('confirmPassword', value, 'confirmPasswordError', true, 'confirmPasswordText', `Confirmed password doesn't match the password`);
                } else {
                    validatorSetState('confirmPassword', value, 'confirmPasswordError', false, 'confirmPasswordText', "");
                }
                break;
            default:
        }

    }

    const formValid = () => {
        let valid = false;
        !values.firstNameError && !values.lastNameError && !values.emailError && !values.passwordError &&
        !values.confirmPasswordError && (valid = true);

        !values.firstName && !values.lastName && !values.email && !values.password && !values.confirmPassword && (valid = false);
        return valid;
    }


    const handleSubmit = () => {
        if (formValid()) {
            console.log(`--SUBMITTING--
                First Name: ${values.firstName}
                Last Name: ${values.lastName}
                Email: ${values.email}
                Password: ${values.password}
                Confirmed Password ${values.confirmPassword}`)
            clearFormFields();
        } else {
            console.error("FORM INVALID");
        }
    }
    const handleChange = (prop) => (event) => {
        setValues({[prop]: event.target.value});
        fieldValidator(prop, event.target.value);
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});

    };

    const handleClickShowConfirmPassword = () => {
        setValues({...values, showConfirmPassword: !values.showConfirmPassword});
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h1 className={classes.header}>Please Sign Up</h1>
                <TextField className={classes.input}
                           id="outlined-basic-firstName"
                           label="First Name"
                           variant="outlined"
                           type="text"
                           placeholder="John"
                           value={values.firstName}
                           error={values.firstNameError}
                           helperText={values.firstNameText}
                           onChange={handleChange('firstName')}
                           onKeyUp={handleChange('firstName')}
                />
                <TextField className={classes.input}
                           id="outlined-basic-lastName"
                           label="Last Name"
                           variant="outlined"
                           type="text"
                           placeholder="Johnson"
                           value={values.lastName}
                           error={values.lastNameError}
                           helperText={values.lastNameText}
                           onChange={handleChange('lastName')}
                           onKeyUp={handleChange('lastName')}
                />

                <TextField className={classes.email}
                           id="outlined-basic-email"
                           label="Email"
                           variant="outlined"
                           type="email"
                           placeholder={`example@gmail.com`}
                           autoComplete="user-email"
                           value={values.email}
                           error={values.emailError}
                           helperText={values.emailText}
                           onChange={handleChange('email')}
                           onKeyUp={handleChange('email')}
                />

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        error={values.passwordError}
                        onChange={handleChange('password')}
                        onKeyUp={handleChange('password')}
                        autoComplete="new-password"
                        placeholder='8-64, at least one: lowercase, uppercase, digit, symbol'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <p className={classes.error}
                       id="outlined-basic-helper-text">{values.passwordText}</p>
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirmPassword">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-confirmPassword"
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        error={values.confirmPasswordError}
                        onChange={handleChange('confirmPassword')}
                        onKeyUp={handleChange('confirmPassword')}
                        placeholder="enter your password again"
                        autoComplete="new-password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={140}
                    />
                    <p className={classes.error} id="outlined-basic-helper-text">{values.confirmPasswordText}</p>
                </FormControl>


                <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                >
                    sign up
                </Button>
                <Button className={classes.button}
                        variant="outlined"
                        color="primary"
                        onClick={clearFormFields}
                >
                    Clear form
                </Button>
            </form>
        </div>
    );
}

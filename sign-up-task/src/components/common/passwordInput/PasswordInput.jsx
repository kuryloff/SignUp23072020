import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(1),
    },
    textField: {
        width: '100ch',
        marginTop: theme.spacing(1),
    },
        error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",

    }
}));



export const PasswordInput = (props) => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        showPassword: false,
    });



    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                    <OutlinedInput
                        id={`outlined-adornment-${props.label}`}
                        type={values.showPassword ? 'text' : 'password'}
                        error={props.error}
                        value={props.value || ""}
                        onChange={props.handleChange}
                        autoComplete="new-password"
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
                        labelWidth= {props.labelWidth}
                    />
                    <p className={classes.error}
                       id="outlined-basic-helper-text">{props.helperText}</p>
                </FormControl>
    );
}

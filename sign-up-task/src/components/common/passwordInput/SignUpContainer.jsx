import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useStyles} from "../useStyles/loginStyles";


export const PasswordInput = (props) => {
    // debugger;
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const classes = useStyles();

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

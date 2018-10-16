import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {grey500, white} from '@material-ui/core/colors';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Help from '@material-ui/icons/Help';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import ThemeDefault from '../theme-default';

const LoginPage = () => {

  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  };

  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>

            <form>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
              />

              <div>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />

                <Link to="/">
                  <Button variant="contained" label="Login"
                                primary={true}
                                style={styles.loginBtn}/>
                </Link>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <Button
              label="Register"
              href="/"
              style={styles.flatButton}
              icon={<PersonAdd />}
            />

            <Button
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />
          </div>

          <div style={styles.buttonsDiv}>
            <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
              <i className="fa fa-facebook fa-lg"/>
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </Link>
            <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
              <i className="fa fa-google-plus fa-lg"/>
              <span style={styles.btnSpan}>Log in with Google</span>
            </Link>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default LoginPage;

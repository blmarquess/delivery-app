import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from '@material-ui/core';

const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={ { padding: 30 } }>
      <Paper>
        <Grid
          container
          spacing={ 3 }
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={ 12 }>
            <TextField label="Username" />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField label="Password" type="password" />
          </Grid>
          <Grid item xs={ 12 }>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ checked }
                  onChange={ handleChange }
                  label="Keep me logged in"
                  inputProps={ { 'aria-label': 'primary checkbox' } }
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Button
              fullWidth
            >
              {' '}
              Login
              {' '}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;

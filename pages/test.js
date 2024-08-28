import React from 'react';
import { TextField, Box } from '@mui/material';

function FormComponent() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <TextField
        label="------Razón social------"
        placeholder="Nombre legal de la empresa"
        variant="outlined"
        fullWidth
        sx={{
          width: '300px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#002855',
            },
            '&:hover fieldset': {
              borderColor: '#002855',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#002855',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#002855',
          },
        }}
      />
    </Box>
  );
}

export default FormComponent;

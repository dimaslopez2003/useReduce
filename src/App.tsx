import React from 'react';
import Counter from './componentes/counter';
import { Container, CssBaseline, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h3" component="h1" gutterBottom>
        Contador con Reducer
      </Typography>
      <Counter />
    </Container>
  );
};

export default App;

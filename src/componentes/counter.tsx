import React, { useReducer } from 'react';
import { Button, Typography, Box } from '@mui/material';

const initialState = { count: 0 };

function reducer (state: { count: number }, action: { type: string }){
    
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
        case 'reset':
        return initialState;
      throw new Error();
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom>
        Count: {state.count}
      </Typography>
      <Box>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'increment' })}>
          +
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'decrement' })}>
          -
        </Button>
        <Button variant="contained" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;

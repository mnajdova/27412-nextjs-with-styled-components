import * as React from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

const StyledButton = styled(Button)`
  border: 1px solid transparent;
`

const MuiStyledButton = muiStyled(Button)`
  border: 1px solid transparent;
`

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <StyledButton variant="outlined">Styled Button</StyledButton>
        <MuiStyledButton variant="outlined">Mui Styled Button</MuiStyledButton>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

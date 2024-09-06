/** @jsxImportSource @emotion/react */
import { Box, Button } from '@chakra-ui/react';
import { boxStyles, buttonStyles } from '../styles';

const MyComponent = () => {
  return (
    <Box css={boxStyles}>
      <p>This box is styled using Emotion's css function!</p>
      <Button css={buttonStyles}>Styled Button</Button>
    </Box>
  );
};

export default MyComponent;
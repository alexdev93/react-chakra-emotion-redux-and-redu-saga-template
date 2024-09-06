import { css } from '@emotion/react';

export const boxStyles = css({
  backgroundColor: 'teal',
  padding: '20px',
  borderRadius: '10px',
  color: 'white',
  fontSize: '16px',
});

export const buttonStyles = css({
  backgroundColor: 'purple',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '5px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'darkpurple',
  },
});

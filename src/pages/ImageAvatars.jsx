import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/assets/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/assets/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/assets/images/avatar/3.jpg" />
    </Stack>
  );
}
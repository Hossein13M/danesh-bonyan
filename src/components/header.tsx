import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { CssBaseline, Fab, IconButton, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import GitHubIcon from '@mui/icons-material/GitHub';

function ScrollTop(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Zoom>
  );
}

export default function HeaderAppBar(props: any) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className={'py-2 bg-sky-900 text-center'}>
          <IconButton aria-label="delete" size="large" className={'text-bold text-2xl text-white'}>
            <GitHubIcon fontSize="inherit" className={'text-4xl'} />
          </IconButton>

          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            فهرست شرکت‌های دانش‌بنیان
          </Typography>

          <IconButton aria-label="delete" size="large" className={'text-bold text-2xl text-white'}>
            <Brightness4Icon fontSize="inherit" className={'text-4xl'} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

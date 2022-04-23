import * as React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function Navbar() {
  let dastan: boolean = true;

  function toggleTheme(): void {
    dastan = !dastan;
  }

  return (
    <>
      <div className="flex justify-between px-20 items-center backdrop-blur-sm  fixed w-full py-2 ">
        <div>
          <IconButton aria-label="delete" size="large" className={'text-bold text-2xl text-white'} onClick={toggleTheme}>
            <Brightness4Icon fontSize="inherit" className={'text-4xl'} />
          </IconButton>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="text-2xl dark:text-white mx-2"> فهرست شرکت‌های دانش‌بنیان</h1>
          <Image src={dastan ? '/assets/logo.png' : '/assets/green-logo.png'} alt="Picture of the author" width={50} height={50} />
        </div>
      </div>
    </>
  );
}

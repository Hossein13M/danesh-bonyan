import { useContext } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MyThemeContext from '../store/myThemeContext';

export default function Navbar() {
  const themeCtx = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <>
      <div className="flex justify-between bg-red-500 dark:bg-sky-600 px-20 items-center backdrop-blur-sm fixed w-full py-2">
        <div>
          <IconButton size="large" className={'text-bold text-2xl text-white'} onClick={toggleThemeHandler}>
            <Brightness4Icon fontSize="inherit" className={'text-4xl'} />
          </IconButton>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="text-2xl dark:text-white mx-2"> فهرست شرکت‌های دانش‌بنیان</h1>
          <Image src="/assets/logo.png" alt="Logo" width={30} height={30} />
        </div>
      </div>
    </>
  );
}

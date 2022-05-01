import { useContext } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MyThemeContext from '../store/myThemeContext';

export default function Header() {
  const themeCtx = useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <>
      <div className="flex justify-between px-20 items-center backdrop-blur-lg fixed w-full py-2">
        <div>
          <IconButton size="large" className={'text-bold text-2xl text-white'} onClick={toggleThemeHandler}>
            <Brightness4Icon fontSize="inherit" className={'text-4xl dark:text-white text-black'} />
          </IconButton>
        </div>

        <div className="flex items-center justify-center">
          <Button className="text-black dark:text-white" size="large">
            درباره
          </Button>

          <Button disableRipple disableFocusRipple className="text-black dark:text-white" size="large">
            گیت‌هاب
          </Button>

          <h1 className="text-xl font-black dark:text-white mx-2"> فهرست شرکت‌های دانش‌بنیان</h1>
          <Image src="/assets/logo.png" alt="Logo" width={30} height={30} />
        </div>
      </div>
    </>
  );
}

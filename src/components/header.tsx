import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MyThemeContext from '../store/myThemeContext';

export default function Header() {
  const themeCtx = useContext(MyThemeContext);
  const router = useRouter();

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <>
      <div className="flex justify-between md:px-20 items-center backdrop-blur-xl w-full py-2">
        <div>
          <IconButton size="large" className={'hidden md:flex text-bold text-2xl text-white'} onClick={toggleThemeHandler}>
            <Brightness4Icon fontSize="inherit" className={'text-4xl dark:text-white text-black'} />
          </IconButton>
        </div>

        <div className="flex items-center justify-center w-full md:w-max">
          <Button className="hidden md:flex text-black dark:text-white" size="large" onClick={() => router.push('/about')}>
            درباره
          </Button>

          <a href="https://github.com/hossein13m/danesh-bonyan" target="blank">
            <Button disableRipple disableFocusRipple className="hidden md:flex  text-black dark:text-white" size="large">
              گیت‌هاب
            </Button>
          </a>

          <button className="flex" onClick={() => router.push('/')}>
            <h1 className="sm:text-xl font-black dark:text-white mx-2"> فهرست شرکت‌های دانش‌بنیان</h1>
            <Image src="/assets/logo.png" alt="Logo" width={30} height={30} className="hidden md:flex dark:whiten-filter" />
          </button>
        </div>
      </div>
    </>
  );
}

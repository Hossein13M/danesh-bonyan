import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MyThemeContext from '../store/myThemeContext';

export default function Sidebar(props: any) {
  const themeCtx = useContext(MyThemeContext);
  const router = useRouter();

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  return (
    <Menu
      {...props}
      className="flex flex-col min-h-screen items-stretch bg-slate-500 dark:bg-stone-800"
      customBurgerIcon={<Image src="/assets/menu.png" alt="hamburger menu image" width={30} height={30} />}
    >
      <Button
        className="mb-4 flex w-56 bg-sky-700 text-yellow-500 dark:text-sky-700 font-black dark:bg-yellow-500"
        variant="outlined"
        startIcon={<InfoOutlinedIcon />}
        size="large"
        onClick={() => router.push('/about')}
      >
        درباره
      </Button>

      <a href="https://github.com/hossein13m/danesh-bonyan" target="blank">
        <Button
          className="mb-4 flex w-56 bg-sky-700 text-yellow-500 dark:text-sky-700 font-black dark:bg-yellow-500"
          variant="outlined"
          startIcon={<GitHubIcon />}
          disableRipple
          disableFocusRipple
          size="large"
        >
          گیت‌هاب
        </Button>
      </a>

      <Button
        className="mb-4 flex w-56 bg-sky-700 text-yellow-500 dark:text-sky-700 font-black dark:bg-yellow-500"
        variant="outlined"
        startIcon={<Brightness4Icon />}
        onClick={toggleThemeHandler}
      >
        تغییر تم
      </Button>
    </Menu>
  );
}

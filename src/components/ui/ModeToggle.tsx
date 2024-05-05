'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { Button } from './button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleModeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Button variant={'outline'} onClick={handleModeToggle}>
      {theme === 'dark' ? (
        <CiLight className=" text-yellow-500 text-2xl rotate-0 scale-100 transition-all dark:-rotate-90" />
      ) : (
        <MdDarkMode className="dark:text-zinc-600 text-2xl rotate-0 transition-all dark:rotate-90 dark:scale-100" />
      )}
    </Button>
  );
}

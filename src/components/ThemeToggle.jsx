import { Moon, Sun } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(AuthContext)


    return (
        <button
            onClick={toggleTheme}
            className='text-xl px-4 py-2 rounded transition-colors duration-300 bg-gray-200 dark:bg-gray-700'>
            {theme === 'dark' ? <Sun className='h-5 w-5 text-yellow-400' /> : <Moon className='h-5 w-5 text-blue-900' />}
        </button>
    )
};

export default ThemeToggle;
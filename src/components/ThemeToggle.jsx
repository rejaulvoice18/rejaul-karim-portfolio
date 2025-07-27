import { Moon, Sun } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(AuthContext)


    return (
        <button
            onClick={toggleTheme}
            className='text-xl cursor-pointer p-1.5 rounded-md transition-colors duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-600'>
            {theme === 'dark' ? <Sun className='h-3 w-3 text-yellow-400' /> : <Moon className='h-3 w-3 text-blue-900' />}
        </button>
    )
};

export default ThemeToggle;
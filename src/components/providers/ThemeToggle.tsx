import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-brand-gray hover:bg-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="text-white" size={20} />
      ) : (
        <Moon className="text-white" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
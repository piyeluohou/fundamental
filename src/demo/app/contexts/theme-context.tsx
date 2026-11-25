import { createContext, useContext, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 1. 创建 Context
const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. 创建 Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

// 3. 创建自定义 Hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme 必须在 ThemeProvider 内部使用');
  }

  return context;
}

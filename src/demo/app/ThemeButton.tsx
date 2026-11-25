import { useTheme } from './contexts/theme-context';

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>当前主题：{theme}，点击切换</button>;
}

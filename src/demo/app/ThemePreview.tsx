import { useTheme } from './contexts/theme-context';

export function ThemePreview() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: 20,
        background: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      当前页面主题：{theme}
    </div>
  );
}

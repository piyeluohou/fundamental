function Header() {
  return (
    <header>
      <ThemeButton />
    </header>
  );
}

function Content() {
  return (
    <main>
      <ThemePreview />
    </main>
  );
}

import { ThemePreview } from './ThemePreview';
import { ThemeButton } from './ThemeButton';
import { ThemeProvider } from './contexts/theme-context';

export default function ContextMemo() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

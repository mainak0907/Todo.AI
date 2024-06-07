import './globals.css';
import Navbar from './components/Navbar';
import { Providers } from './providers';

export const metadata = {
  title: 'Todo.AI',
  description: 'Best AI Powered ToDo List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col ">
        <Providers>
          <Navbar/>
          <main className="flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

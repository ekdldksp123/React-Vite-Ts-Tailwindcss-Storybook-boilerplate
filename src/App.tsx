import { Header } from './components/layouts/Header';
import viteLogo from '/vite.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <main className='w-100 h-100'>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </QueryClientProvider>
    </main>
  );
};

export default App;

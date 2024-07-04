import { Header } from './components/layouts/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <main className='w-100 h-100'>
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </main>
  );
};

export default App;

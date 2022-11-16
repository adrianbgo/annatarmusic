import React, { useMemo } from 'react';
import { useCounter } from '@/hooks/useCounter';
import Hero from '@/components/blocks/Hero';

const Home = () => {
  const { count, increment } = useCounter();

  const env: 'development' | 'production' = useMemo(() => {
    return import.meta.env.VITE_TEST || process.env.NODE_ENV === 'test' ? 'development' : 'production';
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

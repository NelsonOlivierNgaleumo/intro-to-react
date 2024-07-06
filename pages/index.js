import Counter from '../components/Counter1';

function Home() {
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }];

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}

export default Home;

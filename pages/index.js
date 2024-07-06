import Counter from '../components/Counter1';

function Home() {
  const counters = [{ title: 'Counter Nelson' }, { title: 'Counter Olivier' }, { title: 'Counter Nelco' }];

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}

export default Home;

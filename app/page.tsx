import Aside from './components/Aside';
import Popular from './components/Popular';
import Trending from './components/Trending';

export default function Home() {
  return (
    <main>
      <Popular />
      <Aside />
      <Trending />
    </main>
  );
}

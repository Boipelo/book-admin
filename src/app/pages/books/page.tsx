import Bookshelf from '../../../../components/bookshelf/bookshelf';
import Navbar from '../../../../components/header/navbar';
import Footer from '../../../../components/footer/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Bookshelf/>
      <Footer />
    </div>
  );
}
import Navbar from '../../components/header/navbar';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import './style.css'

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="heroImage">
        <div className="heroText">
          <h1 style={{ fontSize: '50px' }}>FE Task</h1>
          <p>Book Database Administrator</p>
          <Link href='/pages/books' className='button'>View All Books</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col  items-stretch min-h-screen bg-slate-50 dark:bg-stone-800" style={{ height: '50px' }}>
      <header className="flex-shrink-0">
        <SideBar />
        <Header />
      </header>
      <main className="flex-grow text-black dark:text-zinc-50 py-4 overflow-y-scroll" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex justify-center pt-5">{children}</div>
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}

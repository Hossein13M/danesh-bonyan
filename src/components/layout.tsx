import Header from './header';
import Footer from './footer';

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen items-stretch bg-stone-100 dark:bg-stone-800">
      <Header />
      <div className="flex-grow text-black dark:text-zinc-50 ">
        <div className="flex justify-center pt-5">{children}</div>
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

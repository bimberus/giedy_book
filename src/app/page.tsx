import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <header className="absolute top-0 left-0 right-0 z-10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold text-[var(--accent-color)]">Mazowsze</h1>
          <nav>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#about">O książce</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#author">Autor</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#gallery">Galeria</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPL4ExAvHtUL4_cdte0qZgJcGcCv6WmxaJNCC06OWT3JwMT-p8hXoEB_u42K2eh7ifhNlCjXWytIxtf6-w0poER4aR6uoSEoE_Yp8b01YUrwLvdf1ROI9bk_FTb-ZQF3R0hhoZNKMns4uIftwYTDfxXPdKnX2oS1Sv8FktJ5D7EkqKboOfCKJ984VJjpAbsG0YJxWctYxNI7DX6BBi-pqvBlhT8ztFyCSW4ew9Y21F7lreIfkoT-X7_FfuY-rGxen-_RzijHyReV4")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-48 text-center text-white">
            <div className="flex flex-col items-center">
              <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl shadow-lg">Serce Polski Bije w Rytmie Mazowsza</h1>
              <p className="font-body mt-6 max-w-2xl text-lg leading-8 md:text-xl lg:text-2xl">
                Odkryj barwną historię Państwowego Zespołu Ludowego Pieśni i Tańca „Mazowsze” w wyjątkowej, bogato ilustrowanej książce. Podróż przez dekady pasji, tańca i muzyki, która ukształtowała polską kulturę.
              </p>
              <button className="mt-10 flex min-w-[84px] max-w-[480px] transform cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-8 bg-[var(--primary-color)] text-white text-lg font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[var(--secondary-color)]">
                Kup teraz
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[var(--accent-color)] text-white py-6">
        <div className="mx-auto max-w-7xl text-center font-body text-sm">
          <p>© 2023 Wydawnictwo "Folklor". Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">Projekt i wykonanie: Pasjonaci Polskiego Folkloru</p>
        </div>
      </footer>
    </div>
  );
}

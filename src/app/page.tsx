import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <header className="absolute top-0 left-0 right-0 z-10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold text-[var(--accent-color)]">Mazowsze</h1>
          <nav>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#about">O książce</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#reviews">Recenzje</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#author">Autor</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#gallery">Galeria</a>
            <a className="font-body text-[var(--accent-color)] hover:text-[var(--primary-color)] transition-colors duration-300 mx-4" href="#sales">Kup teraz</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
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
              <a href="#sales" className="mt-10 flex min-w-[84px] max-w-[480px] transform cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-8 bg-[var(--primary-color)] text-white text-lg font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[var(--secondary-color)]">
                Kup teraz
              </a>
            </div>
          </div>
        </div>
        <section className="py-16 sm:py-24 bg-white/50" id="about">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image alt="Okładka książki o Mazowszu" className="rounded-lg shadow-2xl mx-auto" src="/book-cover.jpg" width={500} height={750} />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="font-display text-4xl font-bold text-[var(--accent-color)] sm:text-5xl">Poznaj duszę Mazowsza</h2>
                <p className="font-body mt-6 text-lg text-gray-700 leading-relaxed">
                  Ta książka to nie tylko kronika, to opowieść o ludziach, pasji i dziedzictwie. Przeniesie Cię za kulisy największych scen świata, do sal prób wypełnionych muzyką i do serc artystów, którzy poświęcili życie dla polskiego folkloru. Znajdziesz tu setki niepublikowanych zdjęć, fascynujące anegdoty i dogłębną analizę fenomenu, jakim jest "Mazowsze".
Nie sposób przejść obojętnie obok tej książki pełnej osobistych przemyśleń i refleksji bo jest zasobnym opracowaniem o wymiarze naukowym historii, powstawania Zespołu „Mazowsze”. Każda strona pulsuje energią prawdy i przemiany Zespołu z okresu prowadzenia przez Mirę Zimińską – Sygietyńską do Jej śmierci. 
Ta niezwykła książka wydana w twardej oprawie bogato ilustrowana idealna na prezent dla kogoś, kto chociaż w części , może jako małe dziecko miał kontakt z „Mazowszem”, gdyż autor opisuje kilka pokoleń. A także dla tych, którzy chcieliby poznać życie artystów naszego dobra Narodowej Kultury – Państwowego Zespołu Ludowego Pieśni i Tańca „Mazowsze” im. Tadeusza Sygietyńskiego, od początków jego powstania.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 folk-pattern" id="reviews">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-[var(--accent-color)] text-center sm:text-5xl mb-12">Głosy czytelników i krytyków</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--primary-color)]"></div>
                <blockquote className="font-body text-lg text-gray-700 italic border-l-4 border-[var(--secondary-color)] pl-4">
                  "Absolutnie porywająca! Ta książka to hołd dla narodowego skarbu, jakim jest Mazowsze. Lektura obowiązkowa dla każdego Polaka."
                </blockquote>
                <cite className="font-body mt-4 block text-right font-bold text-[var(--accent-color)] not-italic">- Anna Kowalska, Krytyk Literacki</cite>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--secondary-color)]"></div>
                <blockquote className="font-body text-lg text-gray-700 italic border-l-4 border-[var(--primary-color)] pl-4">
                  "Niesamowita podróż w czasie. Zdjęcia są magiczne, a historie chwytają za serce. Czuć w każdej stronie miłość autora do tematu."
                </blockquote>
                <cite className="font-body mt-4 block text-right font-bold text-[var(--accent-color)] not-italic">- Jan Nowak, Etnograf</cite>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--primary-color)]"></div>
                <blockquote className="font-body text-lg text-gray-700 italic border-l-4 border-[var(--secondary-color)] pl-4">
                  "Kupiłem tę książkę z sentymentu, a pochłonęła mnie bez reszty. To znacznie więcej niż album – to żywa, pulsująca opowieść o Polsce."
                </blockquote>
                <cite className="font-body mt-4 block text-right font-bold text-[var(--accent-color)] not-italic">- Piotr Wiśniewski, Czytelnik</cite>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 bg-white/50" id="author">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-4xl font-bold text-[var(--accent-color)] sm:text-5xl">O autorze</h2>
                <p className="font-body mt-6 text-lg text-gray-700 leading-relaxed">
                  Giedymin Wróblewski - Twórca, aktor, reżyser i choreograf działający w branży filmowej. Producent widowisk, koncertów również materiałów szkoleniowych (produkcja i reżyseria) metodycznej kasety video do bezstresowej nauki tańca pt. "Tańcz, ty też potrafisz". 
Urodził się 7 czerwca 1950 roku w Poznaniu. Rodzice Wacław Wróblewski i Leonarda z domu Nosowicz zadbali o przygotowanie artystyczne - muzyczne i taneczne. Od najmłodszych lat występujący w teatrze, a jako tancerz występował m.in. w Operze Poznańskiej.
Przez wiele lat pracował w Państwowym Zespole Ludowym Pieśni i Tańca "Mazowsze" – jako tancerz i wokalista. Po zakończeniu pracy w tym zespole pracował w Polskim Radiu. Jako choreograf prowadził artystycznie Zespół Pieśni i Tańca "SUWALSZCZYZNA" czyniąc z prostych, niewykształconych tanecznie młodych ludzi prawdziwych artystów. Po ukończeniu studiów Akademii Wychowania Fizycznego w Poznaniu na wydziale Turystyki i Rekreacji, zawodowo spełnia się jako twórca, animator i menedżer w sferze kultury, a sport jest Jego pasją. Po założeniu Agencji Artystycznej EUROPA kontynuując pracę pedagogiczną stworzył Grupę Folklorystyczną „POLANIE”, której członkowie rekrutowali się spośród uzdolnionej młodzieży Warszawy i okolicznych miejscowości, oraz wcześniejszych abiturientów z Suwałk.
Mając bezpośredni kontakt z pierwszymi Mazowszanami i przez wiele lat spełniając się artystycznie w okresie największych przemian i rozwoju pod każdym względem z „Mazowieckiego Zespołu Ludowego”, który przekształcił się w Państwowy Zespół Ludowy Pieśni i Tańca „Mazowsze”. 
Uznał, że spośród kilkunastu książek wcześniej wydanych nie opisano genezy powstania takiego ewenementu artystycznego jakim jest „Mazowsze”.
Na początku lat 20-tych XXI wieku okrutna śmierć zaczęła bezlitośnie zabierać coraz więcej ludzi związanych Zespołem „Mazowsze”. DZIEL SIĘ PAMIĘCIĄ BO ZNIKNIE !
Fakty opisane w książce są udokumentowane.
                </p>
              </div>
              <div>
                <Image alt="Portret Giedymina Wróblewskiego" className="rounded-lg shadow-2xl mx-auto" src="/author-portrait.jpg" width={500} height={600} />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24 folk-pattern" id="gallery">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-[var(--accent-color)] text-center sm:text-5xl mb-12">Galeria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Image alt="Giedymin Wróblewski w pracy" className="rounded-lg shadow-lg" src="/author-at-work.jpg" width={500} height={400} />
                <Image alt="Strona redakcyjna książki" className="rounded-lg shadow-lg" src="/editorial-page.jpg" width={500} height={400} />
            </div>
          </div>
        </section>
      <section className="py-16 sm:py-24 bg-white/50" id="sales">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-[var(--accent-color)] text-center sm:text-5xl mb-12">Kup książkę</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image alt="Okładka książki o Mazowszu" className="rounded-lg shadow-2xl mx-auto" src="/book-cover.jpg" width={500} height={750} />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-display text-3xl font-bold text-[var(--accent-color)] sm:text-4xl">Specyfikacja</h3>
                <ul className="font-body mt-6 text-lg text-gray-700 leading-relaxed">
                  <li><strong>Oprawa:</strong> twarda</li>
                  <li><strong>Ilość stron:</strong> 249</li>
                  <li><strong>ISBN:</strong> 978-83-63016-56-2</li>
                  <li><strong>Rok wydania:</strong> 2025</li>
                  <li><strong>Druk, łamanie, oprawa:</strong> Oficyna Drukarska Jacek Chmielewski</li>
                  <li><strong>Dystrybucja:</strong> ZOLLA Alicja Lichocka</li>
                  <li><strong>Stan:</strong> nowa</li>
                </ul>
                <p className="font-body mt-6 text-2xl font-bold text-[var(--primary-color)]">Cena: 97,00 zł</p>
                <p className="font-body text-lg text-gray-700">+ wysyłka InPost 11,99 zł</p>
                <button className="mt-10 flex min-w-[84px] max-w-[480px] transform cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-8 bg-[var(--primary-color)] text-white text-lg font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[var(--secondary-color)]">
                  Zamów teraz (Edycja limitowana)
                </button>
              </div>
            </div>
          </div>
        </section>
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
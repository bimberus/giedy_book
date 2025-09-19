import Image from "next/image";

const highlights = [
  {
    title: "Żywa kronika Mazowsza",
    description:
      "Poznaj genezę powstania Państwowego Zespołu Ludowego Pieśni i Tańca \"Mazowsze\" – od marzeń pionierów po triumfy na największych scenach świata.",
  },
  {
    title: "Niepublikowane fotografie",
    description:
      "Bogaty materiał ilustracyjny przeniesie Cię na scenę, do garderób i za kulisy prób, pozwalając poczuć pulsującą energię zespołu.",
  },
  {
    title: "Autorskie wspomnienia",
    description:
      "Giedymin Wróblewski dzieli się własnymi doświadczeniami tancerza i pedagoga, dokumentując pamięć o ludziach tworzących legendę Mazowsza.",
  },
];

const insideTheBook = [
  {
    title: "249 stron historii",
    description:
      "Dogłębne opracowanie o wymiarze naukowym, wzbogacone anegdotami i faktami potwierdzonymi przez świadków.",
  },
  {
    title: "Warsztat i pasja",
    description:
      "Kulisy pracy artystów, choreografów i muzyków – zrozumiesz, jak powstaje sceniczne arcydzieło.",
  },
  {
    title: "Dziedzictwo przyszłych pokoleń",
    description:
      "Apel autora, by dzielić się pamięcią o Mazowszu, zanim bezpowrotnie odejdzie wraz z jego pierwszymi twórcami.",
  },
];

const testimonials = [
  {
    quote:
      "Absolutnie porywająca! Ta książka to hołd dla narodowego skarbu, jakim jest Mazowsze. Lektura obowiązkowa dla każdego Polaka.",
    author: "Anna Kowalska",
    title: "krytyczka literacka",
  },
  {
    quote:
      "Zdjęcia są magiczne, a historie chwytają za serce. Czuć w każdej stronie miłość autora do tematu i jego bezpośrednie doświadczenie.",
    author: "Jan Nowak",
    title: "etnograf",
  },
  {
    quote:
      "To znacznie więcej niż album – to żywa, pulsująca opowieść o Polsce i o ludziach, którzy ją współtworzyli na scenie.",
    author: "Piotr Wiśniewski",
    title: "czytelnik",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[var(--background-color)] text-gray-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#hero" className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--accent-color)]">
            Giedymin Wróblewski
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-[var(--accent-color)] sm:flex">
            <a className="transition-colors hover:text-[var(--primary-color)]" href="#about">
              O książce
            </a>
            <a className="transition-colors hover:text-[var(--primary-color)]" href="#inside">
              Zajrzyj do środka
            </a>
            <a className="transition-colors hover:text-[var(--primary-color)]" href="#author">
              Autor
            </a>
            <a className="transition-colors hover:text-[var(--primary-color)]" href="#gallery">
              Galeria
            </a>
            <a className="transition-colors hover:text-[var(--primary-color)]" href="#order">
              Zamów
            </a>
          </nav>
          <a
            href="#order"
            className="hidden rounded-full bg-[var(--primary-color)] px-5 py-2 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[var(--secondary-color)] sm:inline-flex"
          >
            Kup teraz
          </a>
        </div>
      </header>

      <main className="flex-1" id="hero">
        <section className="relative flex min-h-screen items-center justify-center px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <Image
            alt='Kolorowa okładka książki "Tamtego Mazowsza już nie ma"'
            src="/book-cover.jpg"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center text-white">
            <p className="font-body text-sm uppercase tracking-[0.4em] text-white/80">Książka o fenomenie Mazowsza</p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              &bdquo;Tamtego Mazowsza już nie ma&rdquo; – zachowaj pamięć o legendzie polskiego folkloru
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Albumowo-biograficzna opowieść Giedymina Wróblewskiego odsłania kulisy powstania i rozkwitu zespołu, który przez dekady rozsławiał polską kulturę na całym świecie.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#order"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[var(--primary-color)] px-8 py-3 text-lg font-semibold text-white shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-[var(--secondary-color)]"
              >
                Zamów limitowaną edycję
              </a>
              <a
                href="#about"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/50 px-8 py-3 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-8 right-6 hidden rounded-3xl bg-white/90 p-4 shadow-2xl sm:block">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                <Image alt="Portret autora" src="/author-portrait.jpg" fill className="object-cover" />
              </div>
              <div className="text-left text-sm text-gray-700">
                <p className="font-display text-base font-semibold text-[var(--accent-color)]">Giedymin Wróblewski</p>
                <p className="font-body">Aktor, reżyser, choreograf i dawny solista Mazowsza</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="about">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="space-y-8">
                <span className="inline-flex rounded-full bg-[var(--primary-color)]/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-[var(--primary-color)]">
                  O książce
                </span>
                <h2 className="font-display text-3xl font-bold text-[var(--accent-color)] sm:text-4xl lg:text-5xl">
                  Kalejdoskop wspomnień, faktów i emocji pierwszych Mazowszan
                </h2>
                <p className="font-body text-lg leading-relaxed text-gray-700">
                  Publikacja jest efektem wieloletniej pracy autora, który jako tancerz i wokalista współtworzył Mazowsze. To rzetelna, bogato ilustrowana kronika, ukazująca przemiany zespołu od czasów Miro Zimińskiej-Sygietyńskiej aż po współczesność. Każda strona zachęca, by ocalić pamięć o ludziach, którzy nie bali się marzyć i budować wielką kulturę.
                </p>
                <ul className="grid gap-6 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-[var(--accent-color)]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="font-display text-xl font-semibold text-[var(--accent-color)]">{item.title}</h3>
                      <p className="mt-3 font-body text-base text-gray-700">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[2/3] overflow-hidden rounded-3xl shadow-2xl">
                  <Image alt="Strona redakcyjna książki" src="/editorial-page.jpg" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-3xl bg-white p-5 shadow-xl sm:block">
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--accent-color)]">Specyfikacja wydania</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li><strong>ISBN:</strong> 978-83-63016-56-2</li>
                    <li><strong>Oprawa:</strong> twarda</li>
                    <li><strong>Wydanie:</strong> Warszawa 2025, nakład limitowany</li>
                    <li><strong>Współwydawcy:</strong> Oficyna Drukarska &amp; ZOLLA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--accent-color)] py-20 text-white" id="inside">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-white/70">Zajrzyj do środka</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Fascynująca podróż przez serce Mazowsza
              </h2>
              <p className="mt-4 font-body text-lg text-white/80">
                Autor łączy prywatne doświadczenia z dokumentacją archiwalną, odsłaniając nieznane dotąd historie i konteksty tworzenia repertuaru, choreografii i charakterystycznych strojów.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {insideTheBook.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 font-body text-base text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="testimonials">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--primary-color)]/70">Opinie</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[var(--accent-color)] sm:text-4xl">
                Głosy czytelników i ekspertów
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.quote}
                  className="flex h-full flex-col justify-between rounded-3xl border border-[var(--accent-color)]/10 bg-white p-8 shadow-lg"
                >
                  <p className="font-body text-base italic text-gray-700">“{testimonial.quote}&rdquo;</p>
                  <footer className="mt-6">
                    <p className="font-display text-lg font-semibold text-[var(--accent-color)]">{testimonial.author}</p>
                    <p className="font-body text-sm uppercase tracking-[0.3em] text-gray-500">{testimonial.title}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--background-color)] py-20 sm:py-24" id="author">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
              <div className="relative h-full w-full">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image alt="Autor Giedymin Wróblewski" src="/author-portrait.jpg" width={600} height={750} className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-3xl bg-white p-6 shadow-xl sm:block">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-color)]">
                    Wielowymiarowy twórca
                  </p>
                  <p className="mt-3 font-body text-sm text-gray-700">
                    Aktor, reżyser, choreograf, pedagog i animator kultury. Z pasją wychowywał kolejne pokolenia artystów, m.in. w Grupie Folklorystycznej &bdquo;Polanie&rdquo;.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <span className="inline-flex rounded-full bg-[var(--accent-color)]/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-[var(--accent-color)]">
                  O autorze
                </span>
                <h2 className="font-display text-3xl font-bold text-[var(--accent-color)] sm:text-4xl">
                  Giedymin Wróblewski – świadek i współtwórca legendy Mazowsza
                </h2>
                <div className="space-y-4 font-body text-lg leading-relaxed text-gray-700">
                  <p>
                    Urodzony w Poznaniu artysta od najmłodszych lat związany był z teatrem i tańcem. Jako tancerz i wokalista Mazowsza przemierzył z zespołem świat, poznając jego fenomen od środka.
                  </p>
                  <p>
                    Po zakończeniu pracy scenicznej rozwijał karierę w Polskim Radiu, prowadził zespoły folklorystyczne i tworzył autorskie programy edukacyjne, takie jak kaseta &bdquo;Tańcz, ty też potrafisz&rdquo;.
                  </p>
                  <p>
                    Doświadczenie sceniczne, pedagogiczne i producenckie zaowocowało powstaniem tej książki – świadectwa pamięci o ludziach, którzy stworzyli narodowy skarb kultury.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24" id="gallery">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--primary-color)]/70">Galeria</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-[var(--accent-color)] sm:text-4xl">
                Kadry z życia autora i pracy nad książką
              </h2>
              <p className="mt-4 font-body text-lg text-gray-700">
                Zobacz kilka ujęć z planu i kulis pracy nad publikacją, które uzupełniają jej osobisty charakter.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image alt="Giedymin Wróblewski w planie zdjęciowym" src="/author-at-work.jpg" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image alt="Kolorowa okładka książki" src="/book-cover.jpg" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image alt="Strona redakcyjna z danymi wydawniczymi" src="/editorial-page.jpg" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--accent-color)] py-20 text-white" id="order">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white">
                  Zamów książkę
                </span>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  Limitowana edycja &bdquo;Tamtego Mazowsza już nie ma&rdquo;
                </h2>
                <p className="font-body text-lg text-white/80">
                  Wydanie przygotowane z troską o każdy detal edytorski. Idealne dla kolekcjonerów, miłośników folkloru oraz wszystkich, którzy chcą poznać historię Mazowsza opowiedzianą oczami jego artystów.
                </p>
                <ul className="space-y-3 font-body text-base text-white/80">
                  <li>• Format albumowy, twarda oprawa z tłoczeniami.</li>
                  <li>• Dopełnieniem są archiwalne fotografie i dokumenty.</li>
                  <li>• Wsparcie finansowe Urzędu Dzielnicy Mokotów.</li>
                  <li>• Każdy egzemplarz z pierwszego nakładu – numerowany.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white/90 p-8 text-gray-800 shadow-2xl backdrop-blur">
                <h3 className="font-display text-2xl font-bold text-[var(--accent-color)]">Zamów bezpośrednio od autora</h3>
                <p className="mt-4 font-body text-lg">
                  Cena książki: <strong className="text-[var(--primary-color)]">97,00 zł</strong>
                </p>
                <p className="font-body text-base text-gray-600">Wysyłka InPost: 11,99 zł</p>
                <div className="mt-6 space-y-4 text-sm text-gray-700">
                  <p>
                    Napisz wiadomość, aby zarezerwować egzemplarz lub zapytać o możliwość spotkania autorskiego.
                  </p>
                  <p>
                    <strong>E-mail:</strong> <a className="text-[var(--primary-color)] hover:underline" href="mailto:kontakt@giedyminwroblewski.pl">kontakt@giedyminwroblewski.pl</a>
                  </p>
                  <p>
                    <strong>Telefon:</strong> <a className="text-[var(--primary-color)] hover:underline" href="tel:+48501234567">+48 501 234 567</a>
                  </p>
                </div>
                <a
                  href="mailto:kontakt@giedyminwroblewski.pl?subject=Zamówienie%20książki%20Tamtego%20Mazowsza%20już%20nie%20ma"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--primary-color)] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[var(--secondary-color)]"
                >
                  Wyślij zamówienie
                </a>
                <p className="mt-4 text-center text-xs text-gray-500">
                  Masz księgarnię lub instytucję kultury? Zapytaj o sprzedaż hurtową i współpracę.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
          <p className="font-body text-sm text-white/70">
            © {new Date().getFullYear()} Giedymin Wróblewski. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a className="hover:text-white" href="#author">
              O autorze
            </a>
            <a className="hover:text-white" href="#order">
              Zamów książkę
            </a>
            <a className="hover:text-white" href="mailto:kontakt@giedyminwroblewski.pl">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

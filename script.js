// Baza danych dynamicznych treści
const articlesContent = {
    1: { title: "Wielki remont skrzyżowania w centrum Lublina. Korki sparaliżują miasto?", author: "Tomasz Kowalski", date: "12.06.2026, 14:30", category: "Lublin", image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=800", lead: "Od najbliższego poniedziałku rusza długo wyczekiwana przebudowa jednego z kluczowych węzłów komunikacyjnych w mieście. Urzędnicy apelują o omijanie centrum.", content: "Mieszkańcy Lublina muszą uzbroić się w cierpliwość. Prace remontowe na głównym skrzyżowaniu mają potrwać co najmniej trzy miesiące. W pierwszym etapie całkowicie wyłączony z ruchu zostanie prawy pas jezdni, co doprowadzi do paraliżu w godzinach szczytu. Zachęcamy do zapoznania się z <a href='#'>oficjalnym planem objazdów miejskich</a> w celu uniknięcia największych zatorów drogowych." },
    2: { title: "ALARM24: Pożar magazynu tekstylnego pod Puławami. Na miejscu 10 zastępów straży", author: "Anna Nowak", date: "12.06.2026, 22:45", category: "ALARM24", image: "https://images.unsplash.com/photo-1599731427891-b1fc50b868e4?w=800", lead: "Gęsty, czarny dym widać z odległości kilkunastu kilometrów. Służby ratunkowe walczą z żywiołem.", content: "Zgłoszenie o pożarze wpłynęło do dyżurnego stanowiska kierowania tuż przed godziną 22:00. Ogień błyskawicznie zajął halę, w której składowane były materiały łatwopalne. Sytuacja jest trudna ze względu na silny wiatr. Akcja gaśnicza może potrwać do rana." },
    3: { title: "Nowe ścieżki rowerowe w Zamościu. Połączą osiedla z Roztoczańskim Parkiem Narodowym", author: "Janusz Roztocki", date: "11.06.2026, 12:15", category: "Zamość", image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=800", lead: "Inwestycja warta kilka milionów złotych ułatwi poruszanie się cyklistom i przyciągnie turystów. Prace ruszą jeszcze w tym miesiącu.", content: "Zamość stawia na ekologię i aktywny wypoczynek. Nowa trasa rowerowa będzie miała asfaltową nawierzchnię, energooszczędne oświetlenie LED oraz specjalne miejsca odpoczynku dla rowerzystów wyposażone w stacje naprawcze." },
    4: { title: "ALARM24: Zderzenie trzech aut na trasie Lublin - Chełm. Droga całkowicie zablokowana", author: "Kamil Nałęcz", date: "11.06.2026, 18:20", category: "ALARM24", image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800", lead: "Policja wyznaczyła objazdy przez Łęczną. Na miejscu pracują służby medyczne.", content: "Ze wstępnych ustaleń policji wynika, że kierujący pojazdem nie dostosował prędkości do warunków panujących na drodze, stracił panowanie nad kierownicą i zjechał na przeciwległy pas ruchu." },
    5: { title: "Dni Chełma 2026: Poznaliśmy pełną listę gwiazd. Kto wystąpi na scenie?", author: "Marta Chełmska", date: "10.06.2026, 09:00", category: "Chełm", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", lead: "Prezydent miasta odsłonił karty. Tegoroczne święto miasta zapowiada się wyjątkowo hucznie.", content: "Na chełmskiej scenie zobaczymy czołowych artystów polskiej sceny pop, rock oraz hip-hop. Oprócz koncertów zaplanowano festiwal smaków, wesołe miasteczko dla dzieci oraz nocny pokaz laserów." },
    6: { title: "ALARM24: Silny wiatr zerwał dach z budynku gospodarczego w powiecie łubartowskim", author: "Anna Nowak", date: "11.06.2026, 21:10", category: "ALARM24", image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800", lead: "Strażacy w całym regionie mają pełne ręce roboty. Przez województwo lubelskie przechodzi front burzowy.", content: "Większość interwencji dotyczy powalonych drzew blokujących lokalne drogi oraz zerwanych linii energetycznych. W samym Łubartowie i okolicach bez prądu pozostaje obecnie kilkaset gospodarstw domowych." },
    7: { title: "Inwestycje w Białej Podlaskiej. Powstanie nowy park miejski i nowoczesny plac zabaw", author: "Sebastian Podlaski", date: "09.06.2026, 16:40", category: "Biała Podlaska", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800", lead: "Mieszkańcy zyskają nową przestrzeń do rekreacji i odpoczynku. Projekt zakłada nasadzenie ponad trzystu nowych drzew.", content: "Władze miasta podpisały umowę z wykonawcą zielonej przestrzeni. W parku znajdą się m.in. fontanna posadzkowa, strefa dla seniora, wybieg dla psów oraz nowoczesny, bezpieczny plac zabaw dla dzieci." }
};

// Baza Komentarzy (CRUD R/D)
let dynamicComments = {
    1: [
        { id: 101, author: "Kierowca LUB", text: "To będzie absolutny dramat na skrzyżowaniu!", upvotes: 12, downvotes: 2 },
        { id: 102, author: "Mieszkanka", text: "Dobrze, że w końcu to robią. Stan drogi był krytyczny.", upvotes: 35, downvotes: 1 }
    ],
    2: [], 3: [], 4: [], 5: [], 6: [], 7: []
};

// Baza Statycznych Podstron i Routing (Placeholder)
const staticPagesContent = {
    "Redakcja": "<h2>Redakcja Dziennika Wschodniego</h2><p><strong>Lublin:</strong> Tomasz Kowalski<br><strong>ALARM24:</strong> Anna Nowak, Kamil Nałęcz<br><strong>Zamość:</strong> Janusz Roztocki<br><strong>Chełm:</strong> Marta Chełmska<br><strong>Biała Podlaska:</strong> Sebastian Podlaski</p>",
    "Reklama": "<h2>Dział Reklamy</h2><p>Jan Kowalski - Dyrektor ds. Reklamy<br>Email: reklama@dziennikwschodni.pl<br>Tel: +48 123 456 789</p>",
    "Marketing": "<h2>Dział Marketingu</h2><p>Piotr Nowak - Kierownik Marketingu<br>Email: marketing@dziennikwschodni.pl</p>",
    "Dystrybucja": "<h2>Dystrybucja</h2><p>Michał Wójcik - Specjalista ds. Dystrybucji<br>Email: dystrybucja@dziennikwschodni.pl</p>",
    "Wniosek o patronat medialny": "<h2>Wniosek o patronat medialny</h2><p>Zgłoś wniosek na minimum 30 dni przed wydarzeniem.</p>",
    "O gazecie": "<h2>O gazecie</h2><p>Przyjazny Czytelnikom, zawsze po stronie mieszkańców, rodzinny i nowoczesny portal informacyjny Lubelszczyzny. Cieszymy się pełnym zaufaniem mieszkańców Lubelszczyzny: od lat jesteśmy liderem na liście najchętniej czytanych tytułów w środkowowschodniej części kraju. Wyprzedzamy w tym względzie zarówno pisma lokalne, jak i ogólnopolskie.</p>",
    "Jedynki": "<h2>Ostatnie Jedynki Wydań</h2><img src='images/jedynkaDW12czerwca2026.png' alt='Jedynka: 12 czerwca 2026' style='margin: 10px; height: 720px'>"
};

let currentArticleId = null;

// ==========================================================================
// ZARZĄDZANIE WIDOKAMI I ROUTING (Kategorie)
// ==========================================================================
const homeView = document.getElementById('home-view');
const articleView = document.getElementById('article-view');
const pageView = document.getElementById('page-view');

function showHomeView() {
    articleView.classList.add('hidden');
    pageView.classList.add('hidden');
    homeView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

document.querySelectorAll('.btn-back').forEach(btn => btn.addEventListener('click', showHomeView));
document.getElementById('back-to-home-logo').addEventListener('click', (e) => { e.preventDefault(); showHomeView(); });

// Podpięcie kafelków pod dynamiczne artykuły (działa na stronie głównej i w sidebarze artykułu!)
document.querySelectorAll('.news-card, .most-read-item').forEach(element => {
    element.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.closest('form')) return;
        const id = this.getAttribute('data-id');
        if (id && articlesContent[id]) openArticle(id);
    });
});

// Routing zakładkek stopki i miast (Placeholdery)
document.querySelectorAll('.route-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.textContent.trim();
        openStaticPage(pageName);
    });
});

function openStaticPage(name) {
    homeView.classList.add('hidden');
    articleView.classList.add('hidden');
    pageView.classList.remove('hidden');
    window.scrollTo(0, 0);

    const container = document.getElementById('dynamic-page-content');
    if(staticPagesContent[name]) {
        container.innerHTML = staticPagesContent[name];
    } else {
        container.innerHTML = `<h2>Kategoria: ${name}</h2><p>TUTAJ: lista artykułów z kategorii <strong>${name.toUpperCase()}</strong>. Sekcja w budowie.</p>`;
    }
}

// ==========================================================================
// INTERFEJS (Motyw, Menu, Modal Logowania)
// ==========================================================================
// Motyw z konturowymi ikonami SVG
const btnTheme = document.getElementById('btn-theme');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        iconSun.classList.add('hidden'); iconMoon.classList.remove('hidden');
    } else {
        iconSun.classList.remove('hidden'); iconMoon.classList.add('hidden');
    }
});

// Hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('mobile-open');
});

// Modal Logowania
const modal = document.getElementById('login-modal');
const btnOpenLogin = document.getElementById('btn-login-open');
const btnCloseModal = document.querySelector('.close-modal');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');

btnOpenLogin.addEventListener('click', () => modal.classList.remove('hidden'));
btnCloseModal.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => { if(e.target === modal) modal.classList.add('hidden'); });

tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active'); tabRegister.classList.remove('active');
    formLogin.classList.remove('hidden'); formRegister.classList.add('hidden');
});

tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active'); tabLogin.classList.remove('active');
    formRegister.classList.remove('hidden'); formLogin.classList.add('hidden');
});

// ==========================================================================
// ARTYKUŁY I KOMENTARZE (CRUD)
// ==========================================================================
function openArticle(id) {
    currentArticleId = id;
    const data = articlesContent[id];
    
    homeView.classList.add('hidden');
    pageView.classList.add('hidden');
    articleView.classList.remove('hidden');
    window.scrollTo(0, 0);

    const contentContainer = document.getElementById('single-article-content');
    
    contentContainer.innerHTML = `
        <article class="full-article">
            <span class="news-card-category">${data.category}</span>
            <h1>${data.title}</h1>
            <div class="article-meta">Autor: <strong>${data.author}</strong> | Opublikowano: ${data.date}</div>
            <p class="news-card-lead">${data.lead}</p>
            <img src="${data.image}" alt="${data.title}" class="article-image">
            <div class="article-text-body">${data.content}</div>
        </article>

        <section class="comments-section">
            <h3 style="border-bottom: 2px solid var(--main-color); padding-bottom: 5px; margin-bottom: 15px;">Komentarze (<span id="comment-count">0</span>)</h3>
            <div id="comments-list-container"></div>
            
            <div class="widget-box" style="margin-top: 20px;">
                <h4 style="margin-bottom: 15px;">Dodaj komentarz</h4>
                <form id="comment-form">
                    <input type="text" id="c-author" required placeholder="Pseudonim">
                    <input type="email" id="c-email" required placeholder="twójmail@domena.pl (tylko do moderacji)">
                    <textarea id="c-text" rows="3" required placeholder="Treść komentarza..."></textarea>
                    <div class="checkbox-container">
                        <input type="checkbox" id="c-agree" required>
                        <label for="c-agree" class="label-inline">Akceptuję regulamin i moderację komentarzy (Zgoda wymagana).</label>
                    </div>
                    <button type="submit">Dodaj komentarz</button>
                </form>
            </div>
        </section>
    `;

    renderComments();

    // CRUD: CREATE Kommentarza (C w CRUD)
    document.getElementById('comment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const newComment = {
            id: Date.now(), 
            author: document.getElementById('c-author').value,
            text: document.getElementById('c-text').value,
            upvotes: 0, downvotes: 0
        };
        dynamicComments[currentArticleId].push(newComment);
        renderComments();
        this.reset();
    });
}

// CRUD: READ i DELETE Komentarzy (R i D w CRUD)
function renderComments() {
    const container = document.getElementById('comments-list-container');
    const list = dynamicComments[currentArticleId];
    
    document.getElementById('comment-count').textContent = list.length;
    container.innerHTML = '';

    if(list.length === 0) {
        container.innerHTML = '<p style="font-size: 14px; color: var(--secondary-color); padding: 10px 0;">Brak komentarzy. Bądź pierwszy!</p>';
        return;
    }

    list.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `
            <div class="comment-author">${comment.author}</div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-actions">
                <button onclick="alert('Ocena zapisana!')">👍 ${comment.upvotes}</button>
                <button onclick="alert('Ocena zapisana!')">👎 ${comment.downvotes}</button>
                <button class="btn-report" onclick="alert('Komentarz został zgłoszony.')">🚩 Zgłoś</button>
            </div>
        `;
        container.appendChild(div);
    });
}

// ==========================================================================
// ZDJĘCIA I LOGIKA FORMULARZY WIDGETÓW
// ==========================================================================

// Globalny uchwyt formularzy (obejmuje stronę główną i sidebar podstrony)
const handleNewsletterSubmit = (e) => { e.preventDefault(); alert('Zapisano do newslettera!'); e.target.reset(); };
const handleAlarmSubmit = (e) => { e.preventDefault(); alert('ALARM24 wysłany!'); e.target.reset(); };

// Formularze na stronie głównej
const homeNewsletter = document.getElementById('newsletter-form');
const homeAlarm = document.getElementById('alarm-form');
if (homeNewsletter) homeNewsletter.addEventListener('submit', handleNewsletterSubmit);
if (homeAlarm) homeAlarm.addEventListener('submit', handleAlarmSubmit);

// Formularze na podstronie artykułu
const articleNewsletter = document.getElementById('newsletter-form-article');
const articleAlarm = document.getElementById('alarm-form-article');
if (articleNewsletter) articleNewsletter.addEventListener('submit', handleNewsletterSubmit);
if (articleAlarm) articleAlarm.addEventListener('submit', handleAlarmSubmit);

// Formularze modala
document.getElementById('form-login').addEventListener('submit', (e) => { e.preventDefault(); alert('Zalogowano!'); modal.classList.add('hidden'); });
document.getElementById('form-register').addEventListener('submit', (e) => { e.preventDefault(); alert('Zarejestrowano!'); modal.classList.add('hidden'); });
# 1. Architektura i Struktura

## 1.1 Struktura informacji (IA)

- Maksymalnie 5–6 pozycji w menu
- Prosta, logiczna nawigacja
- Płaska struktura URL (max 2 poziomy)
- Czytelne, opisowe adresy (np. `/uslugi-notarialne`)
- Breadcrumbs (opcjonalnie)

### Przykładowa struktura:

- `/` – Strona główna
- `/o-nas`
- `/uslugi`
- `/kontakt`

---

## 1.2 Struktura HTML (semantyczna)

Wymagane znaczniki:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

# 2. Performance (Core Web Vitals)

Wydajność strony wizytowej ma kluczowe znaczenie dla:
- doświadczenia użytkownika (UX)
- pozycji w Google
- współczynnika konwersji

---

## 2.1 Docelowe parametry (Core Web Vitals)

Strona powinna spełniać następujące wartości:

- **LCP (Largest Contentful Paint)** < 2.5 s  
- **CLS (Cumulative Layout Shift)** < 0.1  
- **INP (Interaction to Next Paint)** < 200 ms  
- **TTFB (Time To First Byte)** < 800 ms  

---

## 2.2 Optymalizacja zasobów

### Obrazy

- Format: **WebP** lub **AVIF**
- Kompresja bez widocznej utraty jakości
- `loading="lazy"` dla grafik poniżej pierwszego widoku
- Określone `width` i `height` (zapobieganie CLS)
- Responsywne obrazy (`srcset`)

---

### CSS

- Minifikacja plików
- Usunięcie nieużywanego CSS
- Inline **Critical CSS**
- Ograniczenie liczby plików
- Brak ciężkich frameworków, jeśli niepotrzebne

---

### JavaScript

- Minifikacja
- `defer` lub `async`
- Podział kodu (code splitting)
- Ograniczenie zewnętrznych bibliotek
- Brak render-blocking scripts

---

### Czcionki

- Maksymalnie 1–2 rodziny fontów
- `font-display: swap`
- Wczytywanie tylko używanych wariantów
- Hosting lokalny (jeśli możliwe)

---

## 2.3 Infrastruktura

- HTTP/2 lub HTTP/3
- Kompresja Brotli lub GZIP
- CDN (jeśli ruch > średni)
- Hosting z niskim TTFB
- Cache przeglądarki (Cache-Control)

---

## 2.4 Optymalizacja renderowania

- Mobile First
- DOM < 1500 węzłów
- Ograniczenie głębokości zagnieżdżenia
- Unikanie dużych animacji blokujących wątek główny
- Preferowanie CSS zamiast JS do animacji

---

## 2.5 Testowanie wydajności

Stronę należy przetestować za pomocą:

- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Test w trybie incognito
- Test na realnym urządzeniu mobilnym

---

## 2.6 Checklist Performance

- [ ] Obrazy zoptymalizowane  
- [ ] CSS zminimalizowany  
- [ ] JS zminimalizowany  
- [ ] Lazy loading włączony  
- [ ] Cache ustawiony  
- [ ] Brak render-blocking resources  
- [ ] Core Web Vitals w zielonym zakresie  

# 2. Dostępność (WCAG 2.1 AA)

- Kontrast min. 4.5:1
- Widoczne focus states
- Nawigacja klawiaturą
- aria-label gdzie wymagane
- Alternatywa tekstowa dla ikon
- Brak informacji przekazywanej wyłącznie kolorem
- Poprawna kolejność tabulacji
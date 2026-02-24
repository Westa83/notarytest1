# 1. SEO – Techniczne

Strona wizytowa powinna być przygotowana pod indeksację i widoczność w wyszukiwarkach już na etapie developmentu.

---

## 1.1 Meta dane

Każda podstrona powinna posiadać:

- Unikalny `<title>` (50–60 znaków)
- Meta description (140–160 znaków)
- Meta viewport
- Canonical URL
- Poprawny język strony (`lang="pl"`)

---

## 4.2 Struktura nagłówków

- Jeden `<h1>` na stronę
- Logiczna hierarchia H2 → H3
- Brak przeskakiwania poziomów (np. H2 → H4)
- Nagłówki opisowe (zawierające słowa kluczowe)

---

## 1.3 Struktura URL

- Krótkie i czytelne adresy
- Małe litery
- Bez znaków specjalnych
- Myślniki zamiast podkreśleń
- Przykład:  
  `/uslugi-notarialne-krakow`

---

## 1.4 Pliki systemowe

W katalogu głównym:

- `/sitemap.xml`
- `/robots.txt`
- `favicon`
- `manifest.json` (opcjonalnie)

---

## 1.5 Dane strukturalne (Schema.org)

Dla biznesu lokalnego zalecane:

- Typ: `LocalBusiness`
- Nazwa firmy
- Adres
- Numer telefonu
- Godziny otwarcia
- Link do strony

Format: JSON-LD umieszczony w `<head>`

---

## 1.6 Optymalizacja treści

- Słowo kluczowe w:
  - H1
  - pierwszym akapicie
  - meta title
  - URL
- Naturalne nasycenie słowami kluczowymi
- Opisy alt dla obrazów
- Linkowanie wewnętrzne między podstronami

---

## 1.7 Indeksacja i kontrola

- Brak blokady w `robots.txt`
- Brak meta `noindex` (jeśli strona produkcyjna)
- Sprawdzenie w Google Search Console
- Przekierowanie 301 z http → https
- Jedna wersja domeny (www lub bez www)

---

## 1.8 Checklist SEO

- [ ] Każda podstrona ma unikalny title  
- [ ] Każda podstrona ma description  
- [ ] Jeden H1  
- [ ] Sitemap wygenerowana  
- [ ] Robots poprawny  
- [ ] Dane strukturalne dodane  
- [ ] Przekierowania 301 ustawione  
- [ ] Strona zgłoszona do Google Search Console
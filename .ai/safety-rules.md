# 1. Bezpieczeństwo

Bezpieczeństwo strony wizytowej jest kluczowe dla:
- ochrony danych użytkowników
- ochrony formularzy kontaktowych
- wiarygodności firmy
- zgodności z RODO
- uniknięcia kar SEO

---

## 1.1 Warstwa infrastruktury

- HTTPS (SSL) – obowiązkowo
- Automatyczne odnawianie certyfikatu
- Przekierowanie 301 z HTTP → HTTPS
- Jedna wersja domeny (www lub bez www)
- Regularne aktualizacje serwera i oprogramowania
- Automatyczne backupy (min. 1x dziennie)
- Oddzielne środowisko staging

---

## 1.2 Nagłówki bezpieczeństwa (Security Headers)

Zalecane nagłówki HTTP:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

Cel:
- ochrona przed XSS
- ochrona przed clickjacking
- wymuszenie HTTPS
- ograniczenie dostępu do API przeglądarki

---

## 1.3 Ochrona formularzy

Formularz kontaktowy to najczęstszy punkt ataku.

Wymagania:

- Walidacja po stronie frontend i backend
- Sanityzacja danych wejściowych
- Ochrona przed XSS
- Ochrona przed CSRF
- Ograniczenie liczby prób wysyłki (rate limiting)
- reCAPTCHA lub honeypot
- Brak wyświetlania szczegółowych błędów serwera

---

## 1.4 Ochrona danych (RODO)

- Checkbox zgody przy formularzu
- Link do polityki prywatności
- Minimalizacja zbieranych danych
- Bezpieczne przechowywanie danych
- Szyfrowana komunikacja z serwerem

---

## 1.5 CMS / System zarządzania treścią (jeśli używany)

- Aktualne wersje CMS i wtyczek
- Usunięcie nieużywanych wtyczek
- Ograniczenie liczby wtyczek
- Silne hasła administratora
- Uwierzytelnianie dwuskładnikowe (2FA)
- Zmiana domyślnego loginu administratora

---

## 1.6 Uprawnienia i dostęp

- Ograniczenie dostępu do panelu admina (np. po IP)
- Role i uprawnienia użytkowników
- Brak dostępu do katalogów systemowych
- Wyłączony listing katalogów na serwerze

---

## 1.7 Monitoring i reagowanie

- Monitoring uptime
- Monitoring błędów serwera
- Logi dostępu
- Alerty przy nietypowym ruchu
- Procedura odzyskiwania z backupu

---

## 1.8 Checklist bezpieczeństwa

- [ ] HTTPS aktywny
- [ ] Przekierowanie 301 ustawione
- [ ] Security headers wdrożone
- [ ] Formularz zabezpieczony (XSS, CSRF)
- [ ] Backup automatyczny działa
- [ ] CMS aktualny
- [ ] Dostęp admin ograniczony
- [ ] Polityka prywatności dostępna
# 1. Responsywność (RWD – Responsive Web Design)

Strona wizytowa musi być projektowana w podejściu **Mobile First**, ponieważ większość użytkowników korzysta z urządzeń mobilnych.

---

## 1.1 Założenia projektowe

- Projekt tworzony najpierw dla ekranu mobilnego
- Następnie skalowany do większych rozdzielczości
- Brak poziomego scrolla
- Układ oparty na elastycznych siatkach (flexbox / grid)
- Jednostki względne (`rem`, `%`, `vh`, `vw`)

---

## 1.2 Breakpointy (przykładowe)

- 320px – małe telefony
- 480px – większe telefony
- 768px – tablet
- 1024px – mały laptop
- 1440px – desktop

Breakpointy powinny wynikać z projektu, a nie z konkretnych urządzeń.

---

## 1.3 Wymagania mobilne

- Klikalne elementy min. **44x44px**
- Tekst min. **16px**
- Odpowiedni spacing między elementami
- Numer telefonu jako `tel:`
- Adres jako link do mapy
- Formularze dostosowane do klawiatury mobilnej (`input type="email"`, `tel` itd.)

---

## 1.4 Optymalizacja UX mobilnego

- Hamburger menu (czytelne i intuicyjne)
- Brak hover-only interactions
- Szybki dostęp do kontaktu

---

## 1.5 Testowanie RWD

- Test w Chrome DevTools (Device Mode)
- Test na min. 2 realnych urządzeniach
- Test w trybie pionowym i poziomym
- Sprawdzenie formularzy na mobile
- Test szybkości na sieci 4G

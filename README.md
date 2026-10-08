# JavaScript Homework 9

Vite ile hazırlanmış SimpleLightbox galerisi ve localStorage kullanan geri bildirim formu.

- Galeri: `src/01-gallery.html` ve `src/js/01-gallery.js`.
- Form: `src/02-form.html` ve `src/js/02-form.js`.
- Form taslağı `feedback-form-state` anahtarında saklanır. İki alan da doldurulunca gönderilen nesne konsola yazılır; form ve kayıt temizlenir.

## Yerel çalıştırma

Node.js 24 ile:

```sh
npm install
npm run dev
```

Terminalde gösterilen adresi açın. Biçim kontrolü için `npm run format:check`, üretim derlemesi için `npm run build` kullanın.

## GitHub Pages

[Kaynak kod](https://github.com/kazimchdr-star/goit-js-hw-09)

Yayın sonrası sayfa adresi: https://kazimchdr-star.github.io/goit-js-hw-09/

GitHub deposunda **Settings → Pages → Source → GitHub Actions** seçin. `main` dalına gönderilen kod, eklenen iş akışıyla derlenip yayımlanır.

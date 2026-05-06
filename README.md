# 🎓 Modern Üniversite Web Sitesi

Modern, responsive ve kullanıcı dostu bir üniversite tanıtım web sitesi. Bootstrap 5 tabanlı, tam Türkçe içerikli çok sayfalı bir university web sitesi şablonu.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## ✨ Öne Çıkan Özellikler

- 🎨 **Premium Tasarım** — Glassmorphism, smooth animasyonlar ve micro-interactions
- 📱 **Tam Responsive** — Mobil, tablet ve masaüstü uyumlu
- 🚀 **Çok Sayfalı Yapı** — 14+ ayrı tam sayfa
- 🔽 **Akıllı Navbar** — Scroll'a duyarlı top-bar + dropdown menü
- 💡 **Hızlı Erişim Paneli** — Sağ taraftan açılan offcanvas yan menü
- 🧭 **Rektör Mega Menüsü** — Hover ile açılan mega dropdown
- 🖼️ **Hero Carousel** — Animasyonlu tam ekran slider
- 📊 **Sayaç Animasyonları** — İstatistik rakamları için JavaScript animasyonu
- 🗓️ **Takvim Görünümü** — Akademik takvimde timeline ve aylık görünüm arası geçiş
- 🔍 **Kategori Filtreleme** — Haberler ve akademik kadro için canlı filtre
- 📬 **İletişim Formu** — Validasyonlu frontend form
- 🌐 **Paydaşlar Bandı** — Sonsuz kayan logo slider

---

## 📁 Proje Yapısı

```
university-website/
├── index.html                # Ana sayfa
├── about.html                # Hakkımızda
├── academic-calendar.html    # Akademik Takvim (timeline + calendar view)
├── blog.html                 # Blog listesi
├── blog-detail.html          # Blog yazısı detayı
├── campus-life.html          # Kampüs Yaşamı
├── contact.html              # İletişim
├── course-catalog.html       # Ders Kataloğu
├── department-detail.html    # Bölüm Detay (Bilgisayar Müh. örneği)
├── faculties.html            # Fakülteler
├── faculty-members.html      # Akademik Kadro
├── faq.html                  # SSS (Accordion)
├── gallery.html              # Galeri (Lightbox)
├── news.html                 # Haberler (filtreleme + pagination)
├── news-detail.html          # Haber Detay
├── css/
│   └── styles.css            # Tüm özel stiller (~3000 satır)
├── js/
│   └── script.js             # Vanilla JavaScript
└── images/                   # Görseller
```

---

## 🧩 Navbar Bileşenleri

### Top Bar
- Sayfanın en üstünde sabit konumlandırılmış bilgi çubuğu
- Telefon, e-posta, öğrenci/personel linkleri ve sosyal medya
- Scroll'da yukarı kayarak kaybolur

### Ana Navbar
- Rektör mega dropdown (hover ile)
- Sayfa linkleri
- **Mobil:** Blog, Galeri, SSS, İletişim linkleri doğrudan görünür
- **Masaüstü:** Aynı linkler `⌄` butonundan açılan dropdown içinde
- Scroll sonrası dropdown glassmorphism efektiyle beyaz/blur görünüme geçer

### Hızlı Erişim (Offcanvas)
- Sağ köşedeki grid ikon butonuyla açılır
- Öğrenci Portalı, Webmail, Kütüphane, Akademik Takvim, Ders Kataloğu vb.

---

## 🚀 Kurulum

### Yöntem 1 — Doğrudan Tarayıcıda
```
index.html dosyasına çift tıklayın
```

### Yöntem 2 — VS Code Live Server
1. VS Code'da projeyi açın
2. `index.html` üzerine sağ tıklayın → **"Open with Live Server"**

### Yöntem 3 — Python HTTP Server
```bash
cd university-website
python -m http.server 8000
# → http://localhost:8000
```

### Yöntem 4 — Node.js
```bash
npx serve
```

---

## 🎨 Renk Paleti

| Değişken | Renk | Kullanım |
|---|---|---|
| `--primary-color` | `#2d6a6a` | Ana marka rengi (Teal) |
| `--primary-dark` | `#1e3a3a` | Navbar, footer |
| `--primary-light` | `#4a9d9d` | Hover, gradient |
| `--accent-color` | `#e07856` | Vurgu, badge, butonlar |

---

## 💻 Teknoloji Yığını

| Teknoloji | Versiyon | Kullanım |
|---|---|---|
| HTML5 | — | Semantik yapı |
| CSS3 | — | Glassmorphism, animasyonlar, custom properties |
| JavaScript | ES6+ | Tüm interaktivite |
| Bootstrap | 5.3.2 | Layout, grid, offcanvas, carousel |
| Bootstrap Icons | 1.11.1 | İkon seti |
| Google Fonts | — | Inter + Poppins |

---

## 📱 Responsive Breakpoints

| Ekran | Boyut | Davranış |
|---|---|---|
| Mobile | < 576px | Tek kolon, hamburger menü |
| Tablet | 576–991px | 2 kolon, hamburger menü |
| Desktop | ≥ 992px | Tam navbar, dropdown görünür |

---

## 📄 Sayfalar

| # | Sayfa | Öne Çıkan Özellik |
|---|---|---|
| 1 | **Ana Sayfa** | Hero carousel, istatistikler, etkinlikler, haberler, paydaşlar bandı |
| 2 | **Hakkımızda** | Tarihçe, misyon/vizyon, about carousel |
| 3 | **Fakülteler** | 9 fakülte kartı, bölüm listeleri |
| 4 | **Bölüm Detay** | Müfredat, akademik kadro, fırsatlar |
| 5 | **Akademik Kadro** | Filtreli öğretim üyesi kartları |
| 6 | **Ders Kataloğu** | Program ve ders listeleri |
| 7 | **Akademik Takvim** | Timeline + aylık takvim görünümü |
| 8 | **Haberler** | Filtreli kartlar, pagination |
| 9 | **Haber Detay** | Tekil haber şablonu |
| 10 | **Blog** | Yazı listesi + sidebar |
| 11 | **Blog Detay** | Makale sayfası şablonu |
| 12 | **Kampüs Yaşamı** | Kulüpler, tesisler, etkinlikler |
| 13 | **Galeri** | Fotoğraf galerisi + lightbox |
| 14 | **SSS** | Accordion yapısında Q&A |
| 15 | **İletişim** | Form + harita + iletişim bilgileri |

---

## ⚙️ Özelleştirme

### Renk Değiştirme
`css/styles.css` dosyasında CSS custom properties:
```css
:root {
  --primary-color: #2d6a6a;
  --accent-color:  #e07856;
}
```

### İçerik Güncelleme
- HTML dosyalarındaki metinleri düzenleyin
- `images/` klasörüne kendi görsellerinizi ekleyin
- `contact.html` içindeki harita koordinatlarını güncelleyin

---

## 🌐 Tarayıcı Desteği

Chrome ✅ | Firefox ✅ | Safari ✅ | Edge ✅ *(son 2 sürüm)*

---

## 📝 Notlar

- Görseller placeholder / AI-generated
- Form gönderimi frontend simülasyonu (backend yok)
- Sosyal medya linkleri `#` placeholder
- Google Maps iframe örnek koordinatlarla

---

**Geliştirme:** Aralık 2025 – Mayıs 2026  
**Versiyon:** 2.1.0

# RapKology - Türkçe Rap ve Dünya Müzik Haberleri Platformu

## 🚀 Özellikler

Proje içerisinde slider alanlarını geliştirmek için hem Swiper.js kütüphanesini hem de özelleştirilmiş (custom) slider yapıları oluşturdum.

### 📱 Responsive Tasarım

### 📰 İçerik Yönetimi

- **Dynamic Content**: JSON tabanlı içerik sistemi
- **Category Filtering**: Kategori bazlı içerik filtreleme
- **Real-time Updates**: Dinamik veri güncellemeleri

## 🛠️ Teknolojiler

### Frontend Framework

- **Next.js 14**
- **React 18**
- **TypeScript**

### Styling & UI

- **Tailwind CSS**
- **Custom CSS**
- **Responsive Design**

### UI Components

- **Swiper.js**
- **Next.js Image**
- **Custom Components**

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Main hero slider
│   ├── HeroSectionPromotion.tsx # Promotion section
│   ├── TrendSection.tsx   # Trending content
│   ├── FavSection.tsx     # Favorites slider
│   └── ExploreSection.tsx # Explore content with filters
├── ui/                    # UI components
│   ├── trendFrame.tsx     # Trend content frame
│   └── favFrame.tsx       # Favorite content frame
├── data/                  # Static data
│   └── posts.json         # Content data
├── metadata/              # Component metadata system
│   ├── components/        # Individual component metadata
│   │   ├── Header.ts      # Header component metadata
│   │   ├── HeroSection.ts # Hero section metadata
│   │   ├── TrendSection.ts # Trend section metadata
│   │   ├── FavSection.ts  # Favorites section metadata
│   │   └── ExploreSection.ts # Explore section metadata
│   └── index.ts           # Metadata registry
├── types/                 # TypeScript types
│   ├── post.ts            # Post interface
│   └── metadata.ts        # Metadata interfaces
├── utils/                 # Utility functions
│   └── metadataHelper.ts  # Metadata helper functions
└── pages/api/metadata/    # Metadata API endpoints
    ├── index.ts           # All metadata endpoint
    └── [component].ts     # Single component metadata
```

## 🎯 Ana Bölümler

### 1. Header Navigation

- **Mobile Hamburger**: Touch-friendly mobile navigation

### 2. Hero Section

- **Image Slider**: Swiper.js ile smooth transitions

### 3. Trend Section

- **Dynamic Posts**: JSON'dan gelen trend içerikleri

### 4. Favorites Section

- **Horizontal Slider**: Touch-friendly sliding

### 5. Explore Section

- **Dynamic Content**: Seçilen kategoriye göre içerik

## 📊 Component Metadata Sistemi

Projede her component için detaylı metadata sistemi oluşturulmuştur. Bu sistem aşağıdaki faydaları sağlar:

### 🎯 Metadata Faydaları

#### **SEO Optimizasyonu**

- Her component için özel SEO meta tagları
- Dinamik title ve description oluşturma
- Open Graph ve Twitter Card desteği
- Arama motorları için optimize edilmiş içerik

#### **Performance Monitoring**

- Bundle size tracking
- Render time metrikleri
- Optimizasyon önerileri
- Performance raporları

#### **Accessibility Compliance**

- ARIA label kontrolü
- Keyboard navigation desteği
- Screen reader uyumluluğu
- Color contrast kontrolleri

#### **Development Experience**

- Component dokümantasyonu
- Dependency tracking
- Feature listesi
- Version management

### 🔧 Metadata Kullanımı

```typescript
// Component metadata'ya erişim
import { getComponentMetadata } from "@/metadata";

const headerMetadata = getComponentMetadata("Header");

// API üzerinden metadata erişimi
fetch("/api/metadata/Header")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Proje geneli istatistikler
fetch("/api/metadata")
  .then((res) => res.json())
  .then((data) => console.log(data.projectStats));
```

### 📈 Metadata İçeriği

Her component metadata'sı şunları içerir:

- **Temel Bilgiler**: İsim, açıklama, versiyon
- **Teknik Detaylar**: Dependencies, features
- **Performance**: Bundle size, render time, optimizasyonlar
- **SEO**: Title, description, keywords, OG tags
- **Accessibility**: ARIA labels, keyboard support, contrast

### 🔄 JSON Data Metadata Sistemi

Projede `posts.json` dosyasındaki SEO bilgileri kullanılarak dinamik metadata sistemi oluşturulmuştur:

#### **JSON Data'dan Metadata Çıkarma**

```typescript
// Her post için mevcut SEO bilgileri:
{
  "seo": {
    "metaTitle": "Lark2020 – ölmemi istemezsin: Güçlü Sözler ve Sert Flow",
    "metaDescription": "Lark2020'nin yeni şarkısı...",
    "canonicalURL": "lark2020den-yeni-parca-olmemi-istemezsin-yayinda"
  }
}
```

#### **Dinamik Metadata Oluşturma**

#### **API Endpoints**

#### **SEO Optimizasyonu**

### 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build
npm start
```

### Development Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server

```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

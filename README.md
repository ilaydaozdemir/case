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
└── types/                 # TypeScript types
    └── post.ts            # Post interface
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

## 🎨 Tasarım Sistemi

## 🚀 Kurulum ve Çalıştırma

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

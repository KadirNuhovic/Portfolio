# Portfolio Images Guide

## 📸 Gde da staviš slike:

### 1. Profilne slike:
```
public/images/profile/
├── profile-photo.jpg     # Glavna profilna slika
├── avatar.png           # Manja avatar ikona
└── about-me.jpg          # Slika za About sekciju
```

### 2. Projekti:
```
public/images/projects/
├── digital-menu-screenshot.png
├── ecommerce-mockup.jpg
├── task-app-demo.gif
└── project-thumbnail.jpg
```

### 3. Background i dekorativne slike:
```
public/images/backgrounds/
├── workspace.jpg
├── coding-setup.png
└── abstract-bg.jpg
```

### 4. Tech ikone:
```
public/images/icons/
├── react-icon.svg
├── nodejs-icon.svg
└── custom-tech-icon.png
```

## 🎨 Preporuke za slike:

### Formati:
- **JPG/PNG** - za fotografije i screenshotove
- **SVG** - za ikone i logoe
- **WebP** - za bolju optimizaciju (ako podržava)
- **GIF** - za kratke demo animacije

### Veličine:
- **Profile photo**: 400x400px (square)
- **Project screenshots**: 1200x800px (16:10)
- **Thumbnails**: 300x200px
- **Icons**: 64x64px ili 128x128px

## 💡 Korišćenje u kodu:

```jsx
// Profilna slika
<img src="/images/profile/profile-photo.jpg" alt="Profile" />

// Projekat slika
<img src={`/images/projects/${project.image}`} alt={project.title} />

// Background slika
<div style={{ backgroundImage: 'url(/images/backgrounds/workspace.jpg)' }}>
```

## 🚀 Optimizacija:
- Koristi WebP format za manje fajlove
- Komprimiraj slike pre upload-a
- Koristi lazy loading za velike slike

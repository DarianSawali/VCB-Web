# Vancouver City Blessing Website

A modern, beautiful Next.js website for Vancouver City Blessing built with TypeScript and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 (App Router)
- 📱 Fully mobile-responsive
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
vcb-web/
├── app/                    # Next.js app directory
│   ├── about/             # About Us page
│   ├── connect/           # Connect page
│   ├── give/              # Give page
│   ├── compassion/        # Compassion Ministries page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Introduction.tsx  # Introduction section
│   ├── JoinLivestream.tsx # Livestream section
│   ├── Ministries.tsx     # Ministries section
│   └── FAQ.tsx            # FAQ section
├── public/                # Static assets
└── package.json          # Dependencies
```

## Customization

### Update Church Information

1. **Church Name**: Update "Vancouver City Blessing" throughout the codebase if needed
2. **Contact Information**: Edit `components/Footer.tsx` and relevant pages
3. **Content**: Update text and information in component files
4. **Colors**: Customize colors in `tailwind.config.ts`

### Add New Pages

1. Create a new folder in `app/` with your page name
2. Add a `page.tsx` file with your content
3. Update `components/Navbar.tsx` to include the new page link

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## License

This project is for Vancouver City Blessing use.


# PatronClash Web App
This is just a proof of concept.

A modern sports betting web application built with React, TypeScript, and Tailwind CSS. PatronClash provides an intuitive interface for sports betting enthusiasts with real-time odds, live game updates, and a seamless betting experience.

## 🚀 Features

- **Sports Betting Interface**: Clean and intuitive betting platform with support for multiple sports
- **Live Betting**: Real-time game updates and live betting capabilities
- **Bet Slip Management**: Interactive bet slip with automatic calculations
- **Multiple Bet Types**: Support for moneyline, spread, and total betting options
- **Responsive Design**: Mobile-first approach with full desktop support
- **Modern UI**: Built with Tailwind CSS for a sleek, professional appearance

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Testing**: Vitest with Testing Library
- **Code Quality**: ESLint, Prettier, Husky, CommitLint

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/patronclash-web-app.git
cd patronclash-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:coverage # Run tests with coverage
npm run test:ui      # Run tests with UI

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
npm run quality      # Run all quality checks

# Other
npm run sonar        # Run SonarQube scanner
```

## 🏗️ Project Structure

```
patronclash-web-app/
├── src/
│   ├── __tests__/          # Test files
│   ├── assets/             # Static assets
│   ├── components/         # Reusable components
│   │   ├── account/        # Account-related components
│   │   ├── auth/           # Authentication components
│   │   ├── betting/        # Betting-related components
│   │   ├── common/         # Common/shared components
│   │   └── sports/         # Sports-specific components
│   ├── constants/          # Application constants
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── store/              # Redux store configuration
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Public assets
├── .husky/                 # Git hooks
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── vitest.config.ts        # Vitest configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Key Components

### App Component
The main application component that sets up routing and renders the primary interface including:
- Navigation header with branding
- Sports betting interface with game listings
- Interactive bet slip sidebar
- Sport filtering functionality

### Current Features
- Mock data for NBA and NFL games
- Moneyline, spread, and total betting options
- Dynamic bet slip with stake calculation
- Live game status indicators
- Responsive layout for all devices

## 🧪 Testing

The project uses Vitest for unit testing and includes:
- Component tests with Testing Library
- Coverage reporting
- UI testing interface

Run tests:
```bash
npm run test
```

Generate coverage report:
```bash
npm run test:coverage
```

## 🔒 Code Quality

The project enforces code quality through:
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks
- **CommitLint**: Conventional commit messages
- **TypeScript**: Static type checking

## 🚀 Deployment

Build the application for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- Integration with real sports data APIs
- User authentication and account management
- Payment processing integration
- Live streaming capabilities
- Advanced betting options (parlays, teasers, etc.)
- Mobile application development
- Social features and betting communities

## 📞 Support

For support, email support@patronclash.com or join our Discord community.

Just kidding, that doesn't exist. This is just a POC.

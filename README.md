# 별비 (Byeolbi)

A mystical web application that generates personalized predictions based on your birthdate, combining astrological insights with historical prophecies.

## Features

- 🌟 **Personalized Predictions**: Get custom forecasts based on your birthdate and zodiac sign
- 🔮 **Historical Prophecies**: Explore famous predictions from history's greatest prophets
- 🌌 **Cosmic Interface**: Beautiful, star-themed UI with modern design principles
- 📱 **Responsive Design**: Fully functional on all devices
- 🎯 **Fate Intensity**: Measure the cosmic alignment of predictions

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: OpenAI API for prediction generation
- **Authentication**: Supabase

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/byeolbi.git
   cd byeolbi
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/byeolbi"
   OPENAI_API_KEY="your-openai-api-key"
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   ```

4. Initialize the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions and shared logic
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── styles/             # Global styles and theme
├── services/           # External service integrations
└── constants/          # Application constants
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m '✨ feat: Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Commit Convention

We follow the [Gitmoji](https://gitmoji.dev/) commit convention:

- ✨ feat: New feature
- 🐛 fix: Bug fix
- 💄 style: UI/style updates
- ♻️ refactor: Code refactoring
- 📝 docs: Documentation updates
- 🎨 style: Code style/format
- ⚡️ perf: Performance improvements
- 🔧 chore: Maintenance tasks

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

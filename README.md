# rehoukrel-monorepo-template

A modern monorepo template using Bun, Turbo, and TypeScript.

## Stack

- **Runtime**: [Bun](https://bun.sh) 1.3.5
- **Monorepo**: [Turborepo](https://turbo.build)
- **Backend**: Elysia (Bun-native framework)
- **Frontend**: TanStack Start + React 19
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (via Docker)
- **Storage**: MinIO (S3-compatible, via Docker)
- **Code Quality**: Biome (linting & formatting)

## Project Structure

```
rehoukrel-monorepo-template/
├── apps/
│   ├── server/         # Elysia backend (port 8080)
│   └── web/            # TanStack Start frontend (port 3000)
├── packages/
│   ├── core/           # Shared utilities
│   └── domains/        # Domain logic
└── docker-compose.yml  # PostgreSQL + MinIO
```

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Setup Environment Variables

```bash
# Copy environment template
cp .env.example .env
cp apps/server/.env.example apps/server/.env
```

### 3. Start Infrastructure (PostgreSQL + MinIO)

```bash
# Start containers
bun run docker:up

# View logs
bun run docker:logs

# Stop containers
bun run docker:down
```

**Services:**
- PostgreSQL: `localhost:5432`
- MinIO API: `localhost:9000`
- MinIO Console: `http://localhost:9001`
  - Username: `minioadmin`
  - Password: `minioadmin`

### 4. Start Development Servers

```bash
# Start all apps in dev mode
bun dev

# Or run individually
bun --filter server dev  # Backend on :8080
bun --filter web dev     # Frontend on :3000
```

## Available Scripts

### Development
```bash
bun dev              # Run all apps in dev mode
bun build            # Build all apps
bun lint             # Lint all workspaces
bun test             # Run tests
```

### Docker
```bash
bun run docker:up    # Start PostgreSQL + MinIO
bun run docker:down  # Stop containers
bun run docker:logs  # View container logs
bun run docker:clean # Stop and remove volumes
```

### Adding Dependencies
```bash
bun run add:server <package>   # Add to apps/server
bun run add:web <package>      # Add to apps/web
bun run add:core <package>     # Add to packages/core
bun run add:domains <package>  # Add to packages/domains
```

## TypeScript Configuration

This monorepo uses centralized TypeScript configurations:

- `tsconfig.base.json` - Common settings for all workspaces
- `tsconfig.node.json` - Node.js/Bun-specific settings
- `tsconfig.browser.json` - Browser/React-specific settings

Each workspace extends from the appropriate base configuration.

## Database & Storage

### PostgreSQL
Default connection:
```
postgresql://postgres:postgres@localhost:5432/rehoukrel
```

### MinIO
MinIO comes with two pre-created buckets:
- `uploads` - Private bucket for user uploads
- `public` - Public bucket (download-only access)

Access MinIO Console at http://localhost:9001

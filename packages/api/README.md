# OCAT API (@ocat/api)

## Architecture Overview

The OCAT API follows a clean architecture pattern inspired by Talent Hub, separating business logic from infrastructure concerns while using Sequelize instead of Prisma. The API handles assessment management, user authentication, and related functionality for the OCAT (Offender Assessment Tool) system. It's structured as a modular application organized by feature domains, providing clear separation of concerns while maintaining simplicity.

## Project Structure

The API is organized into several key directories:

```text
src/
├── @types/          # TypeScript type definitions for domain entities
├── application/     # Business logic and application services
│   ├── contracts/   # Interface definitions and contracts
│   ├── events/      # Domain events
│   ├── features/    # Feature-specific use cases organized by domain
│   ├── services/    # Application services
│   └── utils/       # Utility functions
├── infrastructure/  # Infrastructure concerns
│   ├── di/          # Dependency injection container
│   ├── http/        # HTTP server setup
│   ├── logging/     # Logging configuration
│   ├── sequelize/   # Database models and connection
│   └── repositories/ # Data access implementations
├── presentation/    # HTTP routes and controllers
└── index.ts         # Application entry point
```

## Domain Features

The application is organized around the following core domains:

- **Assessments** - Management of cat behavioral assessments, scoring, and risk evaluation
- **Users** - User authentication and profile management

### Feature Structure

Each feature follows a consistent structure within `/src/application/features/`:

```text
feature-name/
├── operation-name/
│   ├── controller.ts    # HTTP request handling and validation
│   ├── useCase.ts      # Business logic implementation
│   └── validator.ts    # Input validation schemas
```

For example, the assessments feature includes:

- `create/` - Creating new assessments
- `getList/` - Listing assessments with filtering and pagination

## Request Flow

The typical request flow follows this pattern:

1. HTTP request arrives at one of the route handlers in `/src/presentation/`
2. Route handler delegates to the appropriate feature controller
3. Controller validates input using the validator
4. Controller invokes the corresponding use case with validated data
5. Use case executes business logic, often interacting with repositories
6. Repository implementations handle data persistence via Sequelize
7. Response flows back through the controller to the client

### Example Request Flow

```text
POST /api/assessments
↓
assessmentRouter.ts (presentation layer)
↓
create/controller.ts (validates request)
↓
create/useCase.ts (business logic)
↓
AssessmentRepository (data access)
↓
Sequelize Models (database)
```

## Key Technologies

- **Express.js** - Web framework
- **Sequelize** - Database ORM and models
- **TypeScript** - Type safety and development experience
- **Simple DI Container** - Dependency injection (simplified version)
- **Express Validator** - Request validation

## Development

See the package.json scripts for common development tasks:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## API Endpoints

### Assessments

- `POST /api/assessments` - Create a new assessment
- `GET /api/assessments` - Get list of assessments with filtering and pagination

### Users

- `GET /api/users` - User endpoints (to be implemented)

### Health Check

- `GET /api/ping` - Health check endpoint

## Database Schema

The application uses the existing PostgreSQL schema with the following main tables:

- `assessments` - Stores assessment data with soft delete support
- `users` - Stores user account information (to be implemented)

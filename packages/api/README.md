# OCAT API (@ocat/api)

## Architecture Overview

The OCAT API follows a clean architecture pattern inspired by Talent Hub, separating business logic from infrastructure concerns while using Sequelize instead of Prisma. The API handles assessment management, user authentication, and related functionality for the OCAT (Offender Assessment Tool) system. It's structured as a modular application organized by feature domains, providing clear separation of concerns while maintaining simplicity.

## Project Structure

The API is organized into several key directories:

```text
src/
├── types/           # TypeScript type definitions for domain entities
│   ├── assessments/ # Assessment-related types
│   ├── shared/      # Shared types and interfaces
│   └── users/       # User-related types
├── application/     # Business logic and application services
│   ├── contracts/   # Interface definitions and contracts
│   │   ├── repositories/ # Repository interface definitions
│   │   └── services/     # Service interface definitions
│   ├── events/      # Domain events
│   ├── features/    # Feature-specific use cases organized by domain
│   │   ├── assessments/  # Assessment features (create, getList)
│   │   └── users/        # User features (to be implemented)
│   ├── services/    # Application services
│   └── utils/       # Utility functions
├── infrastructure/  # Infrastructure concerns
│   ├── di/          # Dependency injection container
│   ├── http/        # HTTP server setup
│   ├── logging/     # Logging configuration
│   ├── repositories/ # Data access implementations
│   └── sequelize/   # Database models and connection
│       └── models/  # Sequelize model definitions
├── presentation/    # HTTP routes and controllers
│   ├── assessmentRouter.ts # Assessment API routes
│   ├── pingRouter.ts       # Health check routes
│   ├── userRouter.ts       # User API routes (placeholder)
│   └── index.ts           # Route configuration
└── index.ts         # Application entry point
```

## Domain Features

The application is organized around the following core domains:

- **Assessments** - Management of cat behavioral assessments, scoring, and risk evaluation (partially implemented)
- **Users** - User authentication and profile management (placeholder - to be implemented)

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

- `GET /api/users` - User endpoints (placeholder - to be implemented)

### Health Check

- `GET /api/ping` - Health check endpoint

## Database Schema

The application uses PostgreSQL with Sequelize ORM. Currently implemented models:

- `Assessment` - Stores assessment data with soft delete support

Additional tables mentioned in the schema but not yet implemented:

- `users` - User account information (to be implemented)

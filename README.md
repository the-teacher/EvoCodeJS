<image src="public/assets/EvoCodeJS.png" />

# EvoCode.JS

Evolutionary JavaScript Framework for AI-Driven Development

## Manifesto

- [English](MANIFESTO.en.md)
- [Russian](MANIFESTO.ru.md)

## The Idea

This project outlines the structure of the anticipated Node.js application along with documentation and guidelines for AI on how the project should be implemented.

### Project Structure

```bash
└── src
    ├── index.ts                              # Entry point (server startup)
    ├── types                                 # TypeScript types
    │   └── __TYPES.md                        # Documentation for TypeScript types
    ├── migrations                            # Database migrations
    │   ├── __MIGRATIONS.md                   # Documentation for migrations
    │   ├── 202501021230_addUsersTable.ts     # Migration to add users table
    │   ├── 202501021235_addPostsTable.ts     # Migration to add posts table
    │   ├── 202501021240_updateUserSchema.ts  # Migration to update user schema
    │   └── EXECUTED_MIGRATIONS.ts            # Migration history
    ├── routes                                # Route definitions
    │   ├── __ROUTES.md                       # Documentation for routes
    │   ├── __tests                           # Tests for routes
    │   ├── adminRoutes.ts                    # Routes for admin-related operations
    │   ├── postRoutes.ts                     # Routes for post-related operations
    │   └── userRoutes.ts                     # Routes for user-related operations
    ├── middlewares                           # Middleware for processing requests
    │   ├── __MIDDLEWARES.md                  # Documentation for middlewares
    │   ├── __tests                           # Tests for middlewares
    │   └── authMiddleware.ts                 # Middleware for authentication
    ├── actions                               # Logic for handling HTTP requests
    │   ├── __ACTIONS.md                      # Documentation for actions
    │   ├── __tests                           # Tests for actions
    │   ├── posts                             # Post-specific actions
    │   │   ├── createPostAction.ts           # Action for creating a post
    │   │   ├── getPostAction.ts              # Action for retrieving a post
    │   │   ├── updatePostAction.ts           # Action for updating a post
    │   │   └── deletePostAction.ts           # Action for deleting a post
    │   └── users                             # User-specific actions
    │       ├── createUserAction.ts           # Action for creating a user
    │       ├── getUserAction.ts              # Action for retrieving a user
    │       ├── updateUserAction.ts           # Action for updating a user
    │       └── deleteUserAction.ts           # Action for deleting a user
    ├── paramsSchema                          # Schemas for parameter validation
    │   ├── auth.ts                           # Schema for authentication parameters
    │   ├── posts.ts                          # Schema for post parameters
    │   └── users.ts                          # Schema for user parameters
    ├── validations                           # Validation logic for data models
    │   ├── __tests                           # Tests for validations
    │   ├── postValidation.ts                 # Validation for post inputs
    │   ├── userValidation.ts                 # Validation for user inputs
    ├── dataAccess                            # Data access layer, includes repositories
    │   ├── __DATA_ACCESS.md                  # Documentation for the data access layer
    │   ├── authRepository.ts                 # Repository for auth data
    │   ├── postRepository.ts                 # Repository for post data
    │   └── userRepository.ts                 # Repository for user data
    ├── jobs                                  # Background jobs
    │   ├── __JOBS.md                         # Documentation for jobs
    │   ├── __tests                           # Tests for jobs
    │   └── currencyRateJob.ts                # Job for updating currency rates
    ├── services                              # Business logic and external API interactions
    │   ├── __SERVICES.md                     # Documentation for services
    │   ├── __tests                           # Tests for services
    │   ├── currencyRateService.ts            # Service for fetching currency rates
    │   └── geoService.ts                     # Service for geographical data
    ├── mailers                               # Mailers
    │   ├── __MAILERS.md                      # Documentation for mailers
    │   ├── __tests                           # Tests for mailers
    │   ├── auth                              # Auth-related mailers
    │   └── users                             # User-related mailers
    └── utils                                 # Utility functions and helpers
        ├── __UTILS.md                        # Documentation for utilities
        ├── __tests                           # Tests for utilities
        └── dateUtils.ts                      # Utility for handling dates
```

---

## Getting Started Docs

1. [Entry Point](src/__ENTRY_POINT.md)
2. [Routes](src/routes/__ROUTES.md)
3. [Actions](src/actions/__ACTIONS.md)

### License

[MIT](https://choosealicense.com/licenses/mit/)

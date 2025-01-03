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
/app
├── /src
│   ├── /types                         # TypeScript types
│   │   └── TYPES.md                   # Documentation for TypeScript types
│   ├── /actions                       # Logic for handling HTTP requests (previously controllers)
│   │   ├── ACTIONS.md                 # Documentation for actions
│   │   ├── /tests                     # Tests for actions
│   │   ├── /users                     # User-specific actions
│   │   │   ├── indexAction.js         # Action for listing users
│   │   │   ├── createAction.js        # Action for creating a user
│   │   ├── postAction.js              # Action for handling posts
│   │   └── authAction.js              # Action for authentication
│   ├── /dataAccess                    # Data access layer, includes repositories and validations
│   │   ├── DATA_ACCESS.md             # Documentation for the data access layer
│   │   ├── /repositories              # Repositories for database interaction
│   │   │   ├── userRepository.js      # Repository for user data
│   │   │   ├── postRepository.js      # Repository for post data
│   │   │   └── authRepository.js      # Repository for auth data
│   │   ├── /validations               # Validation logic for each data model
│   │       ├── /tests                 # Tests for validations
│   │       ├── userValidation.js      # Validation for user inputs
│   │       ├── postValidation.js      # Validation for post inputs
│   ├── /routes                        # Definitions of routes
│   │   ├── ROUTES.md                  # Documentation for routes
│   │   ├── /tests                     # Tests for routes
│   │   ├── userRoutes.js              # Routes for user-related operations
│   │   ├── postRoutes.js              # Routes for post-related operations
│   │   └── adminRoutes.js             # Routes for admin-related operations
│   ├── /services                      # Business logic and interactions with APIs
│   │   ├── SERVICES.md                # Documentation for services
│   │   ├── /tests                     # Tests for services
│   │   ├── currencyRateService.js     # Service for fetching currency rates
│   │   └── geoService.js              # Service for geographical data
│   ├── /middlewares                   # Middleware for processing requests
│   │   ├── MIDDLEWARES.md             # Documentation for middlewares
│   │   ├── /tests                     # Tests for middlewares
│   │   └── authMiddleware.js          # Middleware for authentication
│   ├── /mailers                       # Mailers
│   │   ├── MAILERS.md                 # Documentation for mailers
│   │   ├── /tests                     # Tests for mailers
│   │   ├── users/createMailer.js      # Mailer for user creation
│   │   └── auth/registrationMailer.js # Mailer for user registration
│   ├── /jobs                          # Background jobs
│   │   ├── JOBS.md                    # Documentation for jobs
│   │   ├── /tests                     # Tests for jobs
│   │   └── currencyRateJob.js         # Job for updating currency rates
│   ├── /utils                         # Utility functions and helpers
│   │   ├── UTILS.md                   # Documentation for utilities
│   │   ├── /tests                     # Tests for utilities
│   │   └── dateUtils.js               # Utility for handling dates
│   └── index.js                       # Entry point (server startup)
├── /config                            # Configuration files
│   └── CONFIG.md                      # Documentation for configuration
├── /docs                              # Documentation
│   ├── DOCS.md                        # Documentation overview
│   ├── API.md                         # API documentation
│   ├── README.md                      # Project overview and setup
├── package.json                       # Project description and dependencies
└── README.md                          # Main project documentation
```

---

### License

[MIT](https://choosealicense.com/licenses/mit/)

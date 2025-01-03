# Routing

## Main Application File

The application starts with the `src/index.ts` file. Here, routing is configured and routes are used with the `app.use(getRoutes());` function:

```javascript
import cors from "cors";
import cookieParser from "cookie-parser";
import getRoutes from "./routes"; // <<< IMPORT ROUTES

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(getRoutes()); // <<< USE ROUTES

app.listen(4000, () => {
  console.log(`Server is running on port: 4000`);
});
```

## Routing

The router defines all routes available in the application. The `get` and `post` functions are used to define routes.

### Routing Functions

- `get("/URL", "scope#action")` - defines a route for an HTTP GET request.
- `post("/URL", "scope#action")` - defines a route for an HTTP POST request.

### Scopes

Scopes allow grouping routes that can share common middleware.

Syntax:

```javascript
scope(
  "scopeName",
  () => {
    YOUR_ROUTES_HERE;
  },
  { withMiddlewares: [middleware1, middleware2] }
);
```

### Usage Example

```javascript
import { authenticate } from "./middlewares/auth";
import { validateUser } from "./middlewares/validation";
import { logRequest } from "./middlewares/logging";

const apiScopeMiddlewares = [authenticate, logRequest];
const adminScopeMiddlewares = [authenticate];

// Apply middleware to all routes within scope
scope(
  "admin",
  () => {
    // These routes will require authentication
    get("/users", "users#index");
    post("/users", "users#create");

    // This route will require both authentication and validation
    post("/users/:id", "users#update", {
      withMiddlewares: [validateUser],
    });
  },
  { withMiddlewares: adminScopeMiddlewares }
);

scope(
  "api",
  () => {
    get("/stats", "stats#index");
    get("/health", "health#check");
  },
  { withMiddlewares: apiScopeMiddlewares }
);
```

In the example above:

- Routes in the `admin` scope use the `authenticate` middleware.
- Routes in the `api` scope use the `authenticate` and `logRequest` middleware.

### Route Details

#### Example of a GET Route

```javascript
get("/users", "users#index");
```

- `get` - function to define an HTTP GET route.
- `"/users"` - the route URL.
- `"users#index"` - a string that defines the scope and the action to be executed when the route is accessed. In this case, the `index` action in the `users` scope.

The corresponding handler is located in the `/actions/users/index.ts` file.

#### Example of a POST Route

```javascript
post("/users", "users#create");
```

- `post` - function to define an HTTP POST route.
- `"/users"` - the route URL.
- `"users#create"` - a string that defines the scope and the action to be executed when the route is accessed. In this case, the `create` action in the `users` scope.

The corresponding handler is located in the `/actions/users/create.ts` file.

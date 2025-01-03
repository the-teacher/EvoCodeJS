# Роутинг

## Основной файл приложения

Приложение начинается с файла `src/index.ts`. Здесь подключается роутинг и используются маршруты с помощью функции `app.use(getRoutes());`:

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

## Роутинг

В роутере определяются все маршруты, доступные в приложении. Для определения маршрутов используются функции `get` и `post`.

### Функции роутинга

- `get("/URL", "scope#action")` - определяет маршрут для HTTP-запроса GET.
- `post("/URL", "scope#action")` - определяет маршрут для HTTP-запроса POST.

### Области видимости

Области видимости (scope) позволяют группировать маршруты, которые могут использовать общие middleware.

Синтаксис:

```javascript
scope("scopeName", () => {
    // PLACE YOUR ROUTES HERE;
  },
  { withMiddlewares: [middleware1, middleware2] }
);
```

### Пример использования

```javascript
import { authenticate } from "./middlewares/auth";
import { validateUser } from "./middlewares/validation";
import { logRequest } from "./middlewares/logging";

const apiScopeMiddlewares = [authenticate, logRequest];
const adminScopeMiddlewares = [authenticate];

// Apply middleware to all routes within scope
scope("admin", () => {
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

scope("api", () => {
    get("/stats", "stats#index");
    get("/health", "health#check");
  },
  { withMiddlewares: apiScopeMiddlewares }
);
```

В примере выше:

- Маршруты в области видимости `admin` используют middleware `authenticate`.
- Маршруты в области видимости `api` используют middleware `authenticate` и `logRequest`.

### Детали маршрутов

#### Пример маршрута GET

```javascript
get("/users", "users#index");
```

- `get` - функция для определения маршрута HTTP GET.
- `"/users"` - URL маршрута.
- `"users#index"` - строка, которая определяет область видимости и действие, которое будет выполнено при обращении к маршруту. В данном случае, действие `index` в области видимости `users`.

Соответствующий обработчик находится в файле `/actions/users/index.ts`.

#### Пример маршрута POST

```javascript
post("/users", "users#create");
```

- `post` - функция для определения маршрута HTTP POST.
- `"/users"` - URL маршрута.
- `"users#create"` - строка, которая определяет область видимости и действие, которое будет выполнено при обращении к маршруту. В данном случае, действие `create` в области видимости `users`.

Соответствующий обработчик находится в файле `/actions/users/create.ts`.

## Точка входа

Приложение начинается с файла `src/index.ts`.

Здесь мы подключаем важные модули, такие как `cors` и `cookie-parser`.

Также мы импортируем функцию `getRoutes` из директории `routes`.

Здесь настраивается роутинг, и маршруты используются с помощью функции `app.use(getRoutes());`:

```javascript
import cors from "cors";
import cookieParser from "cookie-parser";
import getRoutes from "./routes"; // <<< ИМПОРТ РОУТОВ

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(getRoutes()); // <<< ИСПОЛЬЗОВАНИЕ РОУТОВ

app.listen(4000, () => {
  console.log(`Server is running on port: 3000`);
});
```

Перейдите в раздел [routes](./routes/__ROUTES.ru.md), чтобы узнать больше о роутинге.
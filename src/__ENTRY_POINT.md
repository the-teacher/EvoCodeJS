## Entry point

The application starts with the `src/index.ts` file.

Here we import some important modules like `cors` and `cookie-parser`.

Also, we import the `getRoutes` function from the `routes` directory.

Here, routing is configured and routes are used with the `app.use(getRoutes());` function:

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
  console.log(`Server is running on port: 3000`);
});
```

Go to the [routes](./routes/__ROUTES.md) section to learn more about routing.

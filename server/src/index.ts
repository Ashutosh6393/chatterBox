import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

import http from "http";

const app = express();
const PORT = 8000;

// app.use(cors());

app.use(
    cors({
      origin: "http://localhost:5173", // Allow only this frontend origin
      credentials: true, // Allow cookies and authentication headers
    })
  );
  

app.all("/api/auth/*", toNodeHandler(auth));

// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth
app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(compression());

// Routes
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });

// Create HTTP server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"

const app = express();
app.use(cors());
const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "http://127.0.0.1:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
})
httpServer.listen(3000);
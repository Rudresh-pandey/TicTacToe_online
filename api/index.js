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
    console.log(`connected users: ${socket.id}`);

    socket.on("create_room", (data) => {
        socket.join(data);
    })

    socket.on("join_room", (data) => {
        socket.join(data);
    })

})
httpServer.listen(3000);
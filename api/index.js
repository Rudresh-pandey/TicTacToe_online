import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();

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
    socket.on("join_room", (data) => {
        console.log(data);
        socket.join(data);
    })

    socket.on("send_box", (data) => {
        console.log(data.roomId, data.boxId)
        socket.to(data.roomId).emit("received_box", data);
    })

})
if (process.env.SERVER_PORT) {
    httpServer.listen(process.env.SERVER_PORT);
}

export default httpServer;
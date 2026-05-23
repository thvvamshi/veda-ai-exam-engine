import { Server } from "socket.io";

import http from "http";

let io: Server | null = null;

export const initSocket = (httpServer: http.Server) => {
  try {
    io = new Server(httpServer, {
      cors: {
        origin: "*",

        methods: ["GET", "POST"],

        credentials: true,
      },

      transports: ["websocket", "polling"],

      pingTimeout: 60000,

      pingInterval: 25000,
    });

    io.on("connection", (socket) => {
      console.log(`Socket connected: ${socket.id}`);

    //   socket event error handling
      socket.on("join-assignment-room", (assignmentId: string) => {
        try {
          if (!assignmentId || typeof assignmentId !== "string") {
            socket.emit("socket:error", {
              message: "Invalid assignment ID",
            });

            return;
          }

          const room = `assignment:${assignmentId}`;

          socket.join(room);

          console.log(`Socket joined room: ${room}`);

          socket.emit("room:joined", {
            room,
          });
        } catch (error) {
          console.error("Join room error:", error);

          socket.emit("socket:error", {
            message: "Failed to join room",
          });
        }
      });

    //   socket event error handling
      socket.on("leave-assignment-room", (assignmentId: string) => {
        try {
          if (!assignmentId || typeof assignmentId !== "string") {
            socket.emit("socket:error", {
              message: "Invalid assignment ID",
            });

            return;
          }

          const room = `assignment:${assignmentId}`;

          socket.leave(room);

          console.log(`Socket left room: ${room}`);

          socket.emit("room:left", {
            room,
          });
        } catch (error) {
          console.error("Leave room error:", error);

          socket.emit("socket:error", {
            message: "Failed to leave room",
          });
        }
      });

    //   socket event error handling
      socket.on("error", (error) => {
        console.error(`Socket error (${socket.id}):`, error);
      });

    // Handle socket disconnection
      socket.on("disconnect", (reason) => {
        console.log(`Socket disconnected: ${socket.id}, reason: ${reason}`);
      });
    });

    console.log("Socket.IO initialized");

    return io;
  } catch (error) {
    console.error("Socket initialization failed:", error);

    throw error;
  }
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.IO not initialized");
  }

  return io;
};

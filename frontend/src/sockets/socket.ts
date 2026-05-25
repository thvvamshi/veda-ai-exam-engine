import { io } from "socket.io-client";

const socketUrl =
  import.meta.env
    .VITE_SOCKET_URL ||
  "http://localhost:5000";

export const socket = io(
  socketUrl,
  {
    transports: [
      "websocket",
    ],

    reconnection: true,

    reconnectionAttempts: 10,

    reconnectionDelay: 2000,

    autoConnect: true,
  }
);

socket.on(
  "connect",
  () => {
    console.log(
      "Socket connected"
    );
  }
);

socket.on(
  "connect_error",
  (error) => {
    console.error(
      "Socket error:",
      error.message
    );
  }
);

socket.on(
  "disconnect",
  (reason) => {
    console.warn(
      "Socket disconnected:",
      reason
    );
  }
);
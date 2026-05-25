export const env = {
  API_URL:
    import.meta.env.VITE_API_BASE_URL,

  SOCKET_URL:
    import.meta.env.VITE_SOCKET_URL,
};

if (!env.API_URL) {
  throw new Error(
    "Missing API URL"
  );
}
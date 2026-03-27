const mode = "NOproduction";

const productionUrl = process.env.REACT_APP_RAILWAY_URL;
const productionUrlBackup = process.env.REACT_APP_VERCEL_URL;

export const backendUrl =
  mode === "production"
    ? productionUrl
    : "https://server-test-original.vercel.app";

export const backendUrlBackup =
  mode === "production"
    ? productionUrlBackup
    : "https://server-test-original.vercel.app";

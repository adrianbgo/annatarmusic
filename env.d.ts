declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
      DJ_TOKEN: string;
    }
  }
}

export {};

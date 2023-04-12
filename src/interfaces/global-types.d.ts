declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACESS_TOKEN: string;
      API_URL: string;
    }
  }
}

export {};

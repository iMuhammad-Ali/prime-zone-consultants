import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Configuration interface
interface RepositoryConfig {
  baseDomain: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// Default configuration
const defaultConfig: RepositoryConfig = {
  baseDomain:
    "https://us-central1-elearning-9b8a0.cloudfunctions.net/app/user/",
  timeout: 10000, // 10 seconds
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
};

// Create the axios instance with proper typing
const createRepository = (
  config: RepositoryConfig = defaultConfig
): AxiosInstance => {
  const baseURL = `${config.baseDomain}`;

  const instance = axios.create({
    baseURL,
    timeout: config.timeout,
    headers: config.headers,
  });

  // Request interceptor for logging or adding auth tokens
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      console.log(
        `Making ${config.method?.toUpperCase()} request to: ${config.url}`
      );
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`Response received: ${response.status}`);
      return response;
    },
    (error) => {
      console.error("Response error:", error.response?.status, error.message);
      return Promise.reject(error);
    }
  );

  return instance;
};

// Export the default instance
export default createRepository();

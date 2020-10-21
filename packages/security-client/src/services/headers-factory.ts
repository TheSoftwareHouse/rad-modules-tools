import { AuthOptions } from "./service";

export const createHeadersForRequest = (authOptions?: AuthOptions) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (authOptions?.apiKey) {
    headers["x-api-key"] = authOptions?.apiKey;
  }

  if (authOptions?.accessToken) {
    headers["Authorization"] = `Bearer ${authOptions.accessToken}`;
  }

  return headers;
};

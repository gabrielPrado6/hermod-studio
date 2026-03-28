const baseURL = 'https://hermod-studio.com/bff/api.php';
// api.service.ts

type HttpMethod = 'GET' | 'POST';

interface RequestOptions {
  method: HttpMethod;
  action: string;
  data?: Record<string, any>;
}
export interface ResponseAPI<T> {
  success: boolean;
  data: T;
  error: string | null;
  timestamp: string;
}


class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Método genérico para chamadas HTTP
   * @param method - 'GET' ou 'POST'
   * @param action - valor que será enviado como query param `?action=...`
   * @param data - dados para body (POST) ou query string (GET)
   * @returns Promise com a resposta JSON
   */
  private async request<T = any>(method: HttpMethod, action: string, data?: Record<string, any>): Promise<T> {
    const url = new URL(this.baseURL);
    url.searchParams.append('acao', action);

    // Se for GET e houver dados, converte para query params
    if (method === 'GET' && data) {
      Object.entries(data).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method === 'POST' && data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Método público GET
  public get<T = any>(action: string, params?: Record<string, any>): Promise<T> {
    return this.request<T>('GET', action, params);
  }

  // Método público POST
  public post<T = any>(action: string, body?: Record<string, any>): Promise<T> {
    return this.request<T>('POST', action, body);
  }
}

// Exporta uma instância única com sua baseURL
export const apiService = new ApiService(baseURL);
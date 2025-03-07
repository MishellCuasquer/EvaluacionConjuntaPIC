const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';; // Ajusta según tu entorno

export const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.statusText}`);
  }
  return response.json();
};
// Obtener usuarios
export const getUsuarios = async () => {
  return fetchAPI('/usuarios');
};

// Obtener donaciones
export const getDonaciones = async () => {
  return fetchAPI('/donaciones');
};

export const getDonantes = async () => {
  return fetchAPI('/donantes');
};

export const getBeneficiarios = async () => {
  return fetchAPI('/beneficiarios');
};

export const getDonacionBeneficiario = async () => {
  return fetchAPI(`/donacionBeneficiario`);
};



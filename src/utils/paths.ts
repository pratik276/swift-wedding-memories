// Get the base path from the current URL
export const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const parts = path.split('/');
    return parts[1] || '';
  }
  return '';
};

// Create a path with the base path
export const createPath = (path: string) => {
  const basePath = getBasePath();
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath ? `/${basePath}/${cleanPath}` : `/${cleanPath}`;
};

// Get the full URL with the base path
export const getFullUrl = (path: string) => {
  if (typeof window !== 'undefined') {
    const basePath = getBasePath();
    const baseUrl = window.location.origin;
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return basePath ? `${baseUrl}/${basePath}/${cleanPath}` : `${baseUrl}/${cleanPath}`;
  }
  return path;
}; 
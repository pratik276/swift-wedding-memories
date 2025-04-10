// Get the base path from the current URL
export const getBasePath = () => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.split('/')[1] || '';
  }
  return '';
};

// Create a path with the base path
export const createPath = (path: string) => {
  const basePath = getBasePath();
  return basePath ? `/${basePath}${path}` : path;
};

// Get the full URL with the base path
export const getFullUrl = (path: string) => {
  if (typeof window !== 'undefined') {
    const basePath = getBasePath();
    const baseUrl = window.location.origin;
    return basePath ? `${baseUrl}/${basePath}${path}` : `${baseUrl}${path}`;
  }
  return path;
}; 
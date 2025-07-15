// Utility function to get the correct asset URL based on environment
export const getAssetUrl = (path) => {
  const isProduction = import.meta.env.PROD;
  const base = isProduction ? "/portfolio" : "";

  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${cleanPath}`;
};

// Helper function to get image URLs for projects
export const getProjectImages = (imagePaths) => {
  return imagePaths.map((path) => getAssetUrl(path));
};

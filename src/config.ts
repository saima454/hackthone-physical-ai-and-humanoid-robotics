// src\config.ts
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// For use in React components
export function useApiConfig() {
  const { siteConfig } = useDocusaurusContext();
  const customFields = siteConfig.customFields as {
    apiUrl?: string;
    apiKey?: string;
  };
  
  return {
    apiUrl: customFields?.apiUrl || 'web-production-0500d.up.railway.app',
    apiKey: customFields?.apiKey || 'saima1234',
  };
}

// For use outside React components (fallback values)
export const API_URL = 'https://web-production-0500d.up.railway.app';
export const API_KEY = 'saima1234';

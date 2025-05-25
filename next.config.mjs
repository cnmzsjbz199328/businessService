/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // 设置环境变量 - 添加产品API URL
  env: {
    NEXT_PUBLIC_USE_MOCK_DATA: process.env.NEXT_PUBLIC_USE_MOCK_DATA,
    NEXT_PUBLIC_GEMINI_API_URL: process.env.NEXT_PUBLIC_GEMINI_API_URL,
    NEXT_PUBLIC_PRODUCTS_API_URL: process.env.NEXT_PUBLIC_PRODUCTS_API_URL
  },
  
  // 根据环境变量决定配置
  ...(process.env.CLOUDFLARE_PAGES === 'true' 
    ? {
        output: 'export', 
        distDir: 'out', 
      }
    : {}
  ),
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
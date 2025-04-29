/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 根据环境变量决定配置
  ...(process.env.CLOUDFLARE_PAGES === 'true' 
    // Cloudflare Pages 环境配置
    ? {
        output: 'export', 
        distDir: 'out', // Cloudflare 部署使用 out 目录
      }
    // 本地或其他环境配置
    : {
        // 使用默认的 .next 目录
      }
  ),
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
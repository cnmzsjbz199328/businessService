/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 移除 swcMinify 选项，Next.js 15.3.0 已不再使用此选项
  output: 'export', // 替换 standalone，使用 export 输出静态文件
  distDir: 'public', // 指定输出目录为 public
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
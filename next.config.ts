import type { NextConfig } from 'next';

export const BASE_PATH = '/borderlands2-recoded-hub';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

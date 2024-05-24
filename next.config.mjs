/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/guilhermecds.github.io',
  assetPrefix: '/guilhermecds.github.io/',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
        basePath: false,
        statusCode: 301,
        has: [
          {
            type: 'host',
            value: 'guilhermecds.github.io',
          },
        ],
        href: '/',
      },
      {
        source: 'http://guilhermecds.github.io/:path*',
        destination: 'https://guilhermecds.github.io/:path*',
        permanent: true,
        basePath: false,
        statusCode: 301,
        has: [
          {
            type: 'host',
            value: 'guilhermecds.github.io',
          },
        ],
        href: 'https://guilhermecds.github.io/:path*',
      },
    ];
  },
};
  
export default nextConfig;
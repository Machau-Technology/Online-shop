/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: ['three'],
    // images: {
    //     dangerouslyAllowSVG: true,
    //     contentDispositionType: 'attachment',
    //     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // },
}
module.exports = nextConfig;


// const withTM = require('next-transpile-modules')(['three']);

// module.exports = withTM({
//     transpilePackages: ['three'],
//  });

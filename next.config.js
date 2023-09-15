/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: ['three'],
}
module.exports = nextConfig;


// const withTM = require('next-transpile-modules')(['three']);

// module.exports = withTM({
//     transpilePackages: ['three'],
//  });

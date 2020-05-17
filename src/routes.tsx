const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/components/Top/pages/index.tsx`)
  },
  {
    path: '/about',
    component: path.resolve(`src/components/Profile/pages/index.tsx`)
  },
  {
    path: '/posts',
    component: path.resolve(`src/components/Posts/pages/index.tsx`)
  },
  {
    path: '/posts/:id',
    component: path.resolve(`src/components/Contents/pages/index.tsx`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/components/Top/pages/404.tsx`)
  }
];
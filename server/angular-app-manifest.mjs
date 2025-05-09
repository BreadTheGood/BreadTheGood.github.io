
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/BreadTheGood.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/BreadTheGood.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 516, hash: '4090b6fa1565dc4be14161cc42fad497ee65e1c32fe330298fd0d36f2c6d3e9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '158779415c4f0bece2d9ce09b36be345f298c1e5c8a31a807ba9e26c92b71f20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17408, hash: 'c81967a6ae316b90cc6a76a710a0f7675a36d02a7f14d109a3f12ac20de7be29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

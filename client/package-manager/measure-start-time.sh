hyperfine --warmup 3 \
  'bun modules-bun/index.js' \
  'bun modules-npm/index.js' \
  'bun modules-pnpm/index.js' \
  'bun modules-yarn/index.js' \
  'node modules-bun/index.js' \
  'node modules-npm/index.js' \
  'node modules-pnpm/index.js' \
  'node modules-yarn/index.js'

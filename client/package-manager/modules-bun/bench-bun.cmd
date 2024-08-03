rem Install ptime 1.0 for Win32 from http://www.pc-tools.net/
bun -v
bun pm cache rm && ptime bun install
bun pm cache rm && rm -rf node_modules && ptime bun install
rm -rf node_modules && ptime bun install
ptime bun install

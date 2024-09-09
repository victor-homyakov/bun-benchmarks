rm -rf node_modules
rm -f bun.lockb

rem Install ptime 1.0 for Win32 from http://www.pc-tools.net/
bun -v
rem холодная первая установка
bun pm cache rm && ptime bun install
rem горячая первая установка
bun pm cache rm && rm -rf node_modules && ptime bun install
rem переустановка
rm -rf node_modules && ptime bun install
rem валидация
ptime bun install

rem Install ptime 1.0 for Win32 from http://www.pc-tools.net/
node -v && npm -v
rem холодная первая установка
npm cache clean --force && ptime npm install
rem горячая первая установка
npm cache clean --force && rm -rf node_modules && ptime npm install
rem переустановка
rm -rf node_modules && ptime npm install
rem валидация
ptime npm install

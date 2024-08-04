# MacBook M1

## npm 8.19.3

```
$ npm -v
8.19.3

# холодная первая установка
$ npm cache clean --force && time npm install
npm install  45,10s user 15,88s system 37% cpu 2:42,19 total

# горячая первая установка
$ npm cache clean --force && rm -rf node_modules && time npm install
npm install  23,64s user 9,87s system 124% cpu 26,811 total

# переустановка
$ rm -rf node_modules && time npm install
npm install  18,55s user 10,31s system 123% cpu 23,404 total

# валидация
$ time npm install
npm install  2,93s user 0,29s system 21% cpu 14,672 total
```

Размеры: node_modules 515000КБ, локфайл package-lock.json 1680205

## node v22.5.1 npm v10.8.2

```
# холодная первая установка
added 2058 packages, and audited 2059 packages in 3m
npm install  35,93s user 16,07s system 33% cpu 2:36,61 total

# горячая первая установка
added 2059 packages, and audited 2060 packages in 15s
npm install  10,85s user 10,16s system 142% cpu 14,794 total

# переустановка
added 2059 packages, and audited 2060 packages in 13s
npm install  9,13s user 9,49s system 138% cpu 13,436 total

# валидация
up to date, audited 2060 packages in 2s
npm install  1,68s user 0,18s system 102% cpu 1,827 total
```

Размеры: node_modules 525738КБ, локфайл package-lock.json 971489

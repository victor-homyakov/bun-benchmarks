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

## npm ci

npm 8.19.3

```
# переустановка через npm install
$ rm -rf node_modules && time npm install
npm install  18,55s user 10,31s system 123% cpu 23,404 total

# переустановка через npm ci с пустым node_modules
$ rm -rf node_modules && time npm ci
npm ci  18,74s user 11,26s system 134% cpu 22,323 total

# переустановка через npm ci с пустым node_modules, не выполняем скрипты из пакетов
$ rm -rf node_modules && time npm ci --ignore-scripts=true --audit=false --fund=false
npm ci --ignore-scripts=true --audit=false --fund=false  17,11s user 9,96s system 168% cpu 16,039 total

# здесь npm сам удаляет node_modules
$ time npm ci
npm ci  19,53s user 19,24s system 144% cpu 26,890 total
```

npm 10.8.2

```
# переустановка через npm install
$ rm -rf node_modules && time npm install
npm install  9,13s user 9,49s system 138% cpu 13,436 total

# переустановка через npm ci с пустым node_modules
$ rm -rf node_modules && time npm ci
npm ci  9,07s user 9,85s system 130% cpu 14,456 total

# переустановка через npm ci с пустым node_modules, не выполняем скрипты из пакетов
$ rm -rf node_modules && time npm ci --ignore-scripts=true --audit=false --fund=false
npm ci --ignore-scripts=true --audit=false --fund=false  7,81s user 9,19s system 221% cpu 7,681 total

# здесь npm сам удаляет node_modules
$ time npm ci
npm ci  9,34s user 16,46s system 151% cpu 16,982 total
```

## npm set progress=false

npm 8.19.3

```
# переустановка
$ rm -rf node_modules && time npm install
npm install  19,43s user 8,68s system 99% cpu 28,152 total

# валидация
$ time npm install
npm install  2,10s user 0,17s system 110% cpu 2,057 total

$ npm set progress=false

# переустановка
$ rm -rf node_modules && time npm install
npm install  18,26s user 8,38s system 123% cpu 21,591 total

# валидация
$ time npm install
npm install  2,09s user 0,18s system 112% cpu 2,014 total
```

npm 10.8.2

```
v22.5.1
10.8.2

added 2058 packages, and audited 2059 packages in 3m
npm install  31,19s user 14,59s system 28% cpu 2:39,62 total

added 2059 packages, and audited 2060 packages in 15s
npm install  10,61s user 9,97s system 140% cpu 14,691 total

added 2059 packages, and audited 2060 packages in 13s
npm install  8,72s user 9,25s system 134% cpu 13,334 total

up to date, audited 2060 packages in 2s
npm install  1,61s user 0,18s system 100% cpu 1,780 total
```

# MacBook i7

```
v22.5.1
10.8.2

added 2058 packages, and audited 2059 packages in 2m
npm install 46,30s user 27,51s system 51% cpu 2:22,03 total

added 2059 packages, and audited 2060 packages in 25s
npm install 22,75s user 20,76s system 174% cpu 24,924 total

added 2059 packages, and audited 2060 packages in 19s
npm install 17,08s user 17,95s system 179% cpu 19,501 total

up to date, audited 2060 packages in 3s
npm install 3,06s user 0,31s system 98% cpu 3,423 total
```

Размеры: node_modules 525738КБ, локфайл package-lock.json 971489

## npm set progress=false

npm 8.19.3

```
# переустановка
$ rm -rf node_modules && time npm install
npm install  49,00s user 20,79s system 137% cpu 50,668 total

# валидация
$ time npm install
npm install  8,97s user 0,77s system 119% cpu 8,123 total

$ npm set progress=false

# переустановка
$ rm -rf node_modules && time npm install
npm install  45,53s user 18,71s system 135% cpu 47,310 total

# валидация
$ time npm install
npm install  8,37s user 0,71s system 119% cpu 7,595 total
```

# Windows WSL2 Ubuntu 20.04

```
v22.5.1
10.8.2

added 2058 packages, and audited 2059 packages in 3m
npm install 63.52s user 32.76s system 62% cpu 2:34.94 total

added 2058 packages, and audited 2059 packages in 48s
npm install 49.29s user 23.16s system 148% cpu 48.743 total

added 2058 packages, and audited 2059 packages in 42s
npm install 43.99s user 22.06s system 155% cpu 42.437 total

up to date, audited 2059 packages in 6s
npm install 6.55s user 0.71s system 123% cpu 5.900 total
```

Размеры: node_modules 525568КБ, локфайл package-lock.json 971489

# Windows 10

```
v22.5.1
10.8.2

added 2060 packages, and audited 2061 packages in 3m
Execution time: 167.214 s

added 2060 packages, and audited 2061 packages in 29s
Execution time: 29.503 s

added 2060 packages, and audited 2061 packages in 28s
Execution time: 28.598 s

up to date, audited 2061 packages in 3s
Execution time: 3.714 s
```

Размеры: node_modules 527777КБ, локфайл package-lock.json 999701

progress=false

```
Execution time: 87.123 s
Execution time: 28.088 s
Execution time: 3.715 s
```

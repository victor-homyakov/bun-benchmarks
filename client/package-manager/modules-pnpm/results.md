# node v22.5.1 pnpm 9.6.0

```
nvm use v22.5.1
npm i -g pnpm@9.6.0
```

## MacBook M1

```
Progress: resolved 1678, reused 0, downloaded 1678, added 1680, done
pnpm install  22,24s user 31,32s system 61% cpu 1:27,26 total

Progress: resolved 1680, reused 0, downloaded 1678, added 1680, done
pnpm install  10,35s user 17,02s system 61% cpu 44,779 total

Progress: resolved 1680, reused 1678, downloaded 0, added 1680, done
pnpm install  2,98s user 18,92s system 393% cpu 5,561 total

Already up to date
pnpm install  0,79s user 0,36s system 171% cpu 0,669 total
```

Размеры: node_modules 500772 КБ, локфайл pnpm-lock.yaml 465234

```
Progress: resolved 1678, reused 0, downloaded 1678, added 1680, done
pnpm install  25,20s user 35,70s system 52% cpu 1:55,65 total

Progress: resolved 1680, reused 0, downloaded 1678, added 1680, done
pnpm install  10,87s user 15,90s system 48% cpu 55,505 total

Progress: resolved 1680, reused 1678, downloaded 0, added 1680, done
pnpm install  3,17s user 20,87s system 421% cpu 5,708 total

Already up to date
pnpm install  0,79s user 0,37s system 173% cpu 0,667 total
```

### pnpm --prefer-offline

```
Progress: resolved 1678, reused 0, downloaded 1678, added 1680, done
pnpm install --prefer-offline  23,83s user 35,30s system 53% cpu 1:50,16 total

Progress: resolved 1680, reused 0, downloaded 1678, added 1680, done
pnpm install --prefer-offline  10,37s user 16,28s system 53% cpu 49,691 total

Progress: resolved 1680, reused 1678, downloaded 0, added 1680, done
pnpm install --prefer-offline  3,05s user 19,44s system 401% cpu 5,607 total

Already up to date
pnpm install --prefer-offline  0,79s user 0,39s system 172% cpu 0,686 total
```

Размеры: node_modules 500772 КБ, локфайл pnpm-lock.yaml 465234

```
Progress: resolved 1678, reused 0, downloaded 1678, added 1680, done
pnpm install --prefer-offline  25,71s user 35,09s system 53% cpu 1:53,53 total

Progress: resolved 1680, reused 0, downloaded 1678, added 1680, done
pnpm install --prefer-offline  12,21s user 17,29s system 38% cpu 1:16,89 total

Progress: resolved 1680, reused 1678, downloaded 0, added 1680, done
pnpm install --prefer-offline  3,04s user 20,70s system 420% cpu 5,652 total

Already up to date
pnpm install --prefer-offline  0,80s user 0,40s system 167% cpu 0,719 total
```

Размеры: node_modules 500772 КБ, локфайл pnpm-lock.yaml 465234

## MacBook i7

```
Progress: resolved 1678, reused 0, downloaded 1678, added 1680, done
pnpm install  26,58s user 34,52s system 92% cpu 1:06,04 total

Progress: resolved 1680, reused 0, downloaded 1678, added 1680, done
pnpm install  17,38s user 31,09s system 131% cpu 36,847 total

Progress: resolved 1680, reused 1678, downloaded 0, added 1680, done
pnpm install  5,84s user 14,70s system 308% cpu 6,646 total

Already up to date
pnpm install  1,47s user 0,64s system 158% cpu 1,333 total
```

Размеры: node_modules 500710 КБ, локфайл pnpm-lock.yaml 494317

## Windows WSL2 Ubuntu 20.04

```
Progress: resolved 1678, reused 0, downloaded 1677, added 1679, done
pnpm install 18.39s user 9.97s system 44% cpu 1:03.04 total

Progress: resolved 1678, reused 0, downloaded 1677, added 1679, done
pnpm install 19.08s user 9.20s system 50% cpu 56.480 total

Progress: resolved 1679, reused 1677, downloaded 0, added 1679, done
pnpm install 5.57s user 4.82s system 382% cpu 2.716 total

Already up to date
pnpm install 1.18s user 0.43s system 119% cpu 1.344 total
```

Размеры: node_modules 500777 КБ, локфайл pnpm-lock.yaml 494317

## Windows 10

```
Progress: resolved 1678, reused 0, downloaded 1677, added 1679, done
Execution time: 104.186 s

Progress: resolved 1679, reused 0, downloaded 1677, added 1679, done
Execution time: 78.307 s

Progress: resolved 1679, reused 1677, downloaded 0, added 1679, done
Execution time: 10.645 s

Already up to date
Execution time: 1.622 s
```

Размеры: node_modules 502018 КБ, локфайл pnpm-lock.yaml 494317

# pnpm 8.12.1

## MacBook M1

```
$ pnpm -v
8.12.1

# первая установка
$ pnpm store prune && time pnpm install
pnpm install  16,74s user 27,39s system 90% cpu 48,895 total

# переустановка
$ rm -rf node_modules && time pnpm install
pnpm install  4,19s user 15,18s system 417% cpu 4,636 total

# валидация
$ time pnpm install
pnpm install  1,05s user 0,32s system 174% cpu 0,779 total
```

Размеры: node_modules 487399 КБ, локфайл pnpm-lock.yaml 456389

### pnpm --prefer-offline

```
# первая установка
$ pnpm store prune && time pnpm install --prefer-offline
pnpm install --prefer-offline  14,68s user 36,59s system 214% cpu 23,857 total

# переустановка
$ rm -rf node_modules && time pnpm install --prefer-offline
pnpm install --prefer-offline  4,08s user 14,18s system 407% cpu 4,485 total

# валидация
$ time pnpm install --prefer-offline
pnpm install --prefer-offline  1,05s user 0,32s system 175% cpu 0,783 total
```

Размеры: node_modules 487767K, локфайл pnpm-lock.yaml 456389

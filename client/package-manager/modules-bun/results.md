# MacBook M1

## Bun 1.0.8

```
$ bun -v
1.0.8

# холодная первая установка
$ bun pm cache rm && time bun install
bun install  2,23s user 7,30s system 47% cpu 20,174 total

# горячая первая установка
$ bun pm cache rm && rm -rf node_modules && time bun install
bun install  1,44s user 13,90s system 103% cpu 14,827 total

# переустановка
$ rm -rf node_modules && time bun install
bun install  0,01s user 2,92s system 79% cpu 3,712 total

# валидация
$ time bun install
bun install  0,02s user 0,06s system 39% cpu 0,217 total
```

Размеры полученных артефактов: папка node_modules около 1,1ГБ, локфайл bun.lockb 679476.

## Bun 1.1.21

```
$ bun -v
1.1.21

# холодная первая установка
$ bun pm cache rm && time bun install
1671 packages installed [30.63s]
bun install  1,78s user 6,23s system 26% cpu 30,652 total

# горячая первая установка
$ bun pm cache rm && rm -rf node_modules && time bun install
1671 packages installed [5.03s]
bun install  0,88s user 12,58s system 266% cpu 5,046 total

# переустановка
$ rm -rf node_modules && time bun install
1671 packages installed [1447.00ms]
bun install  0,02s user 0,80s system 56% cpu 1,454 total

# валидация
$ time bun install
Checked 2311 installs across 1672 packages (no changes) [270.00ms]
bun install  0,02s user 0,12s system 49% cpu 0,276 total
```

Размеры полученных артефактов: папка node_modules 554820КБ, локфайл bun.lockb 684262.

```
# первая установка
$ bun pm cache rm && time bun install --backend=copyfile
1671 packages installed [12.54s]
bun install --backend=copyfile  1,12s user 18,81s system 158% cpu 12,555 total

# переустановка
$ rm -rf node_modules && time bun install --backend=copyfile
1671 packages installed [11.00s]
bun install --backend=copyfile  0,24s user 7,21s system 67% cpu 11,007 total

# валидация
$ time bun install --backend=copyfile
Checked 2311 installs across 1672 packages (no changes) [216.00ms]
bun install --backend=copyfile  0,03s user 0,11s system 60% cpu 0,231 total
```

# MacBook i7

```
$ bun -v
1.1.21

# холодная первая установка
$ bun pm cache rm && time bun install
1672 packages installed [45.02s]
bun install  3,39s user 15,39s system 41% cpu 45,082 total

# горячая первая установка
$ bun pm cache rm && rm -rf node_modules && time bun install
1672 packages installed [7.96s]
bun install  1,96s user 21,63s system 295% cpu 7,990 total

# переустановка
$ rm -rf node_modules && time bun install
1672 packages installed [2.82s]
bun install  0,05s user 1,89s system 68% cpu 2,825 total

# валидация
$ time bun install
Checked 2305 installs across 1673 packages (no changes) [663.00ms]
bun install  0,06s user 0,24s system 43% cpu 0,674 total
```

Размеры полученных артефактов: папка node_modules 545218КБ, локфайл bun.lockb 684511.

# Windows WSL2 Ubuntu 20.04

```
$ bun -v
1.1.21

# холодная первая установка
$ bun pm cache rm && time bun install
1671 packages installed [17.96s]
bun install  2.24s user 4.75s system 38% cpu 17.976 total

# горячая первая установка
$ bun pm cache rm && rm -rf node_modules && time bun install
1671 packages installed [5.46s]
bun install  0.85s user 4.41s system 96% cpu 5.463 total

# переустановка
$ rm -rf node_modules && time bun install
1671 packages installed [1485.00ms]
bun install  0.05s user 1.40s system 97% cpu 1.489 total

# валидация
$ time bun install
Checked 2297 installs across 1673 packages (no changes) [38.00ms]
bun install  0.01s user 0.03s system 112% cpu 0.041 total
```

Размеры полученных артефактов: папка node_modules 537331КБ, локфайл bun.lockb 684407.

# Windows 10

ptime 1.0 for Win32, Freeware - http://www.pc-tools.net/ Copyright(C) 2002, Jem Berkes <jberkes@pc-tools.net>

```
>bun -v
1.1.21

>bun pm cache rm && ptime bun install
1671 packages installed [60.55s]
Execution time: 60.665 s

>bun pm cache rm && rm -rf node_modules && ptime bun install
1671 packages installed [59.28s]
Execution time: 59.380 s

>bun pm cache rm && rm -rf node_modules && ptime bun install
1671 packages installed [54.60s]
Execution time: 54.703 s

>rm -rf node_modules && ptime bun install
1671 packages installed [53.74s]
Execution time: 53.864 s

>ptime bun install
Checked 2295 installs across 1673 packages (no changes) [742.00ms]
Execution time: 0.787 s
```

Размеры полученных артефактов: папка node_modules 1055МБ, локфайл bun.lockb 684487.
Внутри node_modules Bun создал папку .cache, в которой кэш тех же файлов, поэтому размер в два раза больше.

Первая установка и переустановка - процессор занят полностью, работает Antimalware Service Executable. Bun в это время занимает 6-8%. Затем антивирус успокаивается, Bun занимает около 30%.

MacBook M1:

```
$ bun -v
1.0.8

# первая установка
$ bun pm cache rm && time bun install
bun install  2,23s user 7,30s system 47% cpu 20,174 total

# ещё раз сценарий "первая установка"
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

MacBook M1:

```
$ bun -v
1.1.21

# первая установка
$ bun pm cache rm && time bun install
1671 packages installed [30.63s]
bun install  1,78s user 6,23s system 26% cpu 30,652 total

# ещё раз сценарий "первая установка"
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

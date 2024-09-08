# node v22.5.1 yarn 4.2.2

```
corepack enable
yarn -v
```

`.yarnrc.yml`:

```
nmMode: hardlinks-global
nodeLinker: node-modules
```

## MacBook M1

```
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 20s 105ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1732 packages were added to the project (+ 643.52 MiB).
➤ YN0000: └ Completed in 1m 13s
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 18s 394ms
yarn  31,74s user 33,64s system 58% cpu 1:52,51 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1732 packages were added to the project (+ 643.52 MiB).
➤ YN0000: └ Completed in 33s 272ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 15s 358ms
yarn  16,19s user 28,97s system 91% cpu 49,310 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 642ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 15s 11ms
yarn  3,90s user 25,46s system 182% cpu 16,119 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 599ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 255ms
yarn  1,68s user 0,24s system 141% cpu 1,352 total
```

Размеры: node_modules 596256 КБ, локфайл yarn.lock 628473

## MacBook i7

```
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 25s 736ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1732 packages were added to the project (+ 643.52 MiB).
➤ YN0000: └ Completed in 30s 794ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 35s 786ms
yarn 60,70s user 93,00s system 164% cpu 1:33,22 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 260ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1732 packages were added to the project (+ 643.52 MiB).
➤ YN0000: └ Completed in 30s 212ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 19s 13ms
yarn 29,21s user 49,18s system 155% cpu 50,399 total

➤ YN0000: · Yarn 4.2.2
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 258ms
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 1s 341ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 18s 501ms
yarn 7,71s user 41,30s system 236% cpu 20,706 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 260ms
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 1s 264ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 429ms
yarn 3,08s user 0,41s system 137% cpu 2,549 total
```

Размеры: node_modules 596256 КБ, локфайл yarn.lock 628473

## Windows WSL2 Ubuntu 20.04

```
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 30s 597ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1731 packages were added to the project (+ 643.35 MiB).
➤ YN0000: └ Completed in 37s 196ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 17s 946ms
yarn  42.99s user 20.25s system 73% cpu 1:26.25 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 201ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1731 packages were added to the project (+ 643.35 MiB).
➤ YN0000: └ Completed in 38s 54ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 8s 729ms
yarn  21.65s user 10.77s system 68% cpu 47.617 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 1s 97ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 8s 697ms
yarn  4.59s user 4.71s system 89% cpu 10.427 total

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 1s 69ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 363ms
yarn  2.38s user 0.38s system 133% cpu 2.075 total
```

Размеры: node_modules 588948 КБ, локфайл yarn.lock 628473

## Windows 10

```
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 40s 737ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1731 packages were added to the project (+ 643.35 MiB).
➤ YN0000: └ Completed in 49s 165ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 1m 19s

Execution time: 169.031 s

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 223ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 1731 packages were added to the project (+ 643.35 MiB).
➤ YN0000: └ Completed in 44s 887ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 13s 131ms

Execution time: 59.090 s

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 235ms
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 3s 189ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 13s 780ms

Execution time: 17.800 s

➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed in 0s 216ms
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 958ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 499ms

Execution time: 2.238 s
```

Размеры: node_modules 589019 КБ, локфайл yarn.lock 645960 (628473 если CRLF -> LF)

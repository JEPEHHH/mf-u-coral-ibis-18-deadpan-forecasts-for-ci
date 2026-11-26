# Deadpan Forecasts for Cities That Do Not Exist

One deterministic line of deadpan weather for an invented city. `main.ts` runs on Node 22.18+, needs no packages, and writes the forecast to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`). The line is checked to be non-blank UTF-8 of at most 160 characters before it is written.

Run: `node main.ts`

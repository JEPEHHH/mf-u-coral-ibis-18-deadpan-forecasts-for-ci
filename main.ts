// Deadpan Forecasts for Cities That Do Not Exist
// One deterministic broadcast line, written to the requested output path.
// No dependencies, no network, no clock, no environment secrets.

const FORECAST: string =
  "Vaposki, pop. 41,000: warm sleet through Thursday, gusts off the abandoned observatory carrying the smell of wet iron. Visibility two blocks. Dress for damp.";

function outputDirectory(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

function clampToGate(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("empty forecast would fail the gate");
  }
  if (trimmed.length > 160) {
    throw new Error(`forecast is ${trimmed.length} characters, gate allows 160`);
  }
  return trimmed;
}

function writeForecast(targetDir: string, line: string): string {
  const fs = require("node:fs") as typeof import("node:fs");
  const path = require("node:path") as typeof import("node:path");
  const target = path.join(targetDir, "entry.txt");
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(target, clampToGate(line) + "\n", "utf8");
  return target;
}

function emit(): void {
  const target = writeForecast(outputDirectory(), FORECAST);
  console.log(`wrote ${target} (${FORECAST.length} chars)`);
}

emit();

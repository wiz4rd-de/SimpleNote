#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";

const version = JSON.parse(readFileSync("package.json", "utf8")).version;

// Update tauri.conf.json
const tauriConf = readFileSync("src-tauri/tauri.conf.json", "utf8");
writeFileSync(
  "src-tauri/tauri.conf.json",
  tauriConf.replace(/"version": "[^"]+"/, `"version": "${version}"`)
);

// Update Cargo.toml
const cargoToml = readFileSync("src-tauri/Cargo.toml", "utf8");
writeFileSync(
  "src-tauri/Cargo.toml",
  cargoToml.replace(/^version = "[^"]+"/m, `version = "${version}"`)
);

console.log(`Synced version to ${version}`);

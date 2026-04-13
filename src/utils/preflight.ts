import { execSync } from "node:child_process"
import { existsSync } from "node:fs"
import { PROJECT_NAME_REGEX } from "../constants.js"

export function validateProjectName(name: string): void {
  if (!PROJECT_NAME_REGEX.test(name)) {
    throw new Error(
      `Invalid project name: "${name}"\n` +
        "Project name must start with a lowercase letter or number,\n" +
        "and contain only lowercase letters, numbers, dots, hyphens, or underscores.",
    )
  }
}

export function checkDirectoryAvailable(
  targetDir: string,
  name: string,
): void {
  if (existsSync(targetDir)) {
    throw new Error(`Directory "${name}" already exists.`)
  }
}

export function checkPnpmAvailable(): void {
  try {
    execSync("pnpm --version", { stdio: "pipe" })
  } catch {
    throw new Error(
      "pnpm is required but not found.\n" +
        "Install it: npm install -g pnpm\n" +
        "More info: https://pnpm.io/installation",
    )
  }
}

export function checkGitAvailable(): void {
  try {
    execSync("git --version", { stdio: "pipe" })
  } catch {
    throw new Error(
      "git is required but not found.\n" +
        "Install it: https://git-scm.com/downloads",
    )
  }
}

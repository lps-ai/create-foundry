import { rm } from "node:fs/promises"
import { join } from "node:path"
import { FILES_TO_REMOVE } from "../constants.js"

export async function cleanupTemplateFiles(projectDir: string): Promise<void> {
  await Promise.all(
    FILES_TO_REMOVE.map((file) =>
      rm(join(projectDir, file), { recursive: true, force: true }),
    ),
  )
}

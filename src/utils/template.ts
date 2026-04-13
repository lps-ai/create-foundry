import { downloadTemplate } from "giget"
import { TEMPLATE_REPO } from "../constants.js"
import { getGitHubToken } from "./auth.js"

export async function downloadScaffoTemplate(
  targetDir: string,
): Promise<string> {
  const token = getGitHubToken()
  const { dir } = await downloadTemplate(TEMPLATE_REPO, {
    dir: targetDir,
    auth: token,
    install: false,
    force: false,
  })
  return dir
}

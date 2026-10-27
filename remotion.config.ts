import { Config } from "@remotion/cli/config";

// Use an existing Chrome or Chromium binary instead of downloading one,
// for example in sandboxes without access to Remotion's browser download.
const browserExecutable = process.env.REMOTION_BROWSER_EXECUTABLE;
if (browserExecutable) {
  Config.setBrowserExecutable(browserExecutable);
}

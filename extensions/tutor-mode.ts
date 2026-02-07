import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { readFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";

export default function englishWorkflow(pi: ExtensionAPI) {
  let englishModeEnabled = false; // Default: OFF (user controls it)
  let workflowContent = "";
  
  // Load workflow content at startup
  try {
    const workflowPath = join(homedir(), ".agent/workflows/english_tips.md");
    workflowContent = readFileSync(workflowPath, "utf-8");
  } catch (error) {
    console.error("Failed to load English workflow:", error);
  }
  
  // Register command to enable tutor mode
  pi.registerCommand("tutor-mode", {
    description: "Enable English learning workflow",
    handler: async (args, ctx) => {
      if (args.length === 0 || args[0] === "on") {
        englishModeEnabled = true;
        ctx.ui.notify("✅ Tutor Mode ON - I'll help improve your English! 🎓", "success");
      } else if (args[0] === "off") {
        englishModeEnabled = false;
        ctx.ui.notify("Tutor Mode OFF - Focusing on coding only", "info");
      } else if (args[0] === "status") {
        const status = englishModeEnabled ? "ON ✅" : "OFF";
        ctx.ui.notify(`Tutor Mode is currently: ${status}`, "info");
      }
    },
  });
  

  
  // Inject workflow into system prompt when enabled
  pi.on("before_agent_start", async (event, ctx) => {
    if (!englishModeEnabled || !workflowContent) return;
    
    return {
      systemPrompt: event.systemPrompt + "\n\n" + workflowContent,
    };
  });
}

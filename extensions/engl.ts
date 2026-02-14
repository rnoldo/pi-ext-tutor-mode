import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import type { AutocompleteItem } from "@mariozechner/pi-tui";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

export default function englishWorkflow(pi: ExtensionAPI) {
  let englishModeEnabled = false; // Default: OFF (user controls it)
  let workflowContent = "";
  
  // Load workflow content at startup from extension/package path
  const workflowPath = join(__dirname, "..", "workflows", "english_tips.md");

  if (!existsSync(workflowPath)) {
    console.error(`[engl] Workflow file not found: ${workflowPath}`);
  } else {
    try {
      workflowContent = readFileSync(workflowPath, "utf-8");
      console.log(`[engl] Loaded workflow: ${workflowPath}`);
    } catch (error) {
      console.error(`[engl] Failed to load workflow at ${workflowPath}:`, error);
    }
  }
  
  // Register command to enable english mode
  pi.registerCommand("engl", {
    description: "Enable English learning workflow",
    getArgumentCompletions: (prefix: string): AutocompleteItem[] | null => {
      const subcommands = ["on", "off", "status"];
      const items = subcommands.map((cmd) => ({ label: cmd, value: cmd }));
      const filtered = items.filter((item) => item.value.startsWith(prefix));
      return filtered.length > 0 ? filtered : null;
    },
    handler: async (args, ctx) => {
      const subcommand = args.trim().split(/\s+/)[0];
      if (subcommand === "" || subcommand === "on") {
        englishModeEnabled = true;
        ctx.ui.notify("✅ English Mode ON - I'll help improve your English! 🎓", "success");
      } else if (subcommand === "off") {
        englishModeEnabled = false;
        ctx.ui.notify("English Mode OFF - Focusing on coding only", "info");
      } else if (subcommand === "status") {
        const status = englishModeEnabled ? "ON ✅" : "OFF";
        ctx.ui.notify(`English Mode is currently: ${status}`, "info");
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

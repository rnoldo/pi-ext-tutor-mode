# 🎓 English Mode for Pi

An English learning workflow extension for the [Pi coding agent](https://github.com/badlogic/pi). Learn and improve your English while coding!

## Features

- **Real-time English corrections** - Get instant feedback on your grammar, word choice, and phrasing
- **Native alternatives** - See how native speakers would phrase your sentences
- **Vocabulary tracking** - Automatically saves new words and phrases to daily vocabulary files
- **Review system** - Built-in daily vocabulary review + one-by-one interactive quiz (`engl review`)
- **Toggle on/off** - Switch between learning mode and fast coding mode

## Installation

### Quick Try (No Installation)
```bash
pi -e https://raw.githubusercontent.com/rnoldo/pi-ext-engl/main/extensions/engl.ts
```

### Install Permanently
```bash
# Global install (available in all projects)
pi install https://github.com/rnoldo/pi-ext-engl

# Project install (team-shared)
pi install -l https://github.com/rnoldo/pi-ext-engl
```

## Setup

No manual setup is required after installation.

The extension loads its workflow from the package itself:

```text
workflows/english_tips.md
```

## Usage

### Commands

- **`engl on`** - Enable English learning mode
- **`engl off`** - Disable (focus on coding only)
- **`engl status`** - Check current status
- **`engl review`** - Chat trigger phrase to start interactive vocabulary quiz (only when mode is ON)

### Command Notes

- Only `engl on|off|status` is supported now.
- Legacy `tutor-mode` and `eng` commands were removed.

### How It Works

When English mode is **ON** 🎓:

1. You say something in English
2. Pi corrects your grammar and suggests native alternatives
3. New vocabulary is automatically saved to `docs/vocabulary/YYYY-MM-DD.md`
4. You repeat the corrected version to practice

When English mode is **OFF** 🚀:
- No corrections or vocabulary tracking
- Fast responses focused purely on coding

### Daily Vocabulary Review

Start each session with:
```
It's a new day
```
or
```
Start a new day
```

Pi will load yesterday's vocabulary for review!

## File Structure

```
pi-ext-engl/
├── extensions/
│   └── engl.ts        # Main extension
├── workflows/
│   └── english_tips.md       # Learning workflow instructions
├── vocabulary/               # Example vocabulary structure
│   └── 2026-02-06.md
├── package.json
└── README.md
```

## Example Session

```
You: engl on
Pi: ✅ English Mode ON - I'll help improve your English! 🎓

You: I still wondering if this can works?
Pi: 
### English Tips 🎓

**Your version:** "I still wondering if this can works?"

**Native:** "I'm still wondering if this can work?"

**Tips:**
- "I still wondering" → "I'm still wondering" (need "am")
- "can works" → "can work" (modal verb + base form)

📝 Recording "I'm still wondering" to today's vocabulary!

**Please repeat the native version!**

You: I'm still wondering if this can work?
Pi: Perfect! 🎉

[Now continues with your coding task...]
```

## Configuration

Workflow source:
```text
workflows/english_tips.md
```

Vocabulary files are saved to:
```text
docs/vocabulary/YYYY-MM-DD.md
```

## Troubleshooting

### `engl` command conflict
If you see a conflict like:
```
Command "/engl" conflicts with ...
```
it usually means the extension is loaded twice (for example both as a package and as a local file in `~/.pi/agent/extensions/`).

Fix:
1. Keep only one source of truth (recommended: installed package)
2. Remove duplicate local file if present:
   ```bash
   rm ~/.pi/agent/extensions/engl.ts
   ```
3. Restart Pi

## Contributing

Issues and PRs welcome! This is a learning tool, so suggestions for improvement are especially appreciated.

## License

MIT

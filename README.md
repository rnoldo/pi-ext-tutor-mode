# 🎓 Tutor Mode for Pi

An English learning workflow extension for the [Pi coding agent](https://github.com/badlogic/pi). Learn and improve your English while coding!

## Features

- **Real-time English corrections** - Get instant feedback on your grammar, word choice, and phrasing
- **Native alternatives** - See how native speakers would phrase your sentences
- **Vocabulary tracking** - Automatically saves new words and phrases to daily vocabulary files
- **Review system** - Built-in daily vocabulary review
- **Toggle on/off** - Switch between learning mode and fast coding mode

## Installation

### Quick Try (No Installation)
```bash
pi -e https://raw.githubusercontent.com/yourusername/pi-ext-tutor-mode/main/extensions/tutor-mode.ts
```

### Install Permanently
```bash
# Global install (available in all projects)
pi install https://github.com/yourusername/pi-ext-tutor-mode

# Project install (team-shared)
pi install -l https://github.com/yourusername/pi-ext-tutor-mode
```

## Setup

After installation, you need to set up the workflow file:

1. Create the workflows directory:
   ```bash
   mkdir -p ~/.agent/workflows
   ```

2. Copy the workflow file:
   ```bash
   cp ~/.pi/agent/git/github.com/yourusername/pi-ext-tutor-mode/workflows/english_tips.md ~/.agent/workflows/
   ```

## Usage

### Commands

- **`tutor-mode on`** - Enable English learning mode
- **`tutor-mode off`** - Disable (focus on coding only)
- **`tutor-mode status`** - Check current status

### Backward Compatibility

The old commands still work:
- `english-on` → Same as `tutor-mode on`
- `english-off` → Same as `tutor-mode off`

### How It Works

When tutor mode is **ON** 🎓:

1. You say something in English
2. Pi corrects your grammar and suggests native alternatives
3. New vocabulary is automatically saved to `docs/vocabulary/YYYY-MM-DD.md`
4. You repeat the corrected version to practice

When tutor mode is **OFF** 🚀:
- No corrections or vocabulary tracking
- Fast responses focused purely on coding

### Daily Vocabulary Review

Start each session with:
```
又是新的一天
```

Pi will load yesterday's vocabulary for review!

## File Structure

```
pi-ext-tutor-mode/
├── extensions/
│   └── tutor-mode.ts         # Main extension
├── workflows/
│   └── english_tips.md       # Learning workflow instructions
├── vocabulary/               # Example vocabulary structure
│   └── 2026-02-06.md
├── package.json
└── README.md
```

## Example Session

```
You: tutor-mode on
Pi: ✅ Tutor Mode ON - I'll help improve your English! 🎓

You: I still wondering if this can works?
Pi: 
### English Tips 🎓

**Your version:** "I still wondering if this can works?"

**Native / Idiomatic version:** "I'm still wondering if this can work?"

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

The extension looks for the workflow file at:
```
~/.agent/workflows/english_tips.md
```

Vocabulary files are saved to:
```
docs/vocabulary/YYYY-MM-DD.md
```

## Contributing

Issues and PRs welcome! This is a learning tool, so suggestions for improvement are especially appreciated.

## License

MIT

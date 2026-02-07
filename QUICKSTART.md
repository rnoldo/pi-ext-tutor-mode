# Quick Start Guide

## 1. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `pi-ext-tutor-mode`
3. **Don't** initialize with README (we already have one)
4. Copy the repository URL

## 2. Push to GitHub

```bash
cd ~/pi-ext-tutor-mode

git remote add origin https://github.com/rnoldo/pi-ext-tutor-mode.git
git branch -M main
git push -u origin main
```

## 3. Update README

After pushing, verify the URLs in `README.md` and `package.json` point to:
- `https://github.com/rnoldo/pi-ext-tutor-mode`
- `https://raw.githubusercontent.com/rnoldo/pi-ext-tutor-mode/main/...`

## 4. Test Installation

Anyone can now install it with:

```bash
# Quick try
pi -e https://raw.githubusercontent.com/rnoldo/pi-ext-tutor-mode/main/extensions/tutor-mode.ts

# Permanent install
pi install https://github.com/rnoldo/pi-ext-tutor-mode
```

## 5. Post-Install Setup

Users need to copy the workflow file:

```bash
mkdir -p ~/.agent/workflows
cp ~/.pi/agent/git/github.com/rnoldo/pi-ext-tutor-mode/workflows/english_tips.md ~/.agent/workflows/
```

## Optional: Auto-setup Script

Consider adding a setup script for easier installation. Users would run:

```bash
pi install https://github.com/rnoldo/pi-ext-tutor-mode
~/.pi/agent/git/github.com/rnoldo/pi-ext-tutor-mode/setup.sh
```

---

## What's in the Package

```
pi-ext-tutor-mode/
├── extensions/
│   └── tutor-mode.ts          # Main extension file
├── workflows/
│   └── english_tips.md        # Workflow instructions for the LLM
├── vocabulary/
│   └── 2026-02-06.md          # Example vocabulary file
├── package.json               # Pi package manifest
├── README.md                  # User documentation
├── CHANGELOG.md               # Version history
├── LICENSE                    # MIT License
└── .gitignore                 # Git ignore rules
```

## Next Steps

1. **Test it locally** first:
   ```bash
   pi -e ~/pi-ext-tutor-mode/extensions/tutor-mode.ts
   ```

2. **Create GitHub repo** and push

3. **Share with others!** 🎉

4. **Optional**: Submit to the [Pi package gallery](https://shittycodingagent.ai/packages) by adding the `pi-package` keyword (already included in package.json)

# Changelog

All notable changes to the English Mode extension will be documented in this file.

## [2.0.0] - 2026-02-14

### Changed
- **Breaking**: Renamed plugin from "Tutor Mode" to "English Mode" (`pi-ext-eng`)
- **Breaking**: Changed command from `tutor-mode` to `eng`
- **Breaking**: Changed command `tutor mode review` to `eng review`
- Updated all documentation and examples to use new terminology

## [1.1.0] - 2026-02-07

### Changed
- **Breaking**: Changed command terminology from "English Mode" to "Tutor Mode" for consistency
- **Breaking**: Daily review trigger changed from Chinese "又是新的一天" to English "It's a new day" or "Start a new day"
- Updated all documentation to reflect new command naming
- Improved internationalization by using English-only triggers

### Backward Compatibility
- Legacy commands (`english-on/off`) still work but are deprecated

## [1.0.0] - 2026-02-06

### Added
- Initial release
- `tutor-mode on/off/status` commands for controlling English learning mode
- Automatic vocabulary tracking to daily markdown files
- Real-time English corrections and native alternatives
- Integration with Pi coding agent's event system
- Backward compatibility with `english-on/off` commands

### Features
- Toggle learning mode without restarting Pi
- Persistent state across sessions
- Daily vocabulary review support
- Workflow injection into system prompt when enabled

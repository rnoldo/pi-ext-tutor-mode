# 🎓 Pi English Mode（中文说明）

这是一个面向 [Pi coding agent](https://github.com/badlogic/pi) 的英语学习扩展：你可以一边写代码，一边提升英文表达。

## 功能特性

- **实时英语纠正**：及时指出语法、用词和表达问题
- **更地道表达**：给出更自然的英文替代表达
- **词汇追踪**：自动把新词/短语保存到每日词汇文件
- **复习系统**：支持每日词汇复习 + 一题一题的互动测验（`eng review`）
- **模式切换**：可在学习模式与纯编码模式间切换

## 安装

### 快速试用（不安装）

```bash
pi -e https://raw.githubusercontent.com/rnoldo/pi-ext-eng/main/extensions/eng.ts
```

### 永久安装

```bash
# 全局安装（所有项目可用）
pi install https://github.com/rnoldo/pi-ext-eng

# 项目安装（团队共享）
pi install -l https://github.com/rnoldo/pi-ext-eng
```

## 初始化配置

安装后无需手动复制 workflow 文件。

扩展会直接从包内读取：

```text
workflows/english_tips.md
```

## 使用方式

### 命令

- `eng on`：开启学习模式
- `eng off`：关闭学习模式（专注编码）
- `eng status`：查看当前状态
- `eng review`：在聊天中触发互动词汇测验（仅 English Mode 开启时）

### 命令说明

- 当前仅支持 `eng on|off|status`
- 旧命令 `tutor-mode` 已移除

### 工作机制

当 English Mode **ON** 时：

1. 你用英语提出需求
2. Pi 先纠正表达并给出更地道版本
3. 新词自动写入 `docs/vocabulary/YYYY-MM-DD.md`
4. 你复述后，再继续执行编码任务

当 English Mode **OFF** 时：

- 不进行英语纠正和词汇记录
- 以编码效率为优先

## 每日复习触发

可在会话开始时输入：

```text
It's a new day
```

或

```text
Start a new day
```

Pi 会读取“昨天”的词汇文件并开始复习。

## 目录结构

```text
pi-ext-eng/
├── extensions/
│   └── eng.ts
├── workflows/
│   └── english_tips.md
├── vocabulary/
│   └── 2026-02-06.md
├── package.json
└── README.md
```

## 配置位置

workflow 文件来源：

```text
workflows/english_tips.md
```

词汇文件保存路径：

```text
docs/vocabulary/YYYY-MM-DD.md
```

## 故障排查

### 出现 `eng` 命令冲突

如果看到类似报错：

```text
Command "/eng" conflicts with ...
```

通常是扩展被加载了两次（例如既通过 package 安装，又在 `~/.pi/agent/extensions/` 放了同名本地文件）。

处理方法：

1. 只保留一个来源（推荐：保留 package 安装版本）
2. 删除重复本地文件（如果存在）：

```bash
rm ~/.pi/agent/extensions/eng.ts
```

3. 重启 Pi

## 贡献

欢迎提交 Issue 和 PR。这个项目是学习工具，非常欢迎改进建议。

## 许可证

MIT

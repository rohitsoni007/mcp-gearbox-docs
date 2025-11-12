---
title: Claude Code Integration
sidebar_label: Claude Code
sidebar_position: 8
---

# Claude Code Integration

## Overview

Claude Code is Anthropic's AI assistant integrated into development environments, providing intelligent code suggestions and explanations. The MCP Gearbox CLI provides seamless integration with Claude Code, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Claude Code.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Claude Code
* **Global Configuration**: Set up MCP servers for Claude Code across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Claude Code
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Claude Code, ensure you have:

1. Installed Claude Code extension in your IDE
2. Set up your Anthropic account and API key
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Claude Code globally:

```bash
mcp init -a claude
```

This command will:
1. Detect your Claude Code installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Claude Code

### Project-Specific Configuration

To configure MCP servers for Claude Code in a specific project:

```bash
mcp init . -a claude
```

Or for a new project directory:

```bash
mcp init my-project -a claude
```

### Direct Server Configuration

To directly configure specific MCP servers for Claude Code without interactive selection:

```bash
# Using space-separated server names
mcp init -a claude --servers "git filesystem"

# Using multiple option flags
mcp init -a claude -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Claude Code:

```bash
# List global configuration
mcp list -a claude

# List project-specific configuration
mcp list -a claude -p .

# List with JSON output
mcp list -a claude --json
```

### Removing Configurations

To remove MCP servers configured for Claude Code:

```bash
# Interactive removal
mcp rm -a claude

# Remove specific servers
mcp rm git filesystem -a claude

# Remove all servers
mcp rm --all -a claude

# Force removal without confirmation
mcp rm git filesystem -a claude --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Claude Code are stored in the standard Claude Code configuration directory
2. **Project-Level Support**: Claude Code supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with Claude Code; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Claude Code is not installed, ensure you have:
   - Installed Claude Code extension in your IDE
   - Set up your Anthropic account and API key

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a claude`
   - Restart your IDE to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Claude Code

### Checking Installation

To verify that Claude Code is properly detected by MCP Gearbox:

```bash
mcp check -a claude
```

This command will show whether Claude Code is installed and accessible to the MCP Gearbox CLI.
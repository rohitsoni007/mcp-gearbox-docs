---
title: GitHub Copilot Integration
sidebar_label: GitHub Copilot
sidebar_position: 3
---

# GitHub Copilot Integration

## Overview

GitHub Copilot is an AI-powered code completion tool that helps developers write code faster by suggesting relevant code snippets in real-time. The MCP Gearbox CLI provides seamless integration with GitHub Copilot, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with GitHub Copilot.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for GitHub Copilot
* **Global Configuration**: Set up MCP servers for GitHub Copilot across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using GitHub Copilot
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for GitHub Copilot, ensure you have:

1. Installed GitHub Copilot extension in your IDE
2. Activated your GitHub Copilot subscription
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for GitHub Copilot globally:

```bash
mcp init -a copilot
```

This command will:
1. Detect your GitHub Copilot installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for GitHub Copilot

### Project-Specific Configuration

To configure MCP servers for GitHub Copilot in a specific project:

```bash
mcp init . -a copilot
```

Or for a new project directory:

```bash
mcp init my-project -a copilot
```

### Direct Server Configuration

To directly configure specific MCP servers for GitHub Copilot without interactive selection:

```bash
# Using space-separated server names
mcp init -a copilot --servers "git filesystem"

# Using multiple option flags
mcp init -a copilot -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for GitHub Copilot:

```bash
# List global configuration
mcp list -a copilot

# List project-specific configuration
mcp list -a copilot -p .

# List with JSON output
mcp list -a copilot --json
```

### Removing Configurations

To remove MCP servers configured for GitHub Copilot:

```bash
# Interactive removal
mcp rm -a copilot

# Remove specific servers
mcp rm git filesystem -a copilot

# Remove all servers
mcp rm --all -a copilot

# Force removal without confirmation
mcp rm git filesystem -a copilot --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for GitHub Copilot are stored in the standard GitHub Copilot configuration directory
2. **Project-Level Support**: GitHub Copilot supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with GitHub Copilot; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that GitHub Copilot is not installed, ensure you have:
   - Installed GitHub Copilot extension in your IDE
   - Activated your GitHub Copilot subscription
   - Logged in to GitHub Copilot

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a copilot`
   - Restart your IDE to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with GitHub Copilot

### Checking Installation

To verify that GitHub Copilot is properly detected by MCP Gearbox:

```bash
mcp check -a copilot
```

This command will show whether GitHub Copilot is installed and accessible to the MCP Gearbox CLI.
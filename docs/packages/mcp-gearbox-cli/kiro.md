---
title: Kiro Integration
sidebar_label: Kiro
sidebar_position: 6
---

# Kiro Integration

## Overview

Kiro is an AI-powered coding assistant that helps developers write, debug, and refactor code more efficiently. The MCP Gearbox CLI provides seamless integration with Kiro, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Kiro.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Kiro
* **Global Configuration**: Set up MCP servers for Kiro across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Kiro
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Kiro, ensure you have:

1. Installed Kiro extension in your IDE
2. Set up your Kiro account and preferences
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Kiro globally:

```bash
mcp init -a kiro
```

This command will:
1. Detect your Kiro installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Kiro

### Project-Specific Configuration

To configure MCP servers for Kiro in a specific project:

```bash
mcp init . -a kiro
```

Or for a new project directory:

```bash
mcp init my-project -a kiro
```

### Direct Server Configuration

To directly configure specific MCP servers for Kiro without interactive selection:

```bash
# Using space-separated server names
mcp init -a kiro --servers "git filesystem"

# Using multiple option flags
mcp init -a kiro -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Kiro:

```bash
# List global configuration
mcp list -a kiro

# List project-specific configuration
mcp list -a kiro -p .

# List with JSON output
mcp list -a kiro --json
```

### Removing Configurations

To remove MCP servers configured for Kiro:

```bash
# Interactive removal
mcp rm -a kiro

# Remove specific servers
mcp rm git filesystem -a kiro

# Remove all servers
mcp rm --all -a kiro

# Force removal without confirmation
mcp rm git filesystem -a kiro --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Kiro are stored in the standard Kiro configuration directory
2. **Project-Level Support**: Kiro supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with Kiro; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Kiro is not installed, ensure you have:
   - Installed Kiro extension in your IDE
   - Set up your Kiro account and preferences

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a kiro`
   - Restart your IDE to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Kiro

### Checking Installation

To verify that Kiro is properly detected by MCP Gearbox:

```bash
mcp check -a kiro
```

This command will show whether Kiro is installed and accessible to the MCP Gearbox CLI.
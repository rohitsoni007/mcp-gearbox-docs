---
title: Continue Integration
sidebar_label: Continue
sidebar_position: 5
---

# Continue Integration

## Overview

Continue is an open-source autopilot for software development that brings AI-powered code assistance directly to your IDE. The MCP Gearbox CLI provides seamless integration with Continue, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Continue.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Continue
* **Global Configuration**: Set up MCP servers for Continue across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Continue
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Continue, ensure you have:

1. Installed Continue extension in your IDE
2. Configured your AI model preferences in Continue
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Continue globally:

```bash
mcp init -a continue
```

This command will:
1. Detect your Continue installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Continue

### Project-Specific Configuration

To configure MCP servers for Continue in a specific project:

```bash
mcp init . -a continue
```

Or for a new project directory:

```bash
mcp init my-project -a continue
```

### Direct Server Configuration

To directly configure specific MCP servers for Continue without interactive selection:

```bash
# Using space-separated server names
mcp init -a continue --servers "git filesystem"

# Using multiple option flags
mcp init -a continue -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Continue:

```bash
# List global configuration
mcp list -a continue

# List project-specific configuration
mcp list -a continue -p .

# List with JSON output
mcp list -a continue --json
```

### Removing Configurations

To remove MCP servers configured for Continue:

```bash
# Interactive removal
mcp rm -a continue

# Remove specific servers
mcp rm git filesystem -a continue

# Remove all servers
mcp rm --all -a continue

# Force removal without confirmation
mcp rm git filesystem -a continue --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Continue are stored in the standard Continue configuration directory
2. **Project-Level Support**: Continue supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with Continue; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Continue is not installed, ensure you have:
   - Installed Continue extension in your IDE
   - Configured your AI model preferences in Continue

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a continue`
   - Restart your IDE to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Continue

### Checking Installation

To verify that Continue is properly detected by MCP Gearbox:

```bash
mcp check -a continue
```

This command will show whether Continue is installed and accessible to the MCP Gearbox CLI.
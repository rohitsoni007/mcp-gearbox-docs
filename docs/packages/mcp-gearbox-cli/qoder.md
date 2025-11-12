---
title: Qoder Integration
sidebar_label: Qoder
sidebar_position: 9
---

# Qoder Integration

## Overview

Qoder is an AI-powered coding assistant designed to help developers write, debug, and optimize code more efficiently. The MCP Gearbox CLI provides integration with Qoder, enabling you to configure and manage Model Context Protocol (MCP) servers for use with Qoder.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Qoder
* **Global Configuration**: Set up MCP servers for Qoder across your entire system
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Important Note

Qoder does not support project-level MCP configuration. All MCP configurations for Qoder are global.

## Prerequisites

Before configuring MCP servers for Qoder, ensure you have:

1. Installed Qoder application or extension
2. Set up your Qoder account and preferences
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Qoder globally:

```bash
mcp init -a qoder
```

This command will:
1. Detect your Qoder installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Qoder

### Direct Server Configuration

To directly configure specific MCP servers for Qoder without interactive selection:

```bash
# Using space-separated server names
mcp init -a qoder --servers "git filesystem"

# Using multiple option flags
mcp init -a qoder -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Qoder:

```bash
# List global configuration
mcp list -a qoder

# List with JSON output
mcp list -a qoder --json
```

### Removing Configurations

To remove MCP servers configured for Qoder:

```bash
# Interactive removal
mcp rm -a qoder

# Remove specific servers
mcp rm git filesystem -a qoder

# Remove all servers
mcp rm --all -a qoder

# Force removal without confirmation
mcp rm git filesystem -a qoder --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Qoder are stored in the standard Qoder configuration directory
2. **No Project-Level Support**: Qoder does not support project-level MCP configuration
3. **Server Compatibility**: Not all MCP servers may be compatible with Qoder; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Qoder is not installed, ensure you have:
   - Installed Qoder application or extension
   - Set up your Qoder account and preferences

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a qoder`
   - Restart Qoder to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Qoder

### Checking Installation

To verify that Qoder is properly detected by MCP Gearbox:

```bash
mcp check -a qoder
```

This command will show whether Qoder is installed and accessible to the MCP Gearbox CLI.
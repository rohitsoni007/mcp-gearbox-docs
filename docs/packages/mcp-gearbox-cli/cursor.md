---
title: Cursor Integration
sidebar_label: Cursor
sidebar_position: 7
---

# Cursor Integration

## Overview

Cursor is an AI-first code editor that combines the power of large language models with a modern development environment. The MCP Gearbox CLI provides seamless integration with Cursor, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Cursor.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Cursor
* **Global Configuration**: Set up MCP servers for Cursor across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Cursor
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Cursor, ensure you have:

1. Installed Cursor application
2. Set up your Cursor account and AI model preferences
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Cursor globally:

```bash
mcp init -a cursor
```

This command will:
1. Detect your Cursor installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Cursor

### Project-Specific Configuration

To configure MCP servers for Cursor in a specific project:

```bash
mcp init . -a cursor
```

Or for a new project directory:

```bash
mcp init my-project -a cursor
```

### Direct Server Configuration

To directly configure specific MCP servers for Cursor without interactive selection:

```bash
# Using space-separated server names
mcp init -a cursor --servers "git filesystem"

# Using multiple option flags
mcp init -a cursor -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Cursor:

```bash
# List global configuration
mcp list -a cursor

# List project-specific configuration
mcp list -a cursor -p .

# List with JSON output
mcp list -a cursor --json
```

### Removing Configurations

To remove MCP servers configured for Cursor:

```bash
# Interactive removal
mcp rm -a cursor

# Remove specific servers
mcp rm git filesystem -a cursor

# Remove all servers
mcp rm --all -a cursor

# Force removal without confirmation
mcp rm git filesystem -a cursor --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Cursor are stored in the standard Cursor configuration directory
2. **Project-Level Support**: Cursor supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with Cursor; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Cursor is not installed, ensure you have:
   - Installed Cursor application
   - Set up your Cursor account and AI model preferences

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a cursor`
   - Restart Cursor to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Cursor

### Checking Installation

To verify that Cursor is properly detected by MCP Gearbox:

```bash
mcp check -a cursor
```

This command will show whether Cursor is installed and accessible to the MCP Gearbox CLI.
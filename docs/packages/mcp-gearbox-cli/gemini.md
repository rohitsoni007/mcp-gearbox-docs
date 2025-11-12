---
title: Gemini CLI Integration
sidebar_label: Gemini CLI
sidebar_position: 11
---

# Gemini CLI Integration

## Overview

Gemini CLI is a command-line interface for Google's Gemini AI models, allowing developers to interact with Gemini directly from the terminal. The MCP Gearbox CLI provides seamless integration with Gemini CLI, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Gemini CLI.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Gemini CLI
* **Global Configuration**: Set up MCP servers for Gemini CLI across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Gemini CLI
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Gemini CLI, ensure you have:

1. Installed Gemini CLI on your system
2. Set up your Google Cloud account and API key
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Gemini CLI globally:

```bash
mcp init -a gemini
```

This command will:
1. Detect your Gemini CLI installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Gemini CLI

### Project-Specific Configuration

To configure MCP servers for Gemini CLI in a specific project:

```bash
mcp init . -a gemini
```

Or for a new project directory:

```bash
mcp init my-project -a gemini
```

### Direct Server Configuration

To directly configure specific MCP servers for Gemini CLI without interactive selection:

```bash
# Using space-separated server names
mcp init -a gemini --servers "git filesystem"

# Using multiple option flags
mcp init -a gemini -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Gemini CLI:

```bash
# List global configuration
mcp list -a gemini

# List project-specific configuration
mcp list -a gemini -p .

# List with JSON output
mcp list -a gemini --json
```

### Removing Configurations

To remove MCP servers configured for Gemini CLI:

```bash
# Interactive removal
mcp rm -a gemini

# Remove specific servers
mcp rm git filesystem -a gemini

# Remove all servers
mcp rm --all -a gemini

# Force removal without confirmation
mcp rm git filesystem -a gemini --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Gemini CLI are stored in the standard Gemini CLI configuration directory
2. **Project-Level Support**: Gemini CLI supports both global and project-level MCP configurations
3. **Server Compatibility**: Not all MCP servers may be compatible with Gemini CLI; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Gemini CLI is not installed, ensure you have:
   - Installed Gemini CLI on your system
   - Set up your Google Cloud account and API key

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a gemini`
   - Restart Gemini CLI to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Gemini CLI

### Checking Installation

To verify that Gemini CLI is properly detected by MCP Gearbox:

```bash
mcp check -a gemini
```

This command will show whether Gemini CLI is installed and accessible to the MCP Gearbox CLI.
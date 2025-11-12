---
title: Copilot CLI Integration
sidebar_label: Copilot CLI
sidebar_position: 4
---

# Copilot CLI Integration

## Overview

Copilot CLI is a command-line interface for GitHub Copilot that allows developers to interact with Copilot directly from the terminal. The MCP Gearbox CLI provides seamless integration with Copilot CLI, enabling you to easily configure and manage Model Context Protocol (MCP) servers for use with Copilot CLI.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for Copilot CLI
* **Global Configuration**: Set up MCP servers for Copilot CLI across your entire system
* **Project-Specific Setup**: Configure MCP servers for individual projects using Copilot CLI
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Prerequisites

Before configuring MCP servers for Copilot CLI, ensure you have:

1. Installed Copilot CLI on your system
2. Authenticated with GitHub Copilot
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for Copilot CLI globally:

```bash
mcp init -a copilot-cli
```

This command will:
1. Detect your Copilot CLI installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for Copilot CLI

### Project-Specific Configuration

To configure MCP servers for Copilot CLI in a specific project:

```bash
mcp init . -a copilot-cli
```

Or for a new project directory:

```bash
mcp init my-project -a copilot-cli
```

### Direct Server Configuration

To directly configure specific MCP servers for Copilot CLI without interactive selection:

```bash
# Using space-separated server names
mcp init -a copilot-cli --servers "git filesystem"

# Using multiple option flags
mcp init -a copilot-cli -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for Copilot CLI:

```bash
# List global configuration
mcp list -a copilot-cli

# List project-specific configuration
mcp list -a copilot-cli -p .

# List with JSON output
mcp list -a copilot-cli --json
```

### Removing Configurations

To remove MCP servers configured for Copilot CLI:

```bash
# Interactive removal
mcp rm -a copilot-cli

# Remove specific servers
mcp rm git filesystem -a copilot-cli

# Remove all servers
mcp rm --all -a copilot-cli

# Force removal without confirmation
mcp rm git filesystem -a copilot-cli --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for Copilot CLI are stored in the standard Copilot CLI configuration directory
2. **No Project-Level Support**: Unlike some other AI agents, Copilot CLI does not support project-level MCP configuration in the traditional sense
3. **Server Compatibility**: Not all MCP servers may be compatible with Copilot CLI; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that Copilot CLI is not installed, ensure you have:
   - Installed Copilot CLI using the official installation method
   - Added Copilot CLI to your system PATH
   - Authenticated with GitHub Copilot

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a copilot-cli`
   - Restart Copilot CLI to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with Copilot CLI

### Checking Installation

To verify that Copilot CLI is properly detected by MCP Gearbox:

```bash
mcp check -a copilot-cli
```

This command will show whether Copilot CLI is installed and accessible to the MCP Gearbox CLI.
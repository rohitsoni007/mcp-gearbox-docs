---
title: LM Studio Integration
sidebar_label: LM Studio
sidebar_position: 10
---

# LM Studio Integration

## Overview

LM Studio is a desktop application for running large language models locally on your machine. The MCP Gearbox CLI provides integration with LM Studio, enabling you to configure and manage Model Context Protocol (MCP) servers for use with LM Studio.

## Key Features

* **Direct Integration**: Configure MCP servers specifically for LM Studio
* **Global Configuration**: Set up MCP servers for LM Studio across your entire system
* **Cross-Platform Support**: Works on Windows, macOS, and Linux

## Important Note

LM Studio does not need project-level MCP configuration. All MCP configurations for LM Studio are global.

## Prerequisites

Before configuring MCP servers for LM Studio, ensure you have:

1. Installed LM Studio application
2. Downloaded and configured local language models in LM Studio
3. Installed the MCP Gearbox CLI

## Configuration

### Global Configuration

To configure MCP servers for LM Studio globally:

```bash
mcp init -a lmstudio
```

This command will:
1. Detect your LM Studio installation
2. Present an interactive menu of available MCP servers
3. Generate the appropriate configuration files for LM Studio

### Direct Server Configuration

To directly configure specific MCP servers for LM Studio without interactive selection:

```bash
# Using space-separated server names
mcp init -a lmstudio --servers "git filesystem"

# Using multiple option flags
mcp init -a lmstudio -s git -s filesystem
```

## Managing Configurations

### Listing Configured Servers

To list MCP servers configured for LM Studio:

```bash
# List global configuration
mcp list -a lmstudio

# List with JSON output
mcp list -a lmstudio --json
```

### Removing Configurations

To remove MCP servers configured for LM Studio:

```bash
# Interactive removal
mcp rm -a lmstudio

# Remove specific servers
mcp rm git filesystem -a lmstudio

# Remove all servers
mcp rm --all -a lmstudio

# Force removal without confirmation
mcp rm git filesystem -a lmstudio --force
```

## Usage Notes

1. **Configuration Location**: MCP configurations for LM Studio are stored in the standard LM Studio configuration directory
2. **No Project-Level Support**: LM Studio does not need project-level MCP configuration
3. **Server Compatibility**: Not all MCP servers may be compatible with LM Studio; check individual server documentation for compatibility information

## Troubleshooting

### Common Issues

1. **Agent Not Detected**: If the CLI reports that LM Studio is not installed, ensure you have:
   - Installed LM Studio application
   - Downloaded and configured local language models in LM Studio

2. **Configuration Not Applied**: If your MCP configuration doesn't seem to be working:
   - Verify the configuration was created successfully with `mcp list -a lmstudio`
   - Restart LM Studio to ensure it picks up the new configuration
   - Check that the MCP servers you've configured are compatible with LM Studio

### Checking Installation

To verify that LM Studio is properly detected by MCP Gearbox:

```bash
mcp check -a lmstudio
```

This command will show whether LM Studio is installed and accessible to the MCP Gearbox CLI.
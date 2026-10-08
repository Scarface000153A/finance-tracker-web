#!/bin/bash
# Exit on error
set -e

# Install Python dependencies
pip install --no-cache-dir -r requirements.txt

echo "Build completed successfully"
#!/bin/bash
# Generate config.js from template
API_BASE_URL="${API_BASE_URL:-http://localhost:8000}"
sed "s|RENDER_API_BASE_URL_PLACEHOLDER|${API_BASE_URL}|g" config.js.template > js/config.js
echo "config.js generated with API_BASE_URL=${API_BASE_URL}"
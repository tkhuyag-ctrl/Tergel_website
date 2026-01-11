#!/bin/bash

echo "🌐 Starting local web server for Tergel's Website..."
echo ""
echo "📝 Your website will be available at:"
echo "   http://localhost:8000"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000

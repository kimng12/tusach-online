#!/usr/bin/env python3
"""
Simple Python server for Tủ Sách Online
Run with: python server.py
"""

import http.server
import socketserver
import os
import urllib.parse

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Handle cart.html route
        if self.path == '/cart.html':
            self.path = '/view/cart.html'
        # Handle product-detail.html route
        elif self.path.startswith('/product-detail.html'):
            self.path = '/view' + self.path
        
        return super().do_GET()

    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

PORT = 8000

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Tủ Sách Online server running at http://localhost:{PORT}")
        print("Open your browser and go to: http://localhost:8000")
        print("Press Ctrl+C to stop the server")
        httpd.serve_forever()

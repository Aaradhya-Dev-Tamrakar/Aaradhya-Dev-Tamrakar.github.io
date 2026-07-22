#!/usr/bin/env python3
"""Lightweight local server that serves files and returns 404.html for missing pages.

Usage: python dev-serve.py [port]
"""
import http.server
import socketserver
import sys
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
ROOT = Path(__file__).resolve().parent


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404:
            try:
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(ROOT / '404.html', 'rb') as f:
                    self.wfile.write(f.read())
            except Exception:
                super().send_error(code, message, explain)
        else:
            super().send_error(code, message, explain)


if __name__ == '__main__':
    import os
    os.chdir(ROOT)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://127.0.0.1:{PORT} (serves 404.html on missing pages)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nStopping server')
            httpd.server_close()

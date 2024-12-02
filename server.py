import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
import os

# Manuelle Zuordnung von Dateierweiterungen zu MIME-Typen
MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
}


class MyHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        # Bestimmen des Dateipfads basierend auf der angeforderten URL
        file_path = self.path.strip("/") or "index.html"
        ext = os.path.splitext(file_path)[1]  # Dateiendung extrahieren

        # Prüfen, ob die Datei existiert
        if os.path.isfile(file_path):
            try:
                # MIME-Type manuell basierend auf der Dateiendung bestimmen
                content_type = MIME_TYPES.get(ext, 'application/octet-stream')

                # Dateiinhalt lesen
                with open(file_path, 'rb') as f:
                    content = f.read()

                # Erfolgreiche Antwort senden
                self.send_response(200)
                self.send_header('Content-type', content_type)
                self.end_headers()
                self.wfile.write(content)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'500: Internal Server Error')
                print(f"Error handling request: {e}")
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'404: File not found')


def run_server(server):
    print("Server started on port 8000...")
    server.serve_forever()


def stop_server(server):
    print("Stopping server...")
    server.shutdown()
    server.server_close()
    print("Server stopped.")


if __name__ == '__main__':
    server = HTTPServer(('', 8000), MyHandler)
    server_thread = threading.Thread(target=run_server, args=(server, ))
    server_thread.start()

    while True:
        command = input("Enter 'quit' to stop the server: ")
        if command.lower() == 'quit':
            stop_server(server)
            server_thread.join()
            break

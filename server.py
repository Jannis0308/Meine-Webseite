import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
import os
import socketio

# ... (Other imports and MIME_TYPES dictionary remain the same) ...

sio = socketio.Server()
app = socketio.WSGIApp(sio)

# ... (Your MyHandler class remains the same) ...


@sio.event
def connect(sid, environ):
    print('Client connected', sid)


@sio.event
def disconnect(sid):
    print('Client disconnected', sid)


@sio.event
def new_video(sid, data):
    print('New video added:', data)
    sio.emit('new-video', data, broadcast=True, namespace='/')


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

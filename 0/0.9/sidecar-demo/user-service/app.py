from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para todos los orígenes
app.url_map.strict_slashes = False  # <- Esto permite rutas con y sin slash final
@app.route("/users", methods=["GET"])
def get_users():
    return jsonify([
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ]), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)

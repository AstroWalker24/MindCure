from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/message', methods=['POST'])
def handle_message():
    data = request.json
    user_message = data.get('message', '').lower()
    
    if 'help' in user_message:
        reply = "How can I assist you further?"
    else:
        reply = "I'm here to help! Please provide more details."
    
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(debug=True)

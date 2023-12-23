from flask import Flask, g, jsonify, request
import sqlite3

app = Flask(__name__)

DATABASE = 'users.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/submit', methods=['POST'])
def submit_data():
    try:
        data = request.get_json()['data']

        # Insert data into the database
        with get_db() as conn:
            conn.execute('INSERT INTO users (Name) VALUES (?)', data)
            conn.commit()

        return jsonify({'message': f'Data "{data}" added to the database successfully.'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

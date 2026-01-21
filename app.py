signatures = {}

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Diya1madhura*",
    database="contract_management"
)

@app.route("/", methods=["GET"])
def health():
    return jsonify({"status": "Backend running"})

@app.route("/api/contracts", methods=["POST"])
def create_contract():
    try:
        data = request.json

        client_name = data.get("client_name")
        template = data.get("template")
        start_date = data.get("start_date")
        agreement_html = data.get("agreement_html")
        signature = data.get("signature")

        cursor = db.cursor()

        cursor.execute("""
            INSERT INTO contracts
            (client_name, template, start_date, status, agreement_html, signature)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (
            client_name,
            template,
            start_date,
            "Created",
            agreement_html,
            signature
        ))

        db.commit()
        cursor.close()

        return jsonify({"message": "Saved"}), 201

    except Exception as e:
        print("CREATE ERROR:", e)
        return jsonify({"error": "Save failed"}), 500



@app.route("/api/contracts", methods=["GET"])
def get_contracts():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contracts")
    rows = cursor.fetchall()
    cursor.close()

    for r in rows:
        r["signature"] = signatures.get(r["id"])

    return jsonify(rows)

@app.route("/api/contracts/<int:id>", methods=["DELETE"])
def delete_contract(id):
    try:
        cursor = db.cursor()
        cursor.execute("DELETE FROM contracts WHERE id=%s", (id,))
        db.commit()
        cursor.close()
        return jsonify({"status": "deleted"}), 200
    except Exception as e:
        print("DELETE ERROR:", e)
        return jsonify({"error": "Delete failed"}), 500
@app.route("/api/contracts/<int:id>", methods=["GET"])
def get_contract_by_id(id):
    try:
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM contracts WHERE id=%s", (id,))
        contract = cursor.fetchone()
        cursor.close()

        if not contract:
            return jsonify({"error": "Not found"}), 404

        return jsonify(contract), 200

    except Exception as e:
        print("FETCH ERROR:", e)
        return jsonify({"error": "Server error"}), 500
@app.route("/api/contracts/<int:id>", methods=["PUT"])
def update_contract_status(id):
    data = request.json
    status = data.get("status")

    cursor = db.cursor()
    cursor.execute(
        "UPDATE contracts SET status=%s WHERE id=%s",
        (status, id)
    )
    db.commit()
    cursor.close()

    return jsonify({"message": "updated"})
@app.route("/api/contracts/<int:id>", methods=["GET"])
def get_contract(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM contracts WHERE id = %s", (id,))
    contract = cursor.fetchone()
    cursor.close()

    if not contract:
        return jsonify({"error": "Contract not found"}), 404

    return jsonify(contract)

if __name__ == "__main__":
    app.run(debug=True)


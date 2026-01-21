import mysql.connector

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Diya1madhura*",
        database="contract_management"
    )

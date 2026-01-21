My site is live at https://madhurahangargi.github.io/
- FOR LOGIN : USE ANY EMAIL-ID ND PASSWORD: m
# ContractManagement
- A simple frontend-based contract management system built using HTML, CSS, and JavaScript. It allows users to create contracts, track their status, and manage the full contract lifecycle from a dashboard with a backend.
- FOR LOGIN : USE ANY EMAIL-ID ND PASSWORD: m.
  
#FEATURES:
-Creates contracts using predefined templates
-Live contract preview while filling details
-Contract lifecycle tracking: Created → Approved → Sent → Signed → Locked
-Dashboard with real-time status counts
-Floating AI Assistant available on all pages
-We can Download signed contracts as PDF
-Data stored using LocalStorage (no backend)

#Tech Stack:
1.HTML5
2.CSS3
3.Vanilla JavaScript
4.LocalStorage
5.jsPDF & html2canvas
6.SQL

IDEAS:
-This system can be easily extended to AWS-based infrastructure. The frontend can be hosted on Amazon S3 with CloudFront for scalable static delivery. The backend API can be containerized and deployed using Amazon ECS (Fargate) or EC2, while Amazon RDS (MySQL) can replace the local database for managed storage, backups, and high availability.

-Sensitive configurations can be handled using AWS Secrets Manager, and contract PDFs can be stored securely in Amazon S3. CI/CD pipelines can be implemented using GitHub Actions or AWS CodePipeline to automate deployments and updates. This design keeps the application cloud-ready while following DevOps best practices aswell.


#contract-management-app/
│
├── assets/
│   └── chatbot/
│       ├── chatbot.css        # Chatbot UI styling
│       ├── chatbot.html       # Chatbot HTML layout
│       └── chatbot.js         # Chatbot logic (open/minimize/respond)
│
├── backend/
│   ├── __pycache__/           # Python cache (auto-generated)
│   ├── app.py                 # Flask backend (APIs)
│   ├── db.py                  # MySQL DB connection
│   ├── models.sql             # Database schema (contracts table)
│   └── requirements.txt       # Backend dependencies
│
├── css/
│   └── style.css              # Global website styling
│
├── blueprints.html            # Contract templates list
├── create-contract.html       # Create new contract page
├── dashboard.html             # Contracts dashboard (list + stats)
├── index.html                 # Login page (mock login)
├── view-contract.html         # View single contract + lifecycle
│
├── sql.sql                    # Optional SQL backup / reference
├── readme.md                  # Project FILE INFO


![image Alt](https://github.com/MadhuraHangargi/madhurahangargi.github.io/blob/6418c3ca2b306672d4eeaf342c778fd55365049c/Screenshot%202026-01-22%20004701.png)
![image Alt](https://github.com/MadhuraHangargi/madhurahangargi.github.io/blob/f731bbf699c74ed51f2bfbd42cb318f8d72c656a/Screenshot%202026-01-22%20005837.png)
![image Alt](https://github.com/MadhuraHangargi/madhurahangargi.github.io/blob/9e11fb997786c8a5a181c461e5890006a29207ef/Screenshot%202026-01-22%20004718.png)
![image Alt](https://github.com/MadhuraHangargi/madhurahangargi.github.io/blob/3dc50ff6fea247b6a49fa614c7f6a94b530c898c/Screenshot%202026-01-22%20004646.png)
![image Alt](https://github.com/MadhuraHangargi/madhurahangargi.github.io/blob/750fdb0ebe60edfdb347bd9743b39056e6e86a1c/Screenshot%202026-01-22%20005117.png)
-The above MySQL Workbench screenshot demonstrates successful backend persistence of contract data. Signature images are intentionally not stored in the database to avoid long-term retention of sensitive personal identifiers. In accordance with data privacy and ethical handling practices, signatures are used only for runtime rendering and PDF generation, allowing users to download complete signed contracts without compromising personal data security.
#Author: Madhura Hangargi

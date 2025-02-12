Passkey Registration with Passage

📌 Overview
This project demonstrates how to register passkeys using Passage's Passkey Flex API. It allows users to create a passkey for authentication using the Passage Flex JavaScript SDK and a backend API.

⚙️ How It Works
The frontend lets users enter their email and click "Create Passkey" to start the WebAuthn registration process.
The backend generates a transaction ID, which is needed to register the passkey.
Once the passkey is created, it can be used for authentication.

✨ Features
# Passkey Registration – Users can create passkeys securely.
# Transaction ID Handling – The backend provides a transaction ID for each user.
# WebAuthn Flow – Uses WebAuthn to securely register passkeys.
🛠️ Technologies Used

# JavaScript (Frontend & Backend)
# Node.js & Express (Backend API)
# Passage Flex SDK (Authentication)
🚀 Usage
Start the backend server
sh
Copy
Edit
node server.js
Open index.html in a browser.
Enter an email and register a passkey.

# Vernan (EZ Labs) — React Single Page Application

Repository: https://github.com/theshivay/PP_assignment
Postman Collection: [Download Postman Collection](docs/postman_collection.json)

This repository contains a single-page React application (Vite + React) implementing a responsive Home page with a contact form integrated with the provided API.

The goal of the assignment
- Recreate the main landing / home page (from the provided Figma/Adobe XD) in React.
- Implement a responsive contact form (client-side validation) and integrate with the API at `https://vernanbackend.ezlab.in/api/contact-us/`.

Figma: https://www.figma.com/design/1EUuNvrVUVWuYkTG0OmpMj/EZ-Labs-Assignment?node-id=0-1&t=WoUIFHGYARdd1lg0-1

Quick links
- Project root: `.`
- Main app entry: `src/main.jsx`
- Home page: `src/pages/Home.jsx`
- Components and styles: `src/components/`, `src/styles/`

Contract (tiny)
- Input: Contact form fields (name, email, phone, message). Email is required as per assignment; form won't submit empty fields.
- Output: POST to `https://vernanbackend.ezlab.in/api/contact-us/` with JSON payload. On success API returns 200 and the UI shows "Form Submitted".
- Error modes: front-end validation errors (shown inline), network/API errors (shown as a toast/message).

Responsive targets
- 480px (mobile)
- 720px
- 1080px
- 2732x2048 (iPad)
- 1440x823 (MacBook)

API Information
- Base server: `https://vernanbackend.ezlab.in`
- Full endpoint: `https://vernanbackend.ezlab.in/api/contact-us/`
- Method: POST
- Required variables: `email` (front-end validation required). Other fields supported: `name`, `phone`, `message`.
- Example request body:

```json
{
  "email": "hsatyamrav@gmail.com",
  "name": "Amit",
  "phone": "908765498",
  "message": "kjhgcgj"
}
```

Expected example response (server-side object):

```json
{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "hsatyamrav@gmail.com",
  "id": 49,
  "message": "kjhgcgj",
  "name": "Amit",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

Front-end validation rules implemented (or expected to be implemented)
- All form fields must not be empty before submit (assignment requires no empty submissions).
- Email must match a standard email regex pattern.
- Optionally validate phone to allow numbers and common separators.

Behaviour on submit
- If validation fails, show inline errors and do not call the API.
- If validation passes, send POST request. On HTTP 200, display "Form Submitted" in the UI (and clear or disable the form as per design choice).

How to run (macOS / zsh)
1. Install dependencies

```bash
cd PP_assignment
npm install
```

2. Run dev server (Vite)

```bash
npm run dev
```

3. Open the app
- Open the URL printed by Vite (usually `http://localhost:5173`) in the browser and test responsive breakpoints.

Manual test checklist
- [ ] Try submitting with empty fields — front-end should block submission and show validation errors.
- [ ] Enter invalid email — front-end should show email validation error.
- [ ] Enter valid data and submit — request goes to API endpoint and on success the UI shows "Form Submitted".
- [ ] Test on responsive sizes: 480px, 720px, 1080px, 2732x2048, 1440x823.

Quick curl example to test API (replace body fields as needed)

```bash
curl -X POST \
  'https://vernanbackend.ezlab.in/api/contact-us/' \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","name":"Test","phone":"1234567890","message":"hello"}'
```

Postman collection
- A minimal Postman v2.1 collection is included at `docs/postman_collection.json`. Import it in Postman to test the endpoint quickly.

Git / sharing instructions (how you can create a remote repo and share link)
1. Create a new GitHub repository from the GitHub UI (or use the `gh` CLI).

2. Locally, commit and push:

```bash
cd PP_assignment
git init
git add .
git commit -m "Initial project — home page + contact form"
git remote add origin https://github.com/theshivay/PP_assignment.git
git branch -M main
git push -u origin main
```

3. Share the resulting GitHub repository URL with the evaluator.

Postman dump (export)
- `docs/postman_collection.json` is the included Postman export file. You can import it into Postman via "Import > File".

Assumptions & notes
- I recreated a responsive home page consistent with the project structure under `src/`. The assignment states focus on the main home page only; other pages are present in the project but not the target of evaluation.
- The assignment requires email to be a required field. The code should also block empty submission for other fields (defensive UX).
- I cannot push to your GitHub for you — follow the instructions above to create a GitHub repo and push. Once pushed, copy/paste the repo link and share it.

Next steps / recommended improvements
- Add unit tests for the contact form component (React Testing Library + Vitest/Jest).
- Add E2E tests (Playwright) to verify responsiveness and submission flow across breakpoints.
- Add friendly success/failure UI (non-blocking toast) and form disabled state while request is in flight.

Files added by this change
- `README.md` — this file
- `docs/postman_collection.json` — Postman collection export for import

Contact
- If you want, I can also create a GitHub repo and push if you provide a repository URL or invite an account with push permissions. Otherwise, use the steps above to push the repository and share the link.

Completion summary
- Added a README with run instructions, API details, responsive targets and testing steps. A Postman dump is included under `docs/` for quick import.

Enjoy! If you want, I can now:
- implement extra validation or add a small test suite (unit + integration), or
- create the GitHub repo and push (you must provide remote or credentials/permission).


Frontend (React + Vite)

- Frontend source: `frontend/`
- Install and run:

```bash
# from repository root
npm run frontend:install
npm run frontend:dev
```

This will run the Vite dev server in the `frontend/` folder.

Backend (Supabase placeholder)

- Backend placeholder: `backend/`
- Add Supabase integration later. Keep secrets in `.env` or GitHub Secrets.

Repository scripts (root `package.json`):

- `frontend:install` — installs frontend deps
- `frontend:dev` — runs frontend dev server
- `backend:install` — installs backend deps

Next steps for collaborators

1. You (frontend): develop UI in `frontend/src/` and push to GitHub.
2. Collaborators (backend): add Supabase setup in `backend/` later and coordinate env/secrets.
3. Use GitHub Actions or other CI to run builds if desired.

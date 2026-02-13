# Jal-Seva

Landing page and registration for **Jal-Seva** — earn more every day by distributing purified water on your rickshaw.

- **Live site:** [princebavishi.github.io/Jal-Seva](https://princebavishi.github.io/Jal-Seva/)
- **Registration:** Embedded Google Form for rickshaw owner sign-up.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

### 1. Push code to GitHub

```bash
cd "c:\Users\Prince\Downloads\project of feb\jalSeva"

git init
git add .
git commit -m "Deploy React site to GitHub Pages"
git branch -M main
git remote add origin https://github.com/princebavishi/Jal-Seva.git
git push -u origin main
```

(If the repo already exists and you only need to push: `git add .` → `git commit -m "Update"` → `git push origin main`.)

### 2. Enable GitHub Pages

1. Open **https://github.com/princebavishi/Jal-Seva**
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Save

### 3. Wait for deployment

- Go to the **Actions** tab and wait for **Deploy to GitHub Pages** to finish (green check).
- Your site will be live at: **https://princebavishi.github.io/Jal-Seva/**

- Home: `https://princebavishi.github.io/Jal-Seva/#/`
- Registration: `https://princebavishi.github.io/Jal-Seva/#/register`

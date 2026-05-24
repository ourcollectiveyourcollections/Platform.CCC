# Manual Upload Instructions

## Option 1 — GitHub web upload

1. Open `https://github.com/ourcollectiveyourcollections/Platform.CCC`.
2. Click **Add file**.
3. Upload the contents of this package root.
4. Use commit message:

```text
Initial Create Your Collective platform scaffold
```

5. Commit to `main`.

## Option 2 — Local git

```bash
git clone https://github.com/ourcollectiveyourcollections/Platform.CCC.git
cd Platform.CCC

# copy package contents into this folder, then:
git add .
git commit -m "Initial Create Your Collective platform scaffold"
git push origin main
```

## After upload

Check:

```text
README.md renders correctly.
docs/implementation_plan.md is visible.
schemas/*.json are visible.
templates/*.json are visible.
scripts/*.py are visible.
apps_script/*.gs are visible.
dashboard_widgets/*.html are visible.
examples/* are visible.
registries/*.csv are visible.
```

# Git-dokumentation för Musikstreaming-projekt

## Initiera Git och koppla till GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Axziomatic/musikstreaming
git push -u origin main

# Skapa development-branch från main

git checkout -b development
git push -u origin development

# Skapa första feature-branch från development

git checkout development
git checkout -b features/setup-html-css
git push -u origin features/setup-html-css

# Byt mellan branches

git checkout development
git checkout features/form


#Slå ihop (merge) branches

git checkout development
git merge features/form

# Struktur
# Projektet använder följande branch-struktur:

main – stabil version, endast mergas från development

development – aktiv utveckling, mergas från features

features/* – en branch per delmoment
```

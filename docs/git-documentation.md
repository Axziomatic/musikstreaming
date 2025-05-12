git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <https://github.com/Axziomatic/musikstreaming>
git push -u origin main

# Skapa development-branch från main

git checkout -b development
git push -u origin development

# Skapa första feature-branch från development

git checkout -b features/setup-html-css
git push -u origin features/setup-html-css

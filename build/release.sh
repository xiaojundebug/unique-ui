git checkout master
git merge dev

#!/usr/bin/env sh
set -e

read -p "Are you sure you want to release a new version? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  standard-version -i examples/docs/CHANGELOG.md

  git push --follow-tags origin master
  git checkout dev
  git rebase master
  git push --follow-tags origin dev

  npm run build:doc
fi
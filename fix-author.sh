#!/bin/bash

# Set the correct author information
git_name="moikab"
git_email="moikab@proton.me"

# Create the filter command
filter_command="git filter-branch -f --env-filter '
if [ \"\$GIT_AUTHOR_EMAIL\" = \"your-email@example.com\" ] || [ \"\$GIT_AUTHOR_EMAIL\" = \"seojepar@student.42seoul.kr\" ] || [ \"\$GIT_AUTHOR_NAME\" = \"별비\" ] || [ \"\$GIT_AUTHOR_NAME\" = \"dlstodfpwjsem\" ]; then
    export GIT_AUTHOR_NAME=\"$git_name\"
    export GIT_AUTHOR_EMAIL=\"$git_email\"
    export GIT_COMMITTER_NAME=\"$git_name\"
    export GIT_COMMITTER_EMAIL=\"$git_email\"
fi
' --tag-name-filter cat -- --branches --tags"

# Execute the filter command
eval "$filter_command"

# Force push the changes
echo "Changes have been made locally. To update the remote repository, run:"
echo "git push origin --force" 
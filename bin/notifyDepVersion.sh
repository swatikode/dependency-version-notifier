npm list --depth=0
npm install npx@latest
CONTENT=$(npm list --depth=0 --json > ./bin/dependencies.json)
echo $CONTENT
echo $CONTENT.dependencies
STR="Hello World!"
echo $STR
npx -p node-notifier-cli notify -t "Updates are available!" -m "Click to get more information"
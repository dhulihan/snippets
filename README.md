A collection of code snippets.

```sh
npm install
node server.js

# Mac
open http://localhost:4567

# Linux
xdg-open http://localhost:4567

# Lazy
URL="http://localhost:4567";[[ `uname -s` == 'Linux' ]] && xdg-open $URL || open $URL
```

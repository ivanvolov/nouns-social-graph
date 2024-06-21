dev:
	node data-mining/src/getNFT.js
f:
	export NODE_OPTIONS=--openssl-legacy-provider && cd frontend/ && npm run build


# nvm use 16
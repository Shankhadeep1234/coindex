# Coindex CLI in Nodejs

Command line interface written in Node.js to check cryptocurrency prices

Register the API key at https://nomics.com

## Usage of the CLI

```
npm install

npm link
```

## Commands

```
# Help and Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
```

### Version

1.0.0

### Author

Shankhadeep Bhadra

### License

MIT

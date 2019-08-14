mtr-lines-scraper
=================

Retrieve heavy rail and light rail lines and stations from [the MTR company][mtr-website] easily!

[![npm-version-badge]][npm-package] [![npm-download-badge]][npm-package] [![github-license-badge]][github-license]

## Installation


```sh
$ npm install mtr-lines-scraper
```

## Usage

### Retrieve railway data from MTR

```javascript
const { getRailwayDetails } = require("mtr-lines-scraper");

getRailwayDetails()
    .then((details) => {
        // Do whatever you want here.
        console.log(details.heavyRail);
        console.log(details.lightRail);
    });
```

### Using railway data from local cache

#### Synchronous method

```javascript
const { readFileSync } = require("fs");
const { getRailwayDetailsSync } = require("mtr-lines-scraper");

// Assume the cache does exist.
const cache = JSON.parse(readFileSync("cache.json", "utf8"));

// Retrieve railway details synchronously.
const details = getRailwayDetailsSync(cache);

// Do whatever you want here.
console.log(details.heavyRail);
console.log(details.lightRail);
```

#### Asynchronous method

```javascript
const { readFileSync } = require("fs");
const { getRailwayDetailsSync } = require("mtr-lines-scraper");

// Assume the cache does exist.
const cache = JSON.parse(readFileSync("cache.json", "utf8"));

// Retrieve railway details asynchronously.
getRailwayDetails(cache)
    .then((details) => {
        // Do whatever you want here.
        console.log(details.heavyRail);
        console.log(details.lightRail);
    });
```

[github-license]: https://github.com/JasonHK/node-mtr-lines-scraper/blob/master/LICENSE
[github-license-badge]: https://img.shields.io/github/license/JasonHK/node-mtr-lines-scraper?style=flat-square
[github-documentation]: https://github.jasonhk.net/node-mtr-lines-scraper

[npm-package]: https://www.npmjs.com/package/mtr-lines-scraper
[npm-download-badge]: https://img.shields.io/npm/dt/mtr-lines-scraper?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/mtr-lines-scraper?style=flat-square

[mtr-website]: http://www.mtr.com.hk

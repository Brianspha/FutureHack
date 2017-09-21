# geth-js

A simple Node.js controller for go-ethereum ('geth').


### Install


```
$ npm install geth-js
```


### Usage


```
var Geth = require('..');
var geth = new Geth({datadir: '/mnt/ssd/.ethereum'});


geth.start().then(function () {
	console.log('timestamp,number,size,tx_count,volume');
	geth.rpc.eth.filter('latest', function (err, block) {
		if (!err) {
			var block = geth.rpc.eth.getBlock(block);
			var txs   = block.transactions.map(tx => geth.rpc.eth.getTransaction(tx));
			block.volume = 0;
			txs.forEach((tx) => {volume += parseInt(txs.value)});
			var data = [block.timestamp,block.number, block.size, block.txs.length, block.volume];
			console.log(data.join(','));
		}
	})
})
```
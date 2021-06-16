require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture globe frown ski stool crawl punch public gown light army gate'; 
let testAccounts = [
"0x24a667cb2f9d5f326c572b9032a34317c11849b7781f52db0108f8e8afd323c2",
"0xea18002334a5dd5269d8897558d84eb48d234386e1e565f6a8d5515690ec8320",
"0x72ece3d8cfbba15977b8679d131abc783842b0bbc2711b8a9ec8b89aed4790b5",
"0xaac41fdaf70d91893d851528464a9e50685f649ce5a9166d307ec9891604838f",
"0xab2fb168a94d9d442a2667144e46f83f91e44e4f512c33f5edc3dfee651c6c1a",
"0x6e4cc41f25335f46cca7118945426ff1bd26acf52ce7e12eb22bc5fa05b0a1f2",
"0xc52f9dd37d271d06b2c852a86f979928a53098701410bcdbc5f3d729365ca28f",
"0xa9e9512a79bcc40fcc89b3a11fc69f46ea644656fab98dea90cf163e99dd7b85",
"0xb0ab912519416cce70e57d19b33705aa03af080e509e44a512f3337d2937cc1b",
"0xff5a5b41f9ac521ce228f27c7cada5cb6865c037ec08d23cdd21bfe05db081cd"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



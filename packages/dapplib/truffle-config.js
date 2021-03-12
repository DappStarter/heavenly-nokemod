require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember social hidden clock forward sight'; 
let testAccounts = [
"0xb1a6e894101363c8df54d4d867370bf4d39c498468a35319ce922f7924299b04",
"0x31425acea79893dc549261ada58962cec9805d738192571442fb2a086ad653d5",
"0xbb1b84c400c3c86af56218ec6c7b775d8034794c28c743b7c22b00307a1d42bf",
"0x44cf070508bbfbfbe03e91039869978a94c3da54cbdfa0b6ea98a7bbd146f6f1",
"0xbacb7f2545dfacaf8cca11f6e14f6b6e20f2c7e3a7475b87ac4619b8b98df34c",
"0x92eeb6f59607f5df5d724496362d5278b219dded3a5b7467b0048fc7b2aee100",
"0xb65704391243076cb65952e65a2a34a265ce0e9760bd2cd0c2b909755d6aad3d",
"0x9a41834ab8583013db6c7a7302d42dc6ad78d37a032b08fd35d6145231383a59",
"0xcb8a9033aaf225aeeaf328690566ebee58c82f69093eba8d9e155d61bf03b7e1",
"0xadf1f828e77356667426eacf04f023e2cb4053775af10d93960e930f745a75dc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

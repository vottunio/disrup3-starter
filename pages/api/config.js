const {NftApiSdk} = require('@vottun/nft-api-sdk');
require('dotenv').config();

const vottunSdk = new NftApiSdk(
    process.env.APP_ID,
    process.env.ACCESS_TOKEN,
    process.env.NFT_API_URL,
    process.env.IPFS_API_URL
);

module.exports = {vottunSdk};
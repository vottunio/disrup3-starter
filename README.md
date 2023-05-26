### Step by step

0. Request Vottun credentials: https://apis.vottun.tech/trial
1. Clone repository: https://github.com/vottunio/disrup3-starter
2. Create .env file and add variables:
    * ACCESS_TOKEN, APP_ID & WALLET_ADDRESS
    * NFT_API_URL & IPFS_API_URL
    * CHAIN_ID
3. Add image in /pages/images directory and upload it using the 'uploadImage' script
4. Crate a JSON file with the POAP information
    * Name
    * Description
    * Image (IPFS uri obtained in previous API call)
5. Place JSON into a directory and zip it
6. Upload the zip using the 'uploadZip' script
7. Set the POAP_IPFS_URI variable with the uri obtained in previous API call
8. Deploy contract using the 'deploy' script
9. Set the CONTRACT_ADDRESS variable with the address obtained in previous API call
10. Run web application
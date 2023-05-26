'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [inputWallet, setInputWallet] = useState('');

  const handleClaimPoap = async () => {
    //Implement the 'loading' state control
    
    await claimPoapCall();
  }

  const claimPoapCall = async () => {
    // Implement the API call to claim the POAP
  }

  const handleInputChange = (event) => {
    setInputWallet(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>Disrup3 x Vottun</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Disrup3 x Vottun workshop</h1>
          </div>
          <div className="header-subtitle">
            <h2>Claim your poap in order to showcase what you learned today!</h2>
          </div>
        </div>
        <div className='form'>
          <input
            className='input'
            type="text"
            value={inputWallet}
            onChange={handleInputChange}
            placeholder="Enter your wallet address..."
          />
          <button className="claim-button" onClick={handleClaimPoap}>
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}

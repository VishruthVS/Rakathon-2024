import React from 'react';
import Wallet from '../pages/wallet';

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
      <div className="newsletter-background">
        Newsletter
      </div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Input email address'></input>
        <button type='submit'>Get Started</button>
      </form>
      <Wallet />
    </section>
  )
}

export default Newsletter
import Image from 'next/image';
import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
// import headerImg from '../src/assets/header.png'
import Link from 'next/link';
import featured1 from '../src/assets/Featured1.png';
import featured2 from '../src/assets/Featured2.png';
import featured3 from '../src/assets/Featured3.png';
import featured4 from '../src/assets/Featured4.png';
import EcomHeaderImg from '../src/assets/ecommerceHeader.jpeg';

const HeroBanner = () => {
    return (
        <header className='header'>
            <div className='header-left-side'>
                <div className='header-content'>
                    <span>Sale 70%</span>
                    <h1>Next-Gen Returns with Smart Automation</h1>
                    <p>Fair Returns, Honest Shopping: Protecting Your Purchases, Always.</p>

                    <Link href='/products'>
                        <button className='btn' type='button'><CgShoppingCart size={26} />  Start Shopping</button>
                    </Link>

                </div>

                <div className='header-featured'>
                    <Image src={featured1} width={100} height={35} alt='img' />
                    <Image src={featured2} width={100} height={35} alt='img' />
                    <Image src={featured3} width={100} height={35} alt='img' />
                    <Image src={featured4} width={100} height={35} alt='img' />
                </div>
            </div>

            <div className='header-right-side'>
                <div className='header-circle'>
                    <Image className='header-img' src={EcomHeaderImg} width={650} height={650} alt='header image' />
                </div>
            </div>
        </header>
    )
}

export default HeroBanner
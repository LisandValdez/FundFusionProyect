import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import {signIn} from "next-auth/react"
import React from 'react';
import { useRouter } from 'next/router';



export default function Login() { 
    const router = useRouter();

    const handleEmailClick = () => {
        router.push('/FormsEmail');
    };

    return (
        <div className='loginDiv'>
            <div className='loginGrid'>
                <div className="loginIcon">
                <svg className='loginLogo' width="170" height="230" viewBox="0 0 170 230" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_36_650)">
<path d="M22.5682 218.224C35.6197 214.761 44.7067 202.949 44.7067 189.446L44.7067 99.5911L44.7067 85.6932C49.2649 77.6055 56.2001 71.1153 64.5719 67.1026L75.4297 61.8984L40.747 61.7284C33.3152 61.692 26.0415 63.8734 19.8563 67.9937C17.7743 69.3807 15.8369 70.9733 14.0733 72.7476L11.8766 74.9576C8.70162 78.1518 6.42612 82.1762 5.30486 86.5381C4.77101 88.6149 4.49596 90.7699 4.49596 92.9142L4.49595 189.308C4.49595 201.609 11.511 212.833 22.5682 218.224Z" fill="url(#paint0_linear_36_650)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M164.42 7.41148C166.255 4.07918 163.844 0 160.04 0H93.2751L71.3625 14.2319L66.3926 40.2108H120.95C136.625 40.2108 151.059 31.6811 158.619 17.9496L164.42 7.41148Z" fill="url(#paint1_linear_36_650)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.126 69.7611C140.96 66.4288 138.549 62.3496 134.745 62.3496H67.9802L41.0977 102.56H95.6553C111.33 102.56 125.764 94.0307 133.324 80.2992L139.126 69.7611Z" fill="url(#paint2_linear_36_650)"/>
<path d="M74.5309 161.296L74.5539 50.9841L74.5539 32.1858C74.5539 21.4253 80.5232 11.553 90.052 6.554L102.543 0.00100708L80.0996 0.00100806C72.1065 0.00100841 64.2363 1.96922 57.1842 5.73183L54.3546 7.24156C49.6381 9.75797 45.5627 13.3241 42.4427 17.6648C39.3194 22.0101 37.193 26.9909 36.215 32.2521L35.9471 33.6935C35.4658 36.2824 35.2237 38.91 35.2237 41.5432L35.2237 161.296L74.5309 161.296Z" fill="#1D4CD0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2229 192.885L35.2229 161.296L74.5301 161.296L74.5301 190.482C74.5301 196.753 72.466 202.85 68.6566 207.832L67.9466 208.63C64.8113 212.153 61.0602 215.075 56.8773 217.253C47.3832 222.197 36.2691 223.002 26.1622 219.476L22.5723 218.224C30.3785 213.902 35.2229 205.683 35.2229 196.761L35.2229 192.885Z" fill="#1D4CD0"/>
</g>
<defs>
<filter id="filter0_d_36_650" x="0.496094" y="0" width="168.551" height="229.642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_36_650"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_36_650" result="shape"/>
</filter>
<linearGradient id="paint0_linear_36_650" x1="17.1466" y1="61.8984" x2="4.496" y2="201.055" gradientUnits="userSpaceOnUse">
<stop stop-color="#112269"/>
<stop offset="1" stop-color="#2243CF"/>
</linearGradient>
<linearGradient id="paint1_linear_36_650" x1="66.3926" y1="20.1054" x2="168.501" y2="20.1054" gradientUnits="userSpaceOnUse">
<stop stop-color="#112269"/>
<stop offset="1" stop-color="#2243CF"/>
</linearGradient>
<linearGradient id="paint2_linear_36_650" x1="41.0977" y1="82.455" x2="143.206" y2="82.455" gradientUnits="userSpaceOnUse">
<stop stop-color="#112269"/>
<stop offset="1" stop-color="#2243CF"/>
</linearGradient>
</defs>
</svg>

                </div>
                <div className='loginText'>
                    <h1 className='loginTitle'>FUND FUSION</h1>
                    <h2 className='loginSubTittle'>Gestiona tu dinero y trabajo</h2>
                </div>
                <div className="loginButtons">
                    <button className="loginGoogle" onClick={() => signIn('google')}><GoogleIcon fontSize='medium'/>Seguir con Google</button>
                    <button className="loginEmail" onClick={handleEmailClick}><EmailIcon fontSize='medium'/>Registrate</button>
                    <p className='loginAccount'>Ya tengo cuenta en FundFusion</p>

                </div>
            </div>
        </div>
    )
}

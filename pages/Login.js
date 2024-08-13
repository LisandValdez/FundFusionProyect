import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';

export default function Login() {
    return(
        <div className='loginDiv'>
            <div className='loginGrid'>
                <div className="loginIcon">
                    <svg className='loginLogo' width="323" height="498" viewBox="0 0 323 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.1065 458.35C74.2744 447.176 88.9999 423.725 88.9999 398.003L88.9999 220.426L88.9999 189.666C99.23 171.514 112.987 155.592 129.462 142.837L137 137L97.4506 137C81.9501 137 66.5829 139.862 52.1215 145.441L41.2708 149.628C31.9075 153.24 23.411 158.786 16.3358 165.904C9.30855 172.974 4.27211 181.882 1.79041 191.536C0.608798 196.133 1.81867e-05 200.902 1.83942e-05 205.648L1.52588e-05 483L51.1065 458.35Z" fill="url(#paint0_linear_13_4569)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M318.92 7.41148C320.754 4.07918 318.343 0 314.539 0H156.5L97 89H248.588C264.263 89 278.696 80.4702 286.256 66.7387L318.92 7.41148Z" fill="url(#paint1_linear_13_4569)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M262.92 144.411C264.754 141.079 262.343 137 258.539 137H100.5L41 226H192.588C208.263 226 222.696 217.47 230.256 203.739L262.92 144.411Z" fill="url(#paint2_linear_13_4569)"/>
<path d="M83.5806 429.324C102.556 416.957 114 395.841 114 373.191L114 112.722L114 71.1597C124.245 46.597 138.931 24.1335 157.321 4.89511L162 0L126.183 1.56562e-06C108.325 2.34621e-06 90.7311 4.31058 74.8958 12.5655L68.1273 16.0939C57.5613 21.602 48.3966 29.4561 41.3357 39.0542C34.2708 48.6578 29.447 59.7221 27.2187 71.4344L26.6448 74.4512C25.5506 80.2024 24.9999 86.0438 24.9999 91.8982L24.9999 458.274C24.9999 462.243 29.4038 464.63 32.7298 462.463L83.5806 429.324Z" fill="#1D4CD0"/>
<path d="M58.4468 69.1175C39.4552 81.4808 28.0001 102.606 28.0001 125.268L28.0001 385.398L28.0001 426.916L21.2518 443.077C15.43 457.019 8.31503 470.385 0 483L10.4917 486.66C31.2369 493.897 54.2745 492.129 73.7618 481.981C84.323 476.481 93.6033 468.575 100.664 458.988C107.729 449.394 112.553 438.339 114.782 426.636L115.355 423.63C116.449 417.884 117 412.047 117 406.198L117 40.2211C117 36.2523 112.598 33.8655 109.272 36.0307L58.4468 69.1175Z" fill="#1D4CD0"/>
<defs>
<linearGradient id="paint0_linear_13_4569" x1="49.0001" y1="423.051" x2="50.2996" y2="166.725" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D4CD0"/>
<stop offset="1" stop-color="#0F276A"/>
</linearGradient>
<linearGradient id="paint1_linear_13_4569" x1="272" y1="35.5" x2="128" y2="53" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D4CD0"/>
<stop offset="1" stop-color="#0F276A"/>
</linearGradient>
<linearGradient id="paint2_linear_13_4569" x1="216" y1="172.5" x2="72" y2="190" gradientUnits="userSpaceOnUse">
<stop stop-color="#1D4CD0"/>
<stop offset="1" stop-color="#0F276A"/>
</linearGradient>
</defs>
                    </svg>
                </div>
                <div className='loginText'>
                    <h1 className='loginTitle'>FUND FUSION</h1>
                    <h2 className='loginSubTittle'>Gestiona tu dinero y trabajo</h2>
                </div>
                <div className="loginButtons">
                    <button className="loginGoogle"><GoogleIcon/>Seguir con Google</button>
                    <button className="loginEmail"><EmailIcon/>Seguir con mi Correo</button>
                    <p className='loginAccount'>Ya tengo cuenta en FunFusion</p>
                </div>
            </div>
        </div>
    )
}



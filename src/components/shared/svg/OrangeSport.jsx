export const OrangeSpot = ({accentColor = "var(--color-orange)", ...props}) => (
    <svg  {...props} viewBox="0 0 706 778" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1877_3471)">
        <path d="M605.818 393.472C605.818 536.144 513.549 682.059 352.909 677.914C192.269 673.768 100 526.211 100 393.472C100 248.993 202.141 100 352.909 100C503.678 100 605.818 231.392 605.818 393.472Z" fill={accentColor}/>
        <path d="M352.909 105C500.113 105 600.818 233.275 600.818 393.472C600.818 463.801 578.061 534.811 535.703 587.621C493.43 640.325 431.639 674.943 353.038 672.915C195.976 668.862 105 524.46 105 393.472C105 322.348 130.162 250.089 173.816 195.686C217.431 141.333 279.31 105 352.909 105Z" stroke={accentColor} stroke-width="10"/>
        </g>
        <g filter="url(#filter1_g_1877_3471)">
        <ellipse cx="359.473" cy="393.256" rx="227.164" ry="263.377" fill={accentColor}/>
        </g>
        <defs>
        <filter id="filter0_f_1877_3471" x="0" y="0" width="705.818" height="778" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1877_3471"/>
        </filter>
        <filter id="filter1_g_1877_3471" x="32.3086" y="29.8789" width="654.328" height="726.754" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.83333331346511841 0.83333331346511841" numOctaves="3" seed="4986" />
        <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
        <feMerge result="effect1_texture_1877_3471">
        <feMergeNode in="displacedImage"/>
        </feMerge>
        </filter>
        </defs>
    </svg>
)
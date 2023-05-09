import React from 'react'
import work1 from '../assets/work-1.png'
import work2 from '../assets/work-2.png'
import work4 from '../assets/work-4.png'
import work3 from '../assets/work-3.png'
import mypic from '../assets/mypic.jpg'

import 'boxicons/css/boxicons.min.css'
const Home = () => {
  return (
    <>
    <div className='flex items-center justify-center duration-500 lg:py-40 md:py-40 sm:py-20'>
    <div className='flex flex-col items-center justify-center'>
        <span className='mb-4'>Hey there, I’m Bruno Simmons 👋</span>
        <span className='font-bold text-center lg:w-[800px] md:w-[700px] sm:w-[350px] lg:text-6xl md:text-4xl sm:text-3xl'>Building digital products, brands and experience</span>
        <div className='m-8'><span className='bg-blue-600 p-3 cursor-pointer rounded-full text-xsm uppercase font-bold text-white'>Contact with me</span></div>
        <div className='w-full h-[1px] mt-20 flex items-center justify-center  bg-gray-100'>
            <i className='bx bx-chevron-down border-black border border-opacity-30  p-2 rounded-full bg-white'></i>
        </div>
    </div>
    </div>
    <div className='lg:px-16 md:px-12 sm:px-4 duration-500 py-12'>
   <span className='font-semibold md:text-4xl sm:text-4xl lg:text-5xl tracking-none'>The work I do, <br /> and business I help.</span>
   <div className='grid my-12 lg:grid-cols-2 even:py-8 md:grid-cols-2 sm:grid-cols-1 gap-20'>
    <div className='flex flex-col'>
        <div className='w-full h-screen bg-gray-100'>
            <img src={work1} className='w-full h-full object-cover' alt="" />
        </div>
        <span className='py-1 font-semibold text-slate-900'>Ice Cream App Concept</span>
        <span className='py-1 font-light text-xsm text-slate-900'>Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet.</span>
    </div>
    <div className='flex flex-col'>
        <div className='w-full h-screen lg:mt-12 md:mt-12 sm:mt-0 bg-gray-100'>
        <img src={work2} className='w-full h-full object-cover' alt="" />
        </div>
        <span className='py-1 font-semibold text-slate-900'>Plant Store App</span>
        <span className='py-1 font-light text-xsm text-slate-900'>Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet.</span>
    </div>
    <div className='flex flex-col'>
        <div className='w-full h-screen bg-gray-100'>
        <img src={work3} className='w-full h-full object-cover' alt="" />
        </div>
        <span className='py-1 font-semibold text-slate-900'>Nike App Redesign</span>
        <span className='py-1 font-light text-xsm text-slate-900'>Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet.</span>
    </div>
    <div className='flex flex-col'>
        <div className='w-full h-screen lg:mt-12 md:mt-12 sm:mt-0 bg-gray-100'>
        <img src={work4} className='w-full h-full object-cover' alt="" />
        </div>
        <span className='py-1 font-semibold text-slate-900'>StudentsNaukri Job Recruiter Platform</span>
        <span className='py-1 font-light text-xsm text-slate-900'>Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet.</span>
    </div>
   </div>
   <span className='font-semibold text-white bg-black p-3 rounded-full text-md uppercase tracking-none'>Visit My Dribble <i class='bx bx-basketball'></i></span>
    </div>
    <div  id='servicesSection' className='lg:px-16 md:px-12 sm:px-0 duration-500  py-12'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 relative bg-teal-50 p-8  gap-4'>
            <div className='flex flex-col'>
            <span className='font-semibold text-4xl'>What I do  for<br />  my customers</span>
            <span className='font-light w-80 my-12 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat fringilla lorem sed bibendum.</span>
            <span className='font-semibold bg-blue-700 text-white rounded-full w-max text-sm p-3 b'>Connect with me</span>
            </div>
            <div className='flex justify-center lg:absolute md:absolute sm:static right-20 -top-10 items-center'>
                <div className='flex lg:flex-row md:flex-row sm:flex-col items-center gap-4'>
                    <div className='p-4 flex flex-col bg-white md:rounded-lg sm:rounded-none lg:rounded-md shadow-xl'>
                    <i className='w-min p-2 bx-laptop shadow bx bg-pink-100 rounded-full'></i>
            <span className=' lg:w-40 md:w-40 sm:w-full py-3 font-semibold text-md'>UI/UX Design</span>
            <span className='font-semibold text-slate-400 lg:w-40 md:w-40 sm:w-full text-xsm'>Websites, application or other design related tasks. I love tackling digital problems.</span>
                    </div>
                    <div className='items-center gap-4 flex flex-col'>
                        
                    <div className='lg:p-8  md:p-4 sm:p-4 flex flex-col bg-white md:rounded-lg sm:rounded-none lg:rounded-md shadow-xl'>
                    <i className='w-min p-2 bx-laptop shadow bx bg-yellow-100 rounded-full'></i>
            <span className=' lg:w-40 md:w-40 sm:w-full py-3 font-semibold text-md'>Motion Graphics</span>
            <span className='font-semibold text-slate-400 lg:w-40 md:w-40 sm:w-full text-xsm'>Every interaction you apply to your brand makes you stronger and more priority.</span>
                    </div>
                    <div className='lg:p-8 md:p-4 sm:p-4 flex flex-col  bg-white md:rounded-lg sm:rounded-none lg:rounded-md shadow-xl'>
                    <i className='w-min p-2 bx-laptop shadow bx bg-sky-100 rounded-full'></i>
            <span className=' lg:w-40 md:w-40 sm:w-full py-3 font-semibold text-md'>Branding</span>
            <span className='font-semibold text-slate-400 lg:w-40 md:w-40 sm:w-full text-xsm'>Positioning the brand first. I create visual identity across platforms.</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className='w-full h-[1px] mt-20 flex items-center justify-center bg-gradient-to-t from-slate-200'>
            <div className=' bg-white px-8 text-xsm rounded-full '>CRAFTED DESIGNS FOR</div>
        </div>
        <div className='flex items-center justify-center p-20'>
            <div className='flex flex-wrap gap-4 items-center justify-center'>
            <svg width="121" height="48" viewBox="0 0 121 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.9251 32.4263L39.3932 28.9949C41.0006 30.1853 43.0973 30.8154 45.1945 30.8154C46.7323 30.8154 47.7107 30.2204 47.7107 29.3101C47.6756 26.7889 38.4494 28.7498 38.3792 22.4112C38.3441 19.1897 41.2102 16.7036 45.2646 16.7036C47.6756 16.7036 50.0875 17.2991 51.7997 18.6649L50.4279 22.1696C48.8525 21.1566 46.9067 20.4503 45.0546 20.4503C43.7965 20.4503 42.9575 21.0453 42.9575 21.8162C42.9925 24.3023 52.2895 22.9364 52.3942 28.9949C52.3942 32.2865 49.5978 34.5977 45.6135 34.5977C42.6783 34.5977 39.9871 33.8975 37.9246 32.4263H37.9251ZM96.3831 27.7523C96.0125 28.4108 95.4735 28.9588 94.8212 29.3402C94.169 29.7216 93.427 29.9226 92.6715 29.9227C90.3167 29.9227 88.4079 28.0099 88.4079 25.6506C88.4079 23.2913 90.3167 21.3786 92.6715 21.3786C93.427 21.3787 94.169 21.5797 94.8212 21.9611C95.4735 22.3425 96.0125 22.8905 96.3831 23.549L100.465 21.2834C98.9359 18.5511 96.0197 16.7036 92.6715 16.7036C87.7398 16.7036 83.742 20.709 83.742 25.6506C83.742 30.5918 87.7398 34.5977 92.6715 34.5977C96.0197 34.5977 98.9359 32.7501 100.465 30.0179L96.3831 27.7523ZM55.0427 34.2473H60.1453V9.25574H55.0432L55.0427 34.2473ZM103.042 9.25574V34.2473H108.144V26.7599L114.19 34.2473H120.713L113.024 25.3524L120.153 17.0524H113.911L108.144 23.953V9.25574H103.042ZM75.8655 17.0535V19.085C75.027 17.684 72.9649 16.7036 70.7981 16.7036C66.3245 16.7036 62.7948 20.6608 62.7948 25.6331C62.7948 30.6053 66.3245 34.5977 70.7981 34.5977C72.9649 34.5977 75.027 33.6173 75.8655 32.2163V34.2473H80.9681V17.0535H75.8655ZM75.8655 27.7869C75.1317 29.0124 73.5939 29.9222 71.8817 29.9222C69.5264 29.9222 67.6177 28.0099 67.6177 25.6506C67.6177 23.2913 69.5264 21.3786 71.8817 21.3786C73.5939 21.3786 75.1317 22.3239 75.8655 23.584V27.7869Z" fill="black"/>
<path d="M10.9783 8.70361C9.32472 8.70361 7.98442 10.0469 7.98442 11.7035C7.98402 12.0971 8.06115 12.4868 8.21139 12.8506C8.36163 13.2143 8.58205 13.5449 8.86006 13.8235C9.13806 14.1021 9.46822 14.3231 9.83166 14.4741C10.1951 14.6251 10.5847 14.703 10.9783 14.7034H13.9727V11.7035C13.9733 10.9086 13.6582 10.1461 13.0967 9.58348C12.5352 9.0209 11.7732 8.70441 10.9783 8.70361ZM10.9783 16.7033H2.99412C1.34055 16.7033 0.000244141 18.0466 0.000244141 19.7037C0.000244141 21.3603 1.34055 22.7036 2.99412 22.7036H10.9788C12.6319 22.7036 13.9727 21.3603 13.9727 19.7037C13.9727 18.0466 12.6319 16.7033 10.9783 16.7033Z" fill="#36C5F0"/>
<path d="M29.9411 19.7037C29.9411 18.0466 28.6003 16.7033 26.9467 16.7033C25.2931 16.7033 23.9528 18.0466 23.9528 19.7037V22.7036H26.9467C27.7415 22.7028 28.5036 22.3863 29.0651 21.8237C29.6266 21.2612 29.9417 20.4986 29.9411 19.7037ZM21.9569 19.7037V11.7035C21.9575 10.9086 21.6425 10.1461 21.0809 9.58348C20.5194 9.0209 19.7574 8.70441 18.9625 8.70361C17.3089 8.70361 15.9686 10.0469 15.9686 11.7035V19.7032C15.9686 21.3608 17.3089 22.7041 18.9625 22.7041C19.7574 22.7033 20.5194 22.3868 21.0809 21.8242C21.6425 21.2617 21.9575 20.4991 21.9569 19.7042" fill="#2EB67D"/>
<path d="M18.9626 38.7036C19.7575 38.7028 20.5195 38.3863 21.081 37.8237C21.6426 37.2612 21.9577 36.4986 21.957 35.7037C21.9577 34.9088 21.6426 34.1463 21.081 33.5837C20.5195 33.0211 19.7575 32.7046 18.9626 32.7038H15.9688V35.7037C15.9688 37.3603 17.3091 38.7036 18.9626 38.7036ZM18.9626 30.7039H26.9473C28.6004 30.7039 29.9412 29.3606 29.9412 27.7035C29.9418 26.9086 29.6268 26.1461 29.0652 25.5835C28.5037 25.0209 27.7417 24.7044 26.9468 24.7036H18.9626C17.3091 24.7036 15.9688 26.0469 15.9688 27.7035C15.9684 28.0971 16.0455 28.4868 16.1957 28.8506C16.346 29.2143 16.5664 29.5449 16.8444 29.8235C17.1224 30.1021 17.4526 30.3231 17.816 30.4741C18.1794 30.6251 18.5691 30.703 18.9626 30.7034" fill="#ECB22E"/>
<path d="M1.51064e-06 27.7035C-0.000393626 28.0971 0.0767319 28.4868 0.226974 28.8506C0.377217 29.2143 0.597634 29.5449 0.875642 29.8235C1.15365 30.1021 1.4838 30.3231 1.84725 30.4741C2.2107 30.6251 2.60032 30.703 2.99388 30.7034C3.78875 30.7026 4.55075 30.3861 5.11229 29.8235C5.67383 29.261 5.98892 28.4984 5.98826 27.7035V24.7036H2.99388C1.3403 24.7036 1.51064e-06 26.0469 1.51064e-06 27.7035ZM7.98417 27.7035V35.7032C7.98417 37.3603 9.32448 38.7036 10.9781 38.7036C11.7729 38.7028 12.5349 38.3863 13.0965 37.8237C13.658 37.2612 13.9731 36.4986 13.9724 35.7037V27.7035C13.9728 27.3099 13.8957 26.9201 13.7454 26.5563C13.5951 26.1925 13.3747 25.8619 13.0966 25.5833C12.8186 25.3048 12.4883 25.0837 12.1248 24.9327C11.7613 24.7818 11.3716 24.7039 10.9781 24.7036C9.32448 24.7036 7.98417 26.0469 7.98417 27.7035Z" fill="#E01E5A"/>
</svg>
<svg width="113" height="48" viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3774 33.987V12.0316H32.7886V20.6873C33.8628 19.0874 35.474 18.2871 37.6219 18.2865C39.4541 18.2865 40.8704 18.8288 41.8709 19.9133C42.8714 20.9979 43.3718 22.509 43.3719 24.4466V33.987H39.9606V24.9205C39.9606 22.4146 38.8444 21.1615 36.6119 21.1611C35.4954 21.1611 34.5793 21.4981 33.8636 22.172C33.148 22.846 32.7898 23.7937 32.7892 25.0152V33.9867L29.3774 33.987Z" fill="#323232"/>
<path d="M59.4933 32.092C57.9769 33.6084 56.0711 34.3665 53.7755 34.3665C51.4801 34.3665 49.5689 33.6084 48.0418 32.092C46.5148 30.5756 45.7514 28.6483 45.7515 26.3101C45.7516 23.972 46.515 22.0503 48.0418 20.5452C49.5686 19.0397 51.4798 18.2868 53.7755 18.2865C56.0713 18.2861 57.9772 19.0391 59.4933 20.5452C61.0098 22.0512 61.7681 23.9729 61.768 26.3101C61.7678 28.6473 61.0096 30.5746 59.4933 32.092ZM50.5376 30.1648C51.3478 31.1124 52.4272 31.5864 53.7755 31.5864C55.124 31.5864 56.2033 31.1124 57.0135 30.1648C57.824 29.2171 58.2293 27.9322 58.2297 26.3101C58.2297 24.7097 57.8191 23.4356 56.9978 22.4877C56.1765 21.5399 55.1024 21.066 53.7755 21.0661C52.4275 21.0661 51.3481 21.5347 50.5376 22.4718C49.7269 23.409 49.3215 24.6882 49.3213 26.3094C49.3213 27.9322 49.7267 29.2173 50.5376 30.1648Z" fill="#323232"/>
<path d="M69.664 34.366C66.5258 34.366 64.9566 32.6811 64.9566 29.3114V21.5403H62.5879V18.6657H65.052L65.8418 14.1491H68.4002V18.6657H74.4971V21.5403H68.4005V29.2168C68.4005 30.628 68.9164 31.3336 69.9484 31.3335C70.9168 31.3335 71.7908 30.4488 72.5703 28.6797L75.2241 30.0382C73.918 32.9237 72.0646 34.3663 69.664 34.366Z" fill="#323232"/>
<path d="M76.3208 41C74.8044 41 73.5513 40.5788 72.5615 39.7364L73.8252 37.0512C74.4361 37.7669 75.0995 38.125 75.8154 38.1258C76.763 38.1258 77.2368 37.5151 77.2368 36.2936V18.6656H80.648V36.3559C80.648 37.9986 80.2426 39.1833 79.4317 39.9097C78.6209 40.6363 77.5839 40.9997 76.3208 41ZM78.9427 16.075C78.3819 16.0941 77.8365 15.8896 77.4264 15.5065C77.2291 15.3206 77.0737 15.0949 76.9702 14.8444C76.8668 14.5939 76.8177 14.3243 76.8263 14.0534C76.8187 13.7803 76.8683 13.5086 76.9716 13.2556C77.0749 13.0027 77.2298 12.7741 77.4264 12.5844C77.8388 12.2084 78.3767 12 78.9349 12C79.4929 12 80.0309 12.2084 80.4433 12.5844C80.644 12.7717 80.8028 12.9995 80.909 13.2528C81.0151 13.506 81.0665 13.7789 81.0594 14.0534C81.0643 14.3229 81.012 14.5904 80.9058 14.8382C80.7996 15.086 80.642 15.3084 80.4433 15.4907C80.244 15.6821 80.0088 15.8322 79.7513 15.9325C79.4938 16.0328 79.2191 16.0812 78.9427 16.075Z" fill="#323232"/>
<path d="M89.121 34.3661C87.3726 34.3661 85.9562 33.9291 84.872 33.0552C83.7876 32.1812 83.2454 31.0074 83.2452 29.5336C83.2452 28.1859 83.8085 27.0431 84.9353 26.1054C86.062 25.1677 87.4782 24.6991 89.1841 24.6997C90.9322 24.6997 92.4064 25.2578 93.6068 26.3741V24.51C93.6068 23.4152 93.3277 22.5676 92.7695 21.967C92.2113 21.3664 91.4163 21.0662 90.3847 21.0666C88.2997 21.0666 87.0045 22.1301 86.4989 24.2571L83.3714 23.5938C83.7921 21.9512 84.624 20.656 85.8672 19.7082C87.1103 18.7605 88.6582 18.2866 90.5108 18.2866C92.5328 18.2866 94.1282 18.8184 95.2969 19.8821C96.4656 20.9457 97.0499 22.4988 97.0502 24.5414V33.9871H93.7331V32.0598C92.6166 33.5975 91.0792 34.3664 89.121 34.3661ZM89.752 31.8389C91.2685 31.8389 92.5534 31.0808 93.6067 29.5646V29.0902C92.5532 27.8266 91.2684 27.1948 89.752 27.1949C88.8676 27.1949 88.1513 27.411 87.6029 27.8431C87.3438 28.034 87.134 28.2841 86.9912 28.5727C86.8482 28.8611 86.7764 29.1796 86.7815 29.5014C86.7732 29.8267 86.8419 30.1493 86.9819 30.443C87.1219 30.7367 87.3294 30.9932 87.5872 31.1915C88.1254 31.6232 88.8466 31.839 89.752 31.8389Z" fill="#323232"/>
<path d="M100.37 33.987V18.6656H103.687V21.3192C104.529 19.3817 105.982 18.4129 108.046 18.4128C109.267 18.4128 110.278 18.813 111.079 19.6132C111.88 20.4135 112.28 21.4876 112.279 22.8354C112.27 23.6421 112.132 24.4422 111.868 25.2047L108.741 24.8888C108.805 24.4701 108.847 24.0484 108.867 23.6253C108.867 22.0458 108.214 21.256 106.909 21.2559C106.024 21.2559 105.281 21.7245 104.681 22.6616C104.081 23.5988 103.781 24.8361 103.781 26.3737V33.987H100.37Z" fill="#323232"/>
<path d="M8.07188 21.0097C10.6142 19.5973 14.0962 17.6625 14.0962 12.0315H9.87997C9.87997 15.1821 8.34614 16.0342 6.02431 17.3241C3.48197 18.737 0 20.671 0 26.3026H4.21623C4.21623 23.1518 5.75006 22.2997 8.07188 21.0097Z" fill="#FF3C00"/>
<path d="M15.3692 19.7157C15.3692 22.8664 13.8354 23.7185 11.5136 25.0083C8.9719 26.4207 5.48926 28.3552 5.48926 33.9867H9.70531C9.70531 30.8359 11.2391 29.9838 13.561 28.6939C16.1033 27.2815 19.5851 25.3472 19.5851 19.7157H15.3692Z" fill="#FF3C00"/>
</svg>
<svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1867 20.6688H24.4677L33.7504 15.3372L31.9096 12.1638L22.6257 17.4955L27.9841 8.26132L24.7949 6.42965L19.4354 15.6615V5.00049H15.7514V15.6627L10.3919 6.42965L7.20149 8.26132L12.5598 17.4932L3.27831 12.1638L1.43631 15.3372L10.719 20.6688H0V24.3333H10.7178L1.43631 29.665L3.27714 32.8383L12.561 27.5067L7.20149 36.7408L10.3907 38.5725L15.7514 29.3395V40.0005H19.4354V29.1108L24.8933 38.5142L27.8844 36.7968L22.4252 27.3912L31.9072 32.8372L33.7492 29.6638L24.4677 24.3322H35.1855V20.6688H35.1867ZM17.5934 27.4822C16.9357 27.4822 16.2845 27.3534 15.6769 27.1031C15.0693 26.8527 14.5172 26.4858 14.0522 26.0231C13.5871 25.5605 13.2182 25.0112 12.9664 24.4067C12.7147 23.8022 12.5851 23.1543 12.585 22.4999C12.5849 21.8456 12.7144 21.1976 12.966 20.593C13.2176 19.9884 13.5864 19.4391 14.0513 18.9763C14.5163 18.5136 15.0683 18.1465 15.6758 17.896C16.2834 17.6455 16.9346 17.5166 17.5922 17.5165C18.9203 17.5163 20.1941 18.0412 21.1334 18.9755C22.0726 19.9099 22.6004 21.1772 22.6005 22.4987C22.6007 23.8203 22.0732 25.0877 21.1342 26.0223C20.1952 26.9569 18.9215 27.482 17.5934 27.4822Z" fill="#625DF5"/>
<path d="M44.6831 35.3021V9.69849H49.4059V35.3021H44.6831ZM89.9803 17.9025H94.4897V20.0258C95.4488 18.3283 97.6871 17.4078 99.6042 17.4078C101.984 17.4078 103.901 18.4345 104.789 20.307C106.173 18.1837 108.02 17.4078 110.329 17.4078C113.56 17.4078 116.649 19.3527 116.649 24.0205V35.3021H112.069V24.976C112.069 23.1012 111.145 21.686 108.978 21.686C106.953 21.686 105.746 23.2435 105.746 25.1183V35.3033H101.06V24.976C101.06 23.1012 100.101 21.686 97.9697 21.686C95.9096 21.686 94.702 23.2085 94.702 25.1183V35.3033H89.9803V17.9025ZM60.0792 35.8062C54.7584 35.8062 50.9056 31.878 50.9056 26.6023C50.9056 21.4107 54.7467 17.3903 60.0792 17.3903C65.4375 17.3903 69.2528 21.448 69.2528 26.6023C69.2528 31.8407 65.3977 35.8062 60.0792 35.8062ZM60.0792 21.6487C58.7594 21.6505 57.4943 22.1732 56.5614 23.1021C55.6285 24.0311 55.104 25.2903 55.1031 26.6035C55.104 27.9167 55.6285 29.1759 56.5614 30.1048C57.4943 31.0337 58.7594 31.5565 60.0792 31.5583C61.3988 31.5562 62.6636 31.0333 63.5963 30.1044C64.5289 29.1755 65.0532 27.9165 65.0541 26.6035C65.0532 25.2905 64.5289 24.0314 63.5963 23.1026C62.6636 22.1737 61.3988 21.6508 60.0792 21.6487ZM79.3399 35.8062C74.0191 35.8062 70.1662 31.878 70.1662 26.6023C70.1662 21.4107 74.0073 17.3903 79.3399 17.3903C84.6982 17.3903 88.5135 21.448 88.5135 26.6023C88.5135 31.8407 84.656 35.8062 79.3399 35.8062ZM79.3399 21.5892C78.0049 21.5913 76.7254 22.1202 75.7818 23.0597C74.8382 23.9993 74.3076 25.2729 74.3063 26.6011C74.3076 27.9294 74.8382 29.203 75.7818 30.1426C76.7254 31.0821 78.0049 31.611 79.3399 31.6131C80.6748 31.611 81.9544 31.0821 82.898 30.1426C83.8416 29.203 84.3722 27.9294 84.3734 26.6011C84.3722 25.2729 83.8416 23.9993 82.898 23.0597C81.9544 22.1202 80.6748 21.5913 79.3399 21.5892Z" fill="#212121"/>
</svg>
<svg width="128" height="48" viewBox="0 0 128 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.5917 31.6175C102.891 31.6175 105.574 28.9876 105.574 25.755C105.574 22.5222 102.891 19.8923 99.5917 19.8923C96.2933 19.8923 93.6095 22.5222 93.6095 25.755C93.6095 28.9876 96.2933 31.6175 99.5917 31.6175ZM105.574 11.1852H105.736H108.408V34.4148H105.574V32.0954C103.938 33.5811 101.829 34.395 99.5917 34.395C94.7307 34.395 90.7757 30.519 90.7757 25.755C90.7757 20.9906 94.7307 17.1148 99.5917 17.1148C101.829 17.1148 103.938 17.9285 105.574 19.4143V11.1852ZM40.8164 31.5152C44.115 31.5152 46.7986 28.8853 46.7986 25.6526C46.7986 22.42 44.115 19.79 40.8164 19.79C37.5177 19.79 34.8341 22.42 34.8341 25.6526C34.8341 28.8853 37.5177 31.5152 40.8164 31.5152ZM34.8341 19.3123C36.4697 17.8265 38.5793 17.0126 40.8164 17.0126C45.6776 17.0126 49.6327 20.8885 49.6327 25.6526C49.6327 30.4167 45.6776 34.2926 40.8164 34.2926C38.5793 34.2926 36.4697 33.4789 34.8341 31.9929V40.2222H32V16.9926H34.8341V19.3123ZM55.0402 24.3036C55.678 21.6782 58.0547 19.793 60.7656 19.793C63.4412 19.793 65.6824 21.6379 66.2797 24.3036H55.0402ZM60.7656 16.9926C55.9772 16.9926 52.0817 20.9006 52.0817 25.7037C52.0817 30.507 55.9772 34.4148 60.7656 34.4148C63.4471 34.4148 65.9081 33.4078 67.5188 31.6519L68.3556 30.7392L68.4634 30.6214L68.3461 30.5128L66.5268 28.8342L66.4095 28.7257L66.301 28.8435L65.4643 29.7563C64.397 30.9198 62.6406 31.6146 60.7656 31.6146C58.0547 31.6146 55.6782 29.7294 55.0402 27.1038H69.2243V25.7037C69.2243 20.819 65.5087 16.9926 60.7656 16.9926ZM125.166 25.7038C125.166 28.963 122.482 31.6145 119.183 31.6145C115.885 31.6145 113.201 28.963 113.201 25.7038C113.201 22.4444 115.885 19.7929 119.183 19.7929C122.482 19.7929 125.166 22.4444 125.166 25.7038ZM119.183 16.9926C114.322 16.9926 110.367 20.9004 110.367 25.7038C110.367 30.507 114.322 34.4148 119.183 34.4148C124.045 34.4148 128 30.507 128 25.7038C128 20.9004 124.045 16.9926 119.183 16.9926ZM79.7547 16.9926C77.7855 16.9926 75.9093 17.7425 74.4326 19.1122V16.9926H71.6735V34.4148H74.4326V25.524C74.4326 22.3519 76.8201 19.7711 79.7547 19.7711C82.6898 19.7711 85.0779 22.3519 85.0779 25.524V34.4148H87.8364V25.524C87.8364 20.8198 84.211 16.9926 79.7547 16.9926Z" fill="#1A2022"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.7777H13.3333V40.8148L26.6667 27.7777V14.7407H13.3333L0 27.7777Z" fill="#FF4876"/>
</svg>
            </div>
        </div>
        <div className='w-full h-[1px] mt-4 flex items-center justify-center bg-gradient-to-t from-slate-200'>
            <div className=' bg-white px-8 text-xsm rounded-full '>MORE THAN 150+ BRANDS</div>
        </div>
        </div>
        {/* about me  */}
        <div  id='aboutSection' className='lg:px-16 my-12 md:px-12 sm:px-4'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className='flex flex-col justify-center'>
                    <span className='font-bold text-4xl'>A bit about me</span>
                    <span className='font-semibold text-slate-500 text-xsm mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.</span>
                    <span className='font-semibold text-slate-500 text-xsm mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.</span>
                    <span className='font-semibold text-slate-500 text-xsm mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.</span>
                </div>
                <div className='lg:flex md:hidden sm:hidden lg:flex-row md:flex-col sm:flex-col items-center'>
                    {/* <div className='lg:w-[400px] md:w-80 sm:w-80 shadow-lg lg:h-80 md:h-[400px] sm:h-[400px] bg-gray-100'>
                        <img src={mypic} className='w-full h-full object-cover' alt="" />
                    </div> */}
                    <div className='p-12 w-full '>
                        <div className='flex flex-col border-b p-2'>
                    <span className='font-bold text-3xl'>15</span>
                    <span className='font-bold w-max text-xsm'>YEARS OF EXPERIENCE</span>
                        </div>
                        <div className='flex flex-col border-b p-2 my-12'>
                    <span className='font-bold text-3xl'>2</span>
                    <span className='font-bold text-xsm'>WEB APPS SHIPPED</span>
                        </div>
                        <div className='flex flex-col border-b p-2'>
                    <span className='font-bold text-3xl'>18</span>
                    <span className='font-bold text-xsm'>Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className='bg-black flex flex-col lg:p-32 md:p-20 sm:p-12'>
        <span className='font-bold  text-white text-5xl'>Have an idea?</span>
        <span className='font-bold group w-max duration-100 hover:border-b-4 border-white mt-4 cursor-pointer text-white text-lg'>Let's talk<i class='bx rotate-45 hover:pb-4 group-hover:pb-4 duration-200 bx-arrow-back'></i></span>
        </div>
    </>
  )
}

export default Home
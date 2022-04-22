const feed = `
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.47246 23H19.5725C19.8775 23 20.17 22.8696 20.3856 22.6376C20.6013 22.4055 20.7225 22.0907 20.7225 21.7625V11.8628H23.0225L12.3367 0.362934C12.2299 0.247878 12.103 0.156603 11.9634 0.0943284C11.8238 0.0320535 11.6742 0 11.523 0C11.3719 0 11.2223 0.0320535 11.0827 0.0943284C10.943 0.156603 10.8162 0.247878 10.7094 0.362934L0.0224609 11.8628H2.32246V21.7625C2.32246 22.0907 2.44362 22.4055 2.65929 22.6376C2.87495 22.8696 3.16746 23 3.47246 23ZM13.8225 14.3377H9.22246V20.5251H4.62246V10.4124L11.5225 2.98761L18.4225 10.4124V20.5251H13.8225V14.3377Z" fill-opacity="0.5"/>
    </svg>
`;

const home = `
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.47246 23H19.5725C19.8775 23 20.17 22.8696 20.3856 22.6376C20.6013 22.4055 20.7225 22.0907 20.7225 21.7625V11.8628H23.0225L12.3367 0.362934C12.2299 0.247878 12.103 0.156603 11.9634 0.0943284C11.8238 0.0320535 11.6742 0 11.523 0C11.3719 0 11.2223 0.0320535 11.0827 0.0943284C10.943 0.156603 10.8162 0.247878 10.7094 0.362934L0.0224609 11.8628H2.32246V21.7625C2.32246 22.0907 2.44362 22.4055 2.65929 22.6376C2.87495 22.8696 3.16746 23 3.47246 23ZM13.8225 14.3377H9.22246V20.5251H4.62246V10.4124L11.5225 2.98761L18.4225 10.4124V20.5251H13.8225V14.3377Z" fill-opacity="0.5"/>
    </svg>
`;

const messages = `
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M19.4012 24.3055C19.5687 24.472 19.7743 24.5804 19.9938 24.618C20.2133 24.6556 20.4377 24.6208 20.6405 24.5178C20.8434 24.4147 21.0163 24.2477 21.139 24.0363C21.2617 23.8249 21.329 23.5778 21.3332 23.3242V20.3335C21.952 20.3335 22.5455 20.0525 22.9831 19.5524C23.4207 19.0524 23.6665 18.3741 23.6665 17.6668V8.3335C23.6665 7.62625 23.4207 6.94798 22.9831 6.44788C22.5455 5.94778 21.952 5.66683 21.3332 5.66683H8.49984C7.881 5.66683 7.28751 5.94778 6.84992 6.44788C6.41234 6.94798 6.1665 7.62625 6.1665 8.3335V17.6668C6.1665 18.3741 6.41234 19.0524 6.84992 19.5524C7.28751 20.0525 7.881 20.3335 8.49984 20.3335H14.3297L19.4012 24.3055ZM18.4165 20.1815C18.3102 20.1808 18.2058 20.1491 18.1132 20.0895L15.3657 17.9055C15.1701 17.7501 14.9377 17.6668 14.6995 17.6668H9.6665C9.35708 17.6668 9.06034 17.5264 8.84155 17.2763C8.62275 17.0263 8.49984 16.6871 8.49984 16.3335V9.66683C8.49984 9.31321 8.62275 8.97407 8.84155 8.72402C9.06034 8.47397 9.35708 8.3335 9.6665 8.3335H20.1665C20.4759 8.3335 20.7727 8.47397 20.9915 8.72402C21.2103 8.97407 21.3332 9.31321 21.3332 9.66683V16.3335C21.3332 17.0535 20.8327 17.6428 20.1665 17.6668C19.6882 17.6882 19.3417 17.7775 19.1818 17.9682C19.0325 18.1468 19.0243 18.4482 18.9998 19.0215C18.9963 19.1055 18.9963 19.2575 18.9998 19.5148C18.9998 19.6916 18.9384 19.8612 18.829 19.9862C18.7196 20.1113 18.5712 20.1815 18.4165 20.1815ZM4.99984 13.6882C5.00357 13.8526 5.00357 14.0171 4.99984 14.1815V13.6882C4.9765 13.1148 4.96717 12.8135 4.81783 12.6348C4.658 12.4442 4.3115 12.3548 3.83317 12.3335C3.167 12.3095 2.6665 11.7202 2.6665 11.0002V4.3335C2.6665 3.97987 2.78942 3.64074 3.00821 3.39069C3.227 3.14064 3.52375 3.00016 3.83317 3.00016H14.3332C14.6426 3.00016 14.9393 3.14064 15.1581 3.39069C15.3769 3.64074 15.4998 3.97987 15.4998 4.3335H17.8332V3.00016C17.8332 2.29292 17.5873 1.61464 17.1498 1.11454C16.7122 0.614448 16.1187 0.333496 15.4998 0.333496L2.6665 0.333496C2.04766 0.333496 1.45417 0.614448 1.01659 1.11454C0.579002 1.61464 0.333168 2.29292 0.333168 3.00016V12.3335C0.333168 13.0407 0.579002 13.719 1.01659 14.2191C1.45417 14.7192 2.04766 15.0002 2.6665 15.0002V17.9908C2.67063 18.2445 2.738 18.4915 2.86068 18.7029C2.98337 18.9144 3.15629 19.0814 3.35914 19.1844C3.56199 19.2875 3.78635 19.3222 4.00588 19.2846C4.22541 19.247 4.43099 19.1386 4.5985 18.9722L4.99984 18.6575V13.6895V13.6882Z"  fill-opacity="0.5"/>
    </svg>
`;

const profile = `
    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0C12.0166 0 10.5666 0.43215 9.33322 1.2418C8.09985 2.05146 7.13856 3.20224 6.5709 4.54865C6.00325 5.89505 5.85472 7.37659 6.14411 8.80593C6.4335 10.2353 7.14781 11.5482 8.1967 12.5787C9.24559 13.6092 10.582 14.3109 12.0368 14.5953C13.4917 14.8796 14.9997 14.7337 16.3701 14.176C17.7406 13.6183 18.9119 12.6738 19.736 11.4621C20.5601 10.2504 21 8.82576 21 7.36842C21 5.41419 20.2098 3.54001 18.8033 2.15816C17.3968 0.776313 15.4891 0 13.5 0ZM13.5 11.7895C12.61 11.7895 11.74 11.5302 10.9999 11.0444C10.2599 10.5586 9.68314 9.86813 9.34254 9.06028C9.00195 8.25244 8.91283 7.36352 9.08647 6.50592C9.2601 5.64832 9.68868 4.86056 10.318 4.24226C10.9474 3.62397 11.7492 3.20291 12.6221 3.03232C13.495 2.86173 14.3998 2.94928 15.2221 3.2839C16.0443 3.61852 16.7471 4.18518 17.2416 4.91222C17.7361 5.63925 18 6.49402 18 7.36842C18 8.54096 17.5259 9.66547 16.682 10.4946C15.8381 11.3237 14.6935 11.7895 13.5 11.7895ZM27 28V26.5263C27 23.7904 25.8938 21.1665 23.9246 19.232C21.9555 17.2974 19.2848 16.2105 16.5 16.2105H10.5C7.71523 16.2105 5.04451 17.2974 3.07538 19.232C1.10625 21.1665 0 23.7904 0 26.5263V28H3V26.5263C3 24.5721 3.79018 22.6979 5.1967 21.3161C6.60322 19.9342 8.51088 19.1579 10.5 19.1579H16.5C18.4891 19.1579 20.3968 19.9342 21.8033 21.3161C23.2098 22.6979 24 24.5721 24 26.5263V28H27Z" fill-opacity="0.5"/>
    </svg>

`;

const notifications = `
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 24C11.375 24 12.5 22.8923 12.5 21.5385H7.5C7.5 22.8923 8.625 24 10 24ZM17.5 16.6154V10.4615C17.5 6.68308 15.4625 3.52 11.875 2.68308V1.84615C11.875 0.824615 11.0375 0 10 0C8.9625 0 8.125 0.824615 8.125 1.84615V2.68308C4.55 3.52 2.5 6.67077 2.5 10.4615V16.6154L0 19.0769V20.3077H20V19.0769L17.5 16.6154ZM15 17.8462H5V10.4615C5 7.40923 6.8875 4.92308 10 4.92308C13.1125 4.92308 15 7.40923 15 10.4615V17.8462Z"  fill-opacity="0.5"/>
    </svg>
`;

const menu = `
    <svg width="28" height="33" viewBox="4 5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.5222 19H6.47778C5.66162 19 5 19.8507 5 20.9V21.1C5 22.1493 5.66162 23 6.47778 23H31.5222C32.3384 23 33 22.1493 33 21.1V20.9C33 19.8507 32.3384 19 31.5222 19Z"  fill-opacity="0.5"/>
        <path d="M31.5222 29H6.47778C5.66162 29 5 29.8507 5 30.9V31.1C5 32.1493 5.66162 33 6.47778 33H31.5222C32.3384 33 33 32.1493 33 31.1V30.9C33 29.8507 32.3384 29 31.5222 29Z"  fill-opacity="0.5"/>
        <path d="M31.5222 9H6.47778C5.66162 9 5 9.85066 5 10.9V11.1C5 12.1493 5.66162 13 6.47778 13H31.5222C32.3384 13 33 12.1493 33 11.1V10.9C33 9.85066 32.3384 9 31.5222 9Z"  fill-opacity="0.5"/>
    </svg>

`;

const ball = `
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9855 6.99802C12.9901 6.83165 13.0308 4.45379 11.7241 2.90588C11.6661 2.76752 11.3907 2.20986 10.5019 1.52831C10.1079 1.19918 9.68941 0.905512 9.25068 0.650289L9.24894 0.649356C9.19348 0.61739 8.10972 0 6.79435 0C6.69446 0 6.59566 0.00629992 6.49795 0.0135331V0.0116665C5.495 -0.0118998 4.49878 0.265996 3.8984 0.557891C3.36584 0.816886 2.77456 1.25111 2.73188 1.28471C1.99435 1.72897 0.595775 3.51184 0.48506 4.45659C0.0380797 5.07188 -0.335451 7.83567 0.485926 9.51914C1.06182 11.8587 3.22977 13.0296 3.40224 13.1194C3.5071 13.1915 4.68858 13.9781 6.14002 13.9781C6.2009 13.9781 6.56901 14 6.70031 14C8.26918 14 10.594 12.8091 11.0806 11.8762C12.4177 10.823 13.1108 8.10866 12.9855 6.99802ZM3.41415 10.5127C2.79254 9.42978 2.43829 8.01487 2.36246 7.68984C2.55919 7.37228 3.52964 5.83137 4.08257 5.36774C4.39565 5.42981 5.703 5.68834 6.93604 5.92867C7.09096 6.36103 7.77064 8.26873 7.9652 9.00512C7.7507 9.27905 6.90809 10.3356 6.07848 11.1629C5.19774 11.1674 3.69972 10.6202 3.41415 10.5127ZM11.2284 2.93528C11.2258 3.04028 11.2026 3.41361 11.0366 3.84224C10.7071 3.66094 9.87879 3.27268 8.74346 3.20711C8.57165 2.93388 7.92512 1.9812 6.90398 1.32041C7.04373 1.02595 7.23829 0.666856 7.35204 0.557424C7.38887 0.546224 7.44607 0.535958 7.53317 0.535958C8.08069 0.535958 9.02664 0.922118 9.10898 0.956417C9.19629 1.00612 10.8967 1.99217 11.2284 2.93528ZM2.11741 7.46934C1.37577 7.33308 0.934856 7.08482 0.803124 7.00082C0.527309 5.92353 0.749391 4.75922 0.783624 4.59239C1.05576 4.06833 1.83055 2.73252 2.34166 2.47889C2.87141 2.36246 3.53202 2.50713 3.80112 2.57782C3.77577 2.95465 3.72702 4.00743 3.87175 5.11225C3.28546 5.62044 2.35748 7.08318 2.11741 7.46934ZM6.43165 0.356994C6.59805 0.370294 6.84223 0.409493 7.00949 0.462926C6.84266 0.701855 6.67171 1.05605 6.5909 1.23105C6.25073 1.29101 4.95876 1.55701 3.9452 2.2647C3.74088 2.20636 3.12382 2.05073 2.53948 2.1044C2.68421 1.8027 2.90044 1.57964 2.92362 1.55677C3.00401 1.49471 4.55143 0.328761 6.43165 0.353961V0.356994ZM10.5691 9.24521C10.3156 9.23401 9.33886 9.17405 8.26788 8.90315C8.0627 8.1327 7.38519 6.23293 7.23027 5.8008C7.72317 5.04422 8.22355 4.29332 8.73133 3.54824C9.96372 3.62104 10.8291 4.1052 10.9966 4.20623C11.7105 5.44264 11.8671 6.70542 11.8886 6.91635C11.5094 8.18706 10.7595 9.04268 10.5691 9.24521ZM0.358527 6.18766C0.376727 6.48306 0.42071 6.79409 0.500226 7.10161C0.428739 7.30089 0.379147 7.50849 0.352461 7.72017C0.307211 7.21039 0.309243 6.69701 0.358527 6.18766ZM2.44804 11.638C2.77478 11.299 3.17756 10.9691 3.33377 10.8445C3.68693 10.9784 5.13729 11.5064 6.0618 11.5064C6.21932 11.7339 6.73433 12.4463 7.36569 12.9908C6.97266 13.405 6.405 13.6005 6.30468 13.633C4.54385 13.6838 2.82894 12.618 2.44804 11.638ZM7.09833 13.6302C7.29809 13.5049 7.50631 13.3399 7.67855 13.1311C7.95957 13.0893 9.16553 12.8658 10.2554 12.0036C10.3273 12.012 10.4458 12.0223 10.5782 12.0183C9.92429 12.7083 8.32877 13.479 7.09833 13.6302ZM10.4402 11.6758C10.8317 10.5773 10.815 9.74897 10.7957 9.48438C11.0106 9.25758 11.7482 8.41129 12.1575 7.12471C12.378 7.16438 12.5215 7.22481 12.5895 7.25865C12.6131 7.35198 12.6525 7.56757 12.6302 7.89447C12.4634 9.07115 11.8875 10.8344 10.8787 11.614C10.7773 11.6697 10.5988 11.6819 10.4402 11.6758Z" fill="black"/>
    </svg>
`;

const player = `
    <svg width="61" height="36" viewBox="0 0 61 36" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_48_364)">
        <path d="M27.0982 35.2119C26.65 35.2115 26.2092 35.3231 25.8174 35.5361H28.3757C27.985 35.3231 27.5453 35.2116 27.0982 35.2119Z" fill="#E6E6E6"/>
        <path d="M32.0625 34.8877C31.3139 34.8868 30.5835 35.1133 29.9719 35.536H34.1503C33.5395 35.1138 32.8101 34.8874 32.0625 34.8877Z" fill="#E6E6E6"/>
        <path d="M20.0298 13.1941C20.0298 13.1941 17.3318 12.371 17.746 13.7251C18.1601 15.0793 20.4326 14.3953 20.4326 14.3953L20.0298 13.1941Z" fill="#228176"/>
        <path d="M30.343 8.111C30.343 8.111 28.9603 6.26053 27.617 8.18156C26.271 10.1064 25.0196 11.6865 25.0196 11.6865L21.6767 12.754L19.7428 12.922L20.2756 14.606L25.8986 13.8071C25.8986 13.8071 32.1588 10.165 30.343 8.111Z" fill="#228176"/>
        <path d="M24.1715 18.3589C24.1715 18.3589 22.0711 19.7989 22.2111 21.1017C22.3511 22.4045 23.2613 25.9702 23.2613 25.9702L25.1517 25.6959C25.1517 25.6959 25.3617 22.9531 24.6616 21.9245L28.0223 20.0731L24.1715 18.3589Z" fill="#228176"/>
        <path d="M28.8274 21.7534C28.8274 21.7534 28.6874 24.2905 29.0375 25.3191C29.3875 26.3476 29.7376 30.1875 29.7376 30.1875H31.698C31.698 30.1875 32.6082 26.8276 31.488 25.3191C31.488 25.3191 31.1379 23.3305 32.1181 22.3705L28.8274 21.7534Z" fill="#228176"/>
        <path d="M28.3723 14.7248C28.3723 14.7248 23.8214 17.5362 23.8214 18.4276L27.4622 21.3761L28.7224 20.0047L28.5824 22.0618L32.5032 22.8161C32.5032 22.8161 33.9034 17.6048 33.8334 17.3991C33.7634 17.1934 33.5534 14.1763 33.5534 14.1763L28.3723 14.7248Z" fill="#228176"/>
        <path d="M25.1517 25.353L23.1213 25.7644L23.4821 27.2169C23.6596 27.9318 23.6798 28.6755 23.5414 29.3987C23.5414 29.3987 25.6418 29.9472 25.6418 29.6729C25.6418 29.3987 25.1517 28.3015 25.2917 27.5473C25.4318 26.793 25.1517 25.353 25.1517 25.353Z" fill="#228176"/>
        <path d="M26.2019 30.4962C26.1319 30.2219 25.5502 28.9784 25.526 29.1887C25.5018 29.3991 24.3816 29.7419 23.9615 29.3305C23.9615 29.3305 23.4014 28.8505 23.1913 29.3305C22.9813 29.8105 22.5612 30.6333 22.5612 30.6333C22.5612 30.6333 20.6708 31.5248 20.9509 32.0047C21.0075 32.1018 21.1645 32.1428 21.3787 32.1464C21.3737 32.1591 21.3711 32.1725 21.371 32.1862V32.2348C21.371 32.2647 21.3831 32.2934 21.4047 32.3145C21.4263 32.3357 21.4556 32.3476 21.4862 32.3476H21.5358C21.5664 32.3476 21.5957 32.3357 21.6173 32.3145C21.6389 32.2934 21.651 32.2647 21.651 32.2348V32.1862C21.6509 32.1687 21.6466 32.1514 21.6384 32.1359C21.6957 32.1309 21.7551 32.1245 21.8162 32.1166C21.8 32.1363 21.7911 32.1609 21.791 32.1862V32.2348C21.791 32.2647 21.8032 32.2934 21.8248 32.3145C21.8464 32.3357 21.8757 32.3476 21.9063 32.3476H21.9559C21.9864 32.3476 22.0157 32.3357 22.0374 32.3145C22.059 32.2934 22.0711 32.2647 22.0711 32.2348V32.1862C22.071 32.1661 22.0655 32.1463 22.055 32.1291C22.0445 32.1118 22.0295 32.0976 22.0115 32.0879C22.1727 32.0616 22.3409 32.0281 22.5081 31.9909C22.4971 32.0084 22.4913 32.0285 22.4912 32.049V32.0976C22.4912 32.1275 22.5033 32.1562 22.5249 32.1774C22.5465 32.1986 22.5758 32.2105 22.6064 32.2105H22.656C22.6866 32.2105 22.7159 32.1986 22.7375 32.1774C22.7591 32.1562 22.7712 32.1275 22.7712 32.0976V32.049C22.7712 32.0272 22.7647 32.0059 22.7526 31.9876C22.7404 31.9693 22.7231 31.9549 22.7027 31.946C22.8282 31.9161 22.9511 31.8849 23.0681 31.8539C23.0572 31.8714 23.0514 31.8914 23.0513 31.9119V31.9605C23.0513 31.9904 23.0634 32.0191 23.085 32.0403C23.1067 32.0614 23.136 32.0733 23.1665 32.0733H23.2161C23.2467 32.0733 23.276 32.0614 23.2976 32.0403C23.3192 32.0191 23.3313 31.9904 23.3314 31.9605V31.9119C23.3313 31.8879 23.3234 31.8645 23.3088 31.8452C23.2942 31.826 23.2737 31.8117 23.2503 31.8047C23.6615 31.6912 23.9615 31.5933 23.9615 31.5933C23.9615 31.5933 24.3098 31.4692 24.7316 31.3015V31.3433C24.7316 31.3733 24.7438 31.402 24.7654 31.4231C24.787 31.4443 24.8163 31.4562 24.8468 31.4562H24.8965C24.927 31.4562 24.9563 31.4443 24.9779 31.4231C24.9995 31.402 25.0117 31.3733 25.0117 31.3433V31.2947C25.0116 31.2776 25.0076 31.2608 24.9999 31.2454C24.9922 31.2301 24.9809 31.2167 24.9671 31.2062C25.0518 31.1714 25.1372 31.1355 25.2217 31.0991V31.1376C25.2217 31.1676 25.2339 31.1963 25.2555 31.2174C25.2771 31.2386 25.3064 31.2505 25.3369 31.2505H25.3866C25.4171 31.2505 25.4464 31.2386 25.468 31.2174C25.4896 31.1963 25.5018 31.1676 25.5018 31.1376V31.089C25.5018 31.0709 25.4973 31.053 25.4887 31.0369C25.4801 31.0208 25.4677 31.007 25.4525 30.9967C25.5438 30.9549 25.6318 30.9132 25.7129 30.8724C25.7126 30.876 25.7118 30.8796 25.7118 30.8833V30.9319C25.7118 30.9618 25.724 30.9906 25.7456 31.0117C25.7672 31.0329 25.7965 31.0448 25.827 31.0448H25.8767C25.9072 31.0448 25.9365 31.0329 25.9581 31.0117C25.9797 30.9906 25.9919 30.9618 25.9919 30.9319V30.8833C25.9919 30.8573 25.9827 30.8321 25.9659 30.812C25.9491 30.7918 25.9257 30.778 25.8997 30.7728C26.0954 30.6614 26.2189 30.5627 26.2019 30.4962Z" fill="#228176"/>
        <path d="M31.838 29.8788L29.62 29.7417C29.62 29.7417 29.7544 32.0045 29.4855 32.7588C29.2167 33.513 29.3511 33.7873 29.3511 33.7873L31.3003 33.9245L31.838 29.8788Z" fill="#228176"/>
        <path d="M31.8653 34.88C31.8552 34.5975 31.5511 33.2624 31.4826 33.4632C31.4141 33.664 30.2455 33.7706 29.9223 33.2824C29.9223 33.2824 29.4767 32.6986 29.1691 33.1252C28.8614 33.5517 28.2754 34.2707 28.2754 34.2707C28.2754 34.2707 26.2368 34.7565 26.4085 35.2831C26.4433 35.3896 26.588 35.4617 26.7968 35.509C26.7892 35.5204 26.7837 35.533 26.7808 35.5463L26.7704 35.5938C26.764 35.6231 26.7698 35.6537 26.7864 35.6788C26.8031 35.7039 26.8292 35.7215 26.8591 35.7277L26.9076 35.7379C26.9375 35.7441 26.9687 35.7385 26.9943 35.7222C27.0199 35.7059 27.0379 35.6803 27.0443 35.651L27.0547 35.6035C27.0583 35.5864 27.0577 35.5686 27.053 35.5518C27.1101 35.5586 27.1696 35.5644 27.231 35.5692C27.211 35.5852 27.1971 35.6074 27.1916 35.6321L27.1813 35.6796C27.1749 35.7089 27.1806 35.7395 27.1973 35.7646C27.2139 35.7897 27.24 35.8073 27.2699 35.8135L27.3184 35.8237C27.3483 35.8299 27.3795 35.8243 27.4052 35.808C27.4308 35.7917 27.4488 35.7661 27.4552 35.7368L27.4655 35.6893C27.4697 35.6696 27.4685 35.6492 27.4619 35.6302C27.4553 35.6111 27.4437 35.5942 27.4281 35.581C27.5913 35.5882 27.763 35.5898 27.9344 35.5876C27.92 35.6024 27.91 35.6209 27.9055 35.641L27.8952 35.6885C27.8888 35.7177 27.8946 35.7483 27.9112 35.7734C27.9278 35.7985 27.954 35.8161 27.9839 35.8224L28.0324 35.8325C28.0623 35.8387 28.0935 35.8331 28.1191 35.8168C28.1447 35.8005 28.1627 35.7749 28.1691 35.7457L28.1794 35.6981C28.1841 35.6768 28.1823 35.6546 28.1743 35.6342C28.1663 35.6139 28.1524 35.5962 28.1344 35.5834C28.2634 35.5798 28.3903 35.5743 28.5113 35.5679C28.4969 35.5828 28.487 35.6012 28.4825 35.6212L28.4722 35.6687C28.4658 35.698 28.4716 35.7285 28.4882 35.7537C28.5048 35.7788 28.531 35.7964 28.5609 35.8026L28.6094 35.8128C28.6393 35.819 28.6705 35.8134 28.6961 35.7971C28.7217 35.7808 28.7397 35.7552 28.7461 35.7259L28.7564 35.6784C28.7615 35.6549 28.7587 35.6305 28.7486 35.6086C28.7384 35.5868 28.7214 35.5687 28.7 35.557C29.1263 35.53 29.4405 35.4955 29.4405 35.4955C29.4405 35.4955 29.8077 35.4452 30.2559 35.3673L30.247 35.4083C30.2406 35.4376 30.2464 35.4681 30.263 35.4932C30.2796 35.5183 30.3058 35.5359 30.3356 35.5422L30.3842 35.5523C30.414 35.5586 30.4452 35.5529 30.4709 35.5366C30.4965 35.5204 30.5145 35.4948 30.5209 35.4655L30.5312 35.418C30.5348 35.4012 30.5345 35.3839 30.5302 35.3673C30.5259 35.3507 30.5178 35.3353 30.5065 35.3223C30.5967 35.3055 30.6879 35.2879 30.7783 35.2695L30.7701 35.3072C30.7637 35.3365 30.7695 35.367 30.7861 35.3921C30.8027 35.4172 30.8289 35.4348 30.8588 35.4411L30.9073 35.4512C30.9372 35.4575 30.9684 35.4518 30.994 35.4355C31.0196 35.4192 31.0376 35.3936 31.044 35.3644L31.0543 35.3169C31.0582 35.2991 31.0576 35.2807 31.0526 35.2632C31.0477 35.2457 31.0384 35.2297 31.0258 35.2164C31.124 35.1943 31.2189 35.1715 31.307 35.1481C31.3059 35.1516 31.3044 35.1549 31.3036 35.1586L31.2932 35.2061C31.2868 35.2354 31.2926 35.2659 31.3092 35.291C31.3259 35.3161 31.352 35.3337 31.3819 35.34L31.4304 35.3501C31.4603 35.3563 31.4915 35.3507 31.5171 35.3344C31.5428 35.3181 31.5607 35.2925 31.5671 35.2633L31.5775 35.2157C31.583 35.1903 31.5794 35.1638 31.5672 35.1406C31.5551 35.1175 31.5352 35.0992 31.5108 35.0888C31.726 35.0199 31.8678 34.9485 31.8653 34.88Z" fill="#228176"/>
        <path d="M28.3723 5.81056C29.4937 5.81056 30.4027 4.92026 30.4027 3.82203C30.4027 2.72379 29.4937 1.8335 28.3723 1.8335C27.251 1.8335 26.3419 2.72379 26.3419 3.82203C26.3419 4.92026 27.251 5.81056 28.3723 5.81056Z" fill="#228176"/>
        <path d="M30.1927 3.6167C30.1927 3.6167 31.3129 4.9881 31.873 4.91953L29.4225 6.77092C29.4225 6.77092 29.1425 5.60523 28.7924 5.46809C28.4423 5.33095 30.1927 3.6167 30.1927 3.6167Z" fill="#228176"/>
        <path d="M34.5686 13.7991C34.5686 13.7991 34.5684 6.23262 33.2724 5.58083C31.9771 4.92941 31.1203 4.55762 31.1203 4.55762C31.1013 4.80589 31.0292 5.04748 30.9089 5.26678C30.7885 5.48608 30.6225 5.67822 30.4216 5.83076C29.9921 6.15549 29.5643 6.42475 29.3252 6.42561L29.3175 6.39351L29.2884 6.31199L28.5824 7.38777C28.5824 7.38777 27.9523 7.52491 27.7422 7.93633C27.6286 8.15891 28.1644 10.3996 27.8472 12.4277C27.5781 14.1483 26.4441 15.7016 26.412 15.8905C26.3576 16.2097 27.7359 15.3733 28.3566 14.9823C28.3658 14.9923 28.3723 14.999 28.3723 14.999C28.3723 14.999 28.0223 15.1362 28.7224 14.9305C29.1191 14.8139 29.673 14.8075 30.0787 14.8237C30.0782 14.9429 30.0811 15.0375 30.0877 15.1019C30.1577 15.7876 33.6584 16.7476 34.1485 16.5419C34.6386 16.3362 34.5686 13.7991 34.5686 13.7991Z" fill="#228176"/>
        <path d="M32.1181 16.4048C32.1181 16.4048 30.0177 18.2562 31.4179 18.599C32.8182 18.9419 33.3783 16.6791 33.3783 16.6791L32.1181 16.4048Z" fill="#228176"/>
        <path d="M29.6676 21.2047C29.6676 21.2047 30.6478 20.3133 31.2079 20.7933C31.768 21.2733 32.1181 21.6161 32.1181 21.6161C32.1181 21.6161 30.5077 20.6562 29.6676 21.2047Z" fill="#228176"/>
        <path d="M29.9222 31.8705C29.9222 31.8705 30.4747 31.3681 30.7904 31.6386C31.1061 31.9091 31.3034 32.1024 31.3034 32.1024C31.3034 32.1024 30.3957 31.5613 29.9222 31.8705Z" fill="#228176"/>
        <path d="M23.7327 27.1975C23.7327 27.1975 24.112 26.5593 24.4944 26.7281C24.8768 26.897 25.123 27.0256 25.123 27.0256C25.123 27.0256 24.0939 26.7667 23.7327 27.1975Z" fill="#228176"/>
        <path d="M34.0395 6.52198C33.3455 5.15566 31.2338 5.90084 31.5769 7.38944C31.582 7.41163 31.5874 7.43404 31.593 7.45667C31.9546 8.86579 32.5457 10.2087 33.3433 11.4337L32.5732 14.7937L31.733 16.5079L33.4834 16.9193L35.6538 11.7766C35.6538 11.7766 35.0551 8.52135 34.0395 6.52198Z" fill="#228176"/>
        <path opacity="0.2" d="M33.0283 11.5361L31.698 16.4732L32.8182 14.1418L33.0283 11.5361Z" fill="black"/>
        <path d="M29.6475 1.5043C29.6475 1.5043 28.5251 0.347074 27.3954 1.07585C26.2658 1.80462 25.7299 2.51256 25.8406 3.00548C25.9514 3.4984 26.2792 4.18403 26.2792 4.18403C26.2792 4.18403 26.0755 3.16284 27.0109 3.08727C27.9463 3.0117 29.2386 2.40543 29.2386 2.40543L30.1128 4.23377C30.1128 4.23377 30.2364 3.81008 30.579 3.93161C30.9217 4.05313 30.6561 1.63984 29.6475 1.5043Z" fill="#228176"/>
        <path d="M22.4562 27.6505C22.4561 27.8242 22.4413 27.9976 22.412 28.1689V28.1696C22.3316 28.6304 22.1454 29.0673 21.8674 29.4473C21.5894 29.8273 21.2269 30.1405 20.8072 30.3633C20.3875 30.586 19.9217 30.7125 19.4448 30.7331C18.9679 30.7538 18.4925 30.6681 18.0544 30.4824H18.0537C17.9241 30.4277 17.7984 30.3642 17.6777 30.2925C17.3035 30.0713 16.9804 29.7763 16.7287 29.4263C16.4771 29.0763 16.3024 28.679 16.2158 28.2594C16.1752 28.0589 16.1548 27.8549 16.1549 27.6505C16.1549 27.5573 16.1591 27.4647 16.1675 27.3735V27.3728C16.2402 26.5854 16.6186 25.8554 17.2249 25.3333C17.8311 24.8113 18.6188 24.537 19.4255 24.5672C20.2321 24.5974 20.9962 24.9296 21.56 25.4955C22.1238 26.0613 22.4443 26.8175 22.4555 27.608V27.6087C22.4562 27.6231 22.4562 27.6361 22.4562 27.6505Z" fill="#228176"/>
        <path d="M20.0811 26.6197H18.67L17.9644 25.4231L18.443 24.6107L18.471 24.6034C19.0768 24.4448 19.7167 24.4623 20.3125 24.6538L20.3379 24.662L20.7867 25.4231L20.0811 26.6197ZM18.7508 26.4826H20.0003L20.625 25.4231L20.2434 24.776C19.6898 24.604 19.098 24.5876 18.5352 24.7286L18.1261 25.4231L18.7508 26.4826Z" fill="white"/>
        <path d="M20.0111 29.0885H18.6L17.8944 27.8917L18.6 26.6948H20.0111L20.7167 27.8917L20.0111 29.0885ZM18.6808 28.9513H19.9303L20.555 27.8917L19.9303 26.832H18.6808L18.0561 27.8917L18.6808 28.9513Z" fill="white"/>
        <path d="M19.3055 30.8048C18.8655 30.8056 18.43 30.7173 18.0265 30.5453L17.9545 30.5147L18.67 29.3003H20.0811L20.7664 30.4629L20.6983 30.4949C20.2639 30.6999 19.7877 30.8059 19.3055 30.8048ZM18.1547 30.4493C18.5397 30.601 18.9519 30.6751 19.3668 30.667C19.7817 30.659 20.1906 30.5691 20.5692 30.4026L20.0003 29.4374H18.7509L18.1547 30.4493Z" fill="white"/>
        <path d="M22.3916 27.8538H20.9805L20.2749 26.6572L20.9804 25.46H21.623L21.6437 25.4813C22.2009 26.0555 22.5159 26.8147 22.5255 27.6067V27.6266L22.3916 27.8538ZM21.0613 27.7166H22.3107L22.3852 27.5904C22.3717 26.8493 22.0787 26.1393 21.5626 25.5971H21.0613L20.4366 26.6572L21.0613 27.7166Z" fill="white"/>
        <path d="M20.961 30.3574L20.2749 29.1943L20.9804 27.9971H22.3915L22.4821 28.15L22.4811 28.1807C22.4046 28.6174 22.2352 29.0334 21.984 29.4018C21.7327 29.7702 21.4052 30.0828 21.0226 30.3193L20.961 30.3574ZM20.4366 29.1943L21.009 30.1645C21.3557 29.9388 21.6523 29.6468 21.8808 29.3061C22.1093 28.9653 22.2651 28.5828 22.3388 28.1815L22.3108 28.1342H21.0613L20.4366 29.1943Z" fill="white"/>
        <path d="M17.7026 30.387L17.6415 30.3508C17.2592 30.1245 16.929 29.8229 16.6717 29.4652C16.4145 29.1074 16.2359 28.7013 16.1472 28.2725L16.142 28.2471L16.2895 27.9971H17.7007L18.4062 29.1943L17.7026 30.387ZM16.2898 28.2707C16.3748 28.6644 16.5392 29.0376 16.7733 29.3683C17.0075 29.6989 17.3066 29.9806 17.6532 30.1966L18.2445 29.1943L17.6198 28.1342H16.3704L16.2898 28.2707Z" fill="white"/>
        <path d="M17.7006 27.717H16.2896L16.0975 27.3919V27.3735C16.1667 26.5964 16.5282 25.8722 17.1119 25.3416L17.1321 25.3232H17.7007L18.4062 26.5205L17.7006 27.717ZM16.3703 27.5799H17.6198L18.2445 26.5205L17.6198 25.4604H17.1874C16.6472 25.9597 16.3103 26.6339 16.2393 27.358L16.3703 27.5799Z" fill="white"/>
    </g>
    <defs>
        <clipPath id="clip0_48_364">
            <rect width="60" height="35" fill="white" transform="translate(0.191772 0.834961)"/>
        </clipPath>
    </defs>
    </svg>
`;

const club = `
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.316 2.56888C17.556 1.84763 13 -0.0186096 13 0.000140253C13 0.994697 12.6839 1.94852 12.1213 2.65178C11.5587 3.35503 10.7957 3.75012 10 3.75012C9.20435 3.75012 8.44129 3.35503 7.87868 2.65178C7.31607 1.94852 7.00001 0.994697 7.00001 0.000140253C7.00001 -0.0186096 2.44401 1.84763 0.683014 2.56888C0.483494 2.65062 0.30987 2.8094 0.187135 3.02234C0.0643994 3.23529 -0.00111762 3.49142 1.44268e-05 3.75387V8.39884C5.63869e-05 8.58871 0.0347013 8.77608 0.10132 8.94671C0.167938 9.11735 0.264779 9.26677 0.384493 9.38364C0.504206 9.50051 0.643646 9.58176 0.792228 9.62121C0.94081 9.66066 1.09463 9.65729 1.24201 9.61134L4.00001 8.75009V23.75C4.00001 24.0815 4.10537 24.3995 4.2929 24.6339C4.48044 24.8683 4.73479 25 5.00001 25H15C15.2652 25 15.5196 24.8683 15.7071 24.6339C15.8946 24.3995 16 24.0815 16 23.75V8.75009L18.758 9.61134C18.9054 9.65729 19.0592 9.66066 19.2078 9.62121C19.3564 9.58176 19.4958 9.50051 19.6155 9.38364C19.7352 9.26677 19.8321 9.11735 19.8987 8.94671C19.9653 8.77608 19.9999 8.58871 20 8.39884V3.75387C20.0011 3.49126 19.9354 3.23502 19.8125 3.02205C19.6895 2.80909 19.5157 2.65041 19.316 2.56888Z" fill="#F4B61C"/>
    </svg>
`;

const selected = `
    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M2.97587 7.40323L1.0882 5.17658C1.03884 5.11764 0.980054 5.07085 0.915247 5.03892C0.850441 5.00698 0.780905 4.99054 0.71067 4.99054C0.640435 4.99054 0.570899 5.00698 0.506093 5.03892C0.441286 5.07085 0.382498 5.11764 0.333137 5.17658C0.283174 5.23481 0.243505 5.30415 0.216431 5.3806C0.189356 5.45704 0.175415 5.53906 0.175415 5.62191C0.175415 5.70476 0.189356 5.78678 0.216431 5.86323C0.243505 5.93967 0.283174 6.00902 0.333137 6.06724L2.59294 8.73286C2.80328 8.98097 3.14306 8.98097 3.3534 8.73286L9.07032 1.99565C9.12029 1.93743 9.15996 1.86808 9.18703 1.79164C9.21411 1.71519 9.22805 1.63317 9.22805 1.55032C9.22805 1.46747 9.21411 1.38545 9.18703 1.30901C9.15996 1.23256 9.12029 1.16322 9.07032 1.10499C9.02096 1.04606 8.96217 0.999262 8.89737 0.967326C8.83256 0.93539 8.76303 0.918945 8.69279 0.918945C8.62256 0.918945 8.55302 0.93539 8.48821 0.967326C8.42341 0.999262 8.36462 1.04606 8.31526 1.10499L2.97587 7.40323Z" fill="white"/>
    </svg>
`;

const settings = `
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke="none" fill-rule="evenodd" clip-rule="evenodd" d="M9.09429 3.33907C9.38357 1.97584 10.5958 1 12 1C13.4042 1 14.6164 1.97584 14.9057 3.33907L14.962 3.60457C16.0187 3.97101 16.9989 4.53018 17.8497 5.2566L18.1074 5.17298C19.442 4.73991 20.9 5.29353 21.6021 6.5C22.3042 7.70647 22.0585 9.23593 21.0131 10.1661L20.8113 10.3457C21.02 11.4399 21.018 12.5617 20.8095 13.6528L21.0131 13.8339C22.0585 14.7641 22.3042 16.2935 21.6021 17.5C20.9 18.7065 19.442 19.2601 18.1074 18.827L17.8489 18.7431C17.4276 19.1021 16.971 19.4234 16.4827 19.7031C15.9945 19.9827 15.4857 20.2144 14.9617 20.3969L14.9057 20.6609C14.6164 22.0242 13.4042 23 12 23C10.5958 23 9.38357 22.0242 9.09429 20.6609L9.03795 20.3954C7.98129 20.029 7.00107 19.4698 6.1503 18.7434L5.8926 18.827C4.55798 19.2601 3.10004 18.7065 2.39794 17.5C1.69584 16.2935 1.94155 14.7641 2.98689 13.8339L3.18874 13.6543C2.98002 12.5601 2.98202 11.4383 3.19048 10.3472L2.98689 10.1661C1.94155 9.23593 1.69584 7.70647 2.39794 6.5C3.10004 5.29353 4.55798 4.73991 5.8926 5.17298L6.1511 5.25686C6.57236 4.89792 7.02899 4.5766 7.51725 4.29693C8.00551 4.01726 8.51431 3.78559 9.03826 3.60311L9.09429 3.33907ZM12 3C11.5491 3 11.1598 3.31335 11.067 3.75109L10.8893 4.58834C10.8115 4.95506 10.5335 5.24784 10.1692 5.34682C9.59911 5.50169 9.04777 5.72966 8.52521 6.02898C8.00265 6.3283 7.52798 6.68802 7.10776 7.10038C6.83919 7.36392 6.44464 7.45636 6.0856 7.33986L5.26593 7.07388C4.83737 6.93482 4.36922 7.1126 4.14377 7.5C3.91832 7.8874 3.99722 8.37852 4.33289 8.6772L4.97653 9.24993C5.25789 9.50029 5.37444 9.88578 5.27841 10.2484C4.97456 11.396 4.97134 12.6029 5.27656 13.7524C5.37291 14.1152 5.25641 14.501 4.97486 14.7516L4.33289 15.3228C3.99722 15.6215 3.91832 16.1126 4.14377 16.5C4.36922 16.8874 4.83737 17.0652 5.26593 16.9261L6.08555 16.6602C6.44502 16.5435 6.84005 16.6363 7.10861 16.9005C7.95939 17.7375 9.01454 18.3382 10.1682 18.6509C10.5328 18.7497 10.811 19.0426 10.8888 19.4095L11.067 20.2489C11.1598 20.6867 11.5491 21 12 21C12.4509 21 12.8402 20.6867 12.933 20.2489L13.1107 19.4117C13.1885 19.0449 13.4665 18.7522 13.8308 18.6532C14.4009 18.4983 14.9522 18.2703 15.4748 17.971C15.9974 17.6717 16.472 17.312 16.8922 16.8996C17.1608 16.6361 17.5554 16.5436 17.9144 16.6601L18.7341 16.9261C19.1626 17.0652 19.6308 16.8874 19.8562 16.5C20.0817 16.1126 20.0028 15.6215 19.6671 15.3228L19.0235 14.7501C18.7421 14.4997 18.6256 14.1142 18.7216 13.7516C19.0254 12.604 19.0287 11.3971 18.7234 10.2476C18.6271 9.88479 18.7436 9.49897 19.0251 9.24844L19.6671 8.6772C20.0028 8.37852 20.0817 7.8874 19.8562 7.5C19.6308 7.1126 19.1626 6.93482 18.7341 7.07388L17.9144 7.33984C17.555 7.45649 17.1599 7.36367 16.8914 7.09947C16.0406 6.2625 14.9855 5.6618 13.8318 5.3491C13.4672 5.25027 13.189 4.95739 13.1112 4.59046L12.933 3.75109C12.8402 3.31335 12.4509 3 12 3ZM12 15.6316C14.0216 15.6316 15.6605 14.0057 15.6605 12C15.6605 9.99433 14.0216 8.36842 12 8.36842C9.97838 8.36842 8.33953 9.99433 8.33953 12C8.33953 14.0057 9.97838 15.6316 12 15.6316ZM12 13.6316C11.0917 13.6316 10.3554 12.9011 10.3554 12C10.3554 11.0989 11.0917 10.3684 12 10.3684C12.9083 10.3684 13.6446 11.0989 13.6446 12C13.6446 12.9011 12.9083 13.6316 12 13.6316Z"></path>
    </svg>

`;

export default {
  feed,
  messages,
  profile,
  notifications,
  menu,
  ball,
  player,
  club,
  selected,
  home,
  settings,
};

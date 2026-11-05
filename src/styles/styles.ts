import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --page-bg: #fff;
        --surface-bg: rgb(241, 242, 243);
        --text-primary: #18216d;
        --text-secondary: #404041;
        --input-bg: rgb(241, 242, 243);
        --border-color: #CDD1D4;
        --link-color: #2E186A;
        --focus-color: #2e186a;
    }

    :root[data-theme="dark"] {
        --page-bg: #0a0a0c;
        --surface-bg: #1f2937;
        --text-primary: #e5e7eb;
        --text-secondary: #cbd5e1;
        --input-bg: #273449;
        --border-color: #475569;
        --link-color: #c4b5fd;
        --focus-color: #a78bfa;
    }

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--page-bg);
        color: var(--text-primary);
        overflow-x: hidden;
    }

    a:hover {
        color: var(--link-color);
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: var(--input-bg);
        color: var(--text-primary);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: var(--focus-color) 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: var(--text-primary);
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: var(--text-primary);
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: var(--link-color);

        :hover {
            color: var(--link-color);
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-drawer-content {
        background: var(--surface-bg);
        color: var(--text-primary);
    }
`;

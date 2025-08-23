# Ben Shupe Portfolio

Welcome! This is the code for my personal web portfolio, **[benshupe.com](https://benshupe.com)**. It showcases my projects, skills, and contact information.

## Features

- **Project Showcase:** Acrylic/frosted-glass project cards with scroll-aware background effects.  
- **Interactive Background:** Moving blob animations that respond to scroll for a dynamic visual experience.  
- **About Section:** Introduces me and my skills in a clean, readable layout.  
- **Contact Form:** Sends emails via AWS Lambda + SES with CAPTCHA verification.  
- **Responsive Design:** Looks great on desktop, tablet, and mobile.  

## Tech Stack

- React  
- AWS Lambda + API Gateway + SES  
- Cloudflare Turnstile CAPTCHA  
- Pure CSS for styling (no Tailwind)  

## Live Site

Check it out here: **[benshupe.com](https://benshupe.com)**  

## Setup

Clone the repo:

    git clone https://github.com/BenShupe/benshupe-frontend.git

Install dependencies:

    npm install

Set environment variables for Lambda:

    TURNSTILE_SECRET=your-turnstile-secret
    API_SECRET=your-lambda-secret

Start the development server:

    npm start

Deploy your frontend and Lambda to AWS (S3 + CloudFront recommended).

AI Assistance

During development, I used AI (ChatGPT) to help me:

- Debug tricky scroll and acrylic effects

- Brainstorm component structure and layout

- Refine CSS styling for better visuals

All code was written, tested, and reviewed by me — AI was used as a helper tool, not a replacement.
License

This project is open source under the MIT License

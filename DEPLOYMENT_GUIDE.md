# Aarya Surveillance — Windows Deployment Guide
## From Zero to Live on aaryasurveillance.com

---

## PART 1 — SETUP YOUR COMPUTER (One time only)

### Step 1 — Install Node.js
1. Go to: https://nodejs.org
2. Click the big green button "LTS" (recommended)
3. Download the .msi file
4. Double-click to install — keep clicking Next, use all defaults
5. Restart your computer after install

### Step 2 — Verify it worked
1. Press Windows key + R
2. Type: cmd → press Enter
3. In the black window, type:
   ```
   node --version
   ```
4. You should see something like: v20.x.x
5. That means Node.js is ready ✅

---

## PART 2 — SET UP THE PROJECT

### Step 3 — Unzip this folder
1. Right-click the downloaded ZIP file
2. Click "Extract All"
3. Extract to your Desktop or Documents
4. You'll have a folder called: aarya-final

### Step 4 — Add your logo
1. Find your logo file: Aarya_Surveillance_logo.jpg
2. Copy it into the aarya-final/public/ folder
3. Rename it to exactly: logo.jpg

### Step 5 — Install project dependencies
1. Open the aarya-final folder
2. Click on the address bar at the top of the folder window
3. Type: cmd → press Enter (opens terminal IN that folder)
4. Type this command and press Enter:
   ```
   npm install
   ```
5. Wait 1-2 minutes. You'll see lots of text — that's normal.
6. When it stops and shows your folder path again, it's done ✅

### Step 6 — Test it on your computer
In the same terminal, type:
```
npm run dev
```
Then open your browser and go to: http://localhost:8080
You should see your website! 🎉

Press Ctrl+C in the terminal to stop it when done testing.

---

## PART 3 — SET UP FREE EMAIL (EmailJS)

### Step 7 — Create EmailJS account
1. Go to: https://emailjs.com
2. Click "Sign Up Free"
3. Use: admin@aaryasurveillance.com

### Step 8 — Connect your Zoho email
1. Left sidebar → Email Services → Add New Service
2. Choose: Other (SMTP)
3. Fill in:
   - Service Name: Aarya Zoho
   - Host: smtppro.zoho.com
   - Port: 465
   - Username: admin@aaryasurveillance.com
   - Password: [your Zoho app password]
4. Click Connect → Test → Save
5. COPY the Service ID shown (like: service_abc123)

### Step 9 — Create email template
1. Left sidebar → Email Templates → Create New Template
2. Name: Aarya Enquiry
3. Subject field:
   ```
   New Enquiry from {{customer_name}} — Aarya Surveillance
   ```
4. Body field:
   ```
   New website enquiry received.

   Name    : {{customer_name}}
   Email   : {{customer_email}}
   Phone   : {{customer_phone}}
   City    : {{customer_city}}
   Type    : {{customer_type}}
   Service : {{service_needed}}

   Details:
   {{summary}}

   Reply to: {{customer_email}}
   ```
5. To Email: sm@aaryasurveillance.com
6. Reply To: {{customer_email}}
7. Save Template
8. COPY the Template ID (like: template_xyz789)

### Step 10 — Get your Public Key
1. Top right → Account name → API Keys
2. COPY your Public Key

### Step 11 — Add keys to project
1. In the aarya-final folder, find: .env.example
2. Make a COPY of it in the same folder
3. Rename the copy to exactly: .env.local
4. Open .env.local with Notepad
5. Replace the placeholder values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
6. Save the file

### Step 12 — Test emails locally
1. In terminal (npm run dev still running): http://localhost:8080/contact
2. Fill the form and submit
3. Check sm@aaryasurveillance.com inbox

---

## PART 4 — PUSH TO GITHUB

### Step 13 — Create GitHub account
1. Go to: https://github.com
2. Sign up (free) — use your personal email

### Step 14 — Install GitHub Desktop (easier than command line)
1. Go to: https://desktop.github.com
2. Download and install
3. Sign in with your GitHub account

### Step 15 — Create repository
1. In GitHub Desktop → File → New Repository
2. Name: aarya-surveillance-website
3. Local path: choose the aarya-final folder location
4. Click Create Repository
5. Then click "Publish repository"
6. Make sure "Keep this code private" is CHECKED ✅
7. Click Publish

---

## PART 5 — DEPLOY ON VERCEL

### Step 16 — Create Vercel account
1. Go to: https://vercel.com
2. Click "Sign Up" → choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub

### Step 17 — Deploy the project
1. Vercel Dashboard → click "Add New Project"
2. Find aarya-surveillance-website → click Import
3. Settings (Vercel usually detects these automatically):
   - Framework: Vite
   - Build Command: npm run build
   - Output Directory: dist
4. Click Deploy
5. Wait ~2 minutes
6. You'll get a URL like: aarya-surveillance-website.vercel.app
7. Open it — your website is live! 🎉

### Step 18 — Add EmailJS environment variables in Vercel
1. Vercel Dashboard → your project → Settings → Environment Variables
2. Add these one by one:
   ```
   VITE_EMAILJS_SERVICE_ID     → [your service ID]
   VITE_EMAILJS_TEMPLATE_ID    → [your template ID]
   VITE_EMAILJS_PUBLIC_KEY     → [your public key]
   ```
3. For each one: select Production + Preview + Development
4. After adding all 3 → click Redeploy

---

## PART 6 — CONNECT YOUR DOMAIN

### Step 19 — Add domain in Vercel
1. Vercel → your project → Settings → Domains
2. Type: aaryasurveillance.com → Add
3. Type: www.aaryasurveillance.com → Add
4. Vercel will show you what DNS records to add

### Step 20 — Update DNS in Zoho
1. Log into your Zoho admin (mailadmin.zoho.com)
2. Go to Domains section
3. Find aaryasurveillance.com → Manage DNS
4. Add these records (DO NOT touch any MX records):

   | Type  | Name | Value                |
   |-------|------|----------------------|
   | A     | @    | 76.76.21.21          |
   | CNAME | www  | cname.vercel-dns.com |

5. Save

### Step 21 — Wait for DNS
- DNS changes take 15 minutes to 24 hours to work worldwide
- You can test your vercel.app URL immediately
- aaryasurveillance.com will start working within 24 hours
- Vercel handles SSL certificate automatically ✅

---

## ✅ FINAL TESTING CHECKLIST

Test everything after DNS propagates:

- [ ] aaryasurveillance.com loads correctly
- [ ] All 5 pages work (Home / About / Services / Brands / Contact)
- [ ] Mobile menu opens and closes
- [ ] Brands carousel scrolls automatically
- [ ] Quick enquiry form submits → email arrives at sm@
- [ ] Smart 4-step form works through all steps
- [ ] WhatsApp button opens chat with +91-9390284103
- [ ] SSL padlock shows in browser (🔒)
- [ ] Logo appears in navbar and footer

---

## 🆘 IF SOMETHING GOES WRONG

**Website not loading after DNS?**
→ Wait up to 24 hours. Test vercel.app URL first.

**Emails not sending?**
→ Double-check EmailJS keys in Vercel environment variables
→ Make sure you redeployed after adding variables

**Build failing on Vercel?**
→ Share the error message and I'll fix it immediately

**Logo not showing?**
→ Make sure the file is in public/ folder and named exactly logo.jpg

---

## 💰 YOUR TOTAL COST

| Item | Cost |
|---|---|
| Hosting (Vercel) | ₹0 forever |
| EmailJS (200 emails/month) | ₹0 |
| SSL Certificate | ₹0 (auto by Vercel) |
| GitHub | ₹0 |
| Domain (you own it) | ₹0 extra |
| **TOTAL** | **₹0/month** |

---

Stuck at any step? Share a screenshot and I'll guide you through it. 💪

# Vercel Deployment Instructions

## 🚀 How to Deploy with Working Contact Form

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### Step 2: Configure Environment Variables on Vercel

1. **Go to Vercel Dashboard**
   - Login to vercel.com
   - Find your project
   - Go to Settings → Environment Variables

2. **Add Environment Variables:**
   ```
   EMAIL_USER = kadirnuhovic8@gmail.com
   EMAIL_PASS = nnrc beuh qpjk ppfl
   ```

3. **Redeploy the Project**
   - Go to Deployments
   - Click "Redeploy"
   - Wait for deployment to complete

### Step 3: Test the Contact Form

1. **Visit your deployed site**
2. **Go to Contact page**
3. **Fill out the form**
4. **Check your Gmail** for the message

### 🔧 Troubleshooting

If you still get "Failed to send message":

1. **Check Vercel Logs:**
   - Go to Vercel → Functions → /api/contact
   - Look for error messages

2. **Verify Environment Variables:**
   - Make sure EMAIL_USER and EMAIL_PASS are set correctly
   - No extra spaces or quotes

3. **Check Gmail Settings:**
   - 2-factor authentication is enabled
   - App password is correct
   - Less secure apps is allowed (if needed)

### 📧 Alternative: Use Resend (Recommended for Production)

For better reliability, consider using Resend instead of Gmail:

1. **Sign up for Resend:** https://resend.com
2. **Get API key**
3. **Replace Nodemailer with Resend API**

### ✅ After Setup

Your contact form should work on Vercel deployment!
Emails will be sent to: kadirnuhovic8@gmail.com

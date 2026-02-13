# Jal-Seva Google Form Setup Guide

Use this guide to create your branded waitlist form in Google Forms and collect responses in a Google Sheet.

---

## 1. Header image and brand

A branded header image is in your project:

- **Location:** `public/jal-seva-form-header.png`  
- **Use it as:** The form’s header/theme image in Google Forms (see step 3).

**Brand text you can use in the form:**

- **Title:** Jal-Seva – Water Partner Waitlist  
- **Short description:**  
  *Earn more every day. Distribute low-cost clean water on your rickshaw — zero investment, zero risk. Join the waitlist for early access.*

---

## 2. Create the form

1. Go to **[Google Forms](https://forms.google.com)** and sign in.
2. Click **Blank** (or **+** to start a new form).
3. Name the form: **Jal-Seva – Water Partner Waitlist**.

---

## 3. Add image and branding

1. Click the **theme** (palette) icon in the top-right.
2. Under **Header**, click **Choose image** and upload:
   - `public/jal-seva-form-header.png`  
   (Or the same file from your project folder.)
3. Optionally set **Background color** to a light colour (e.g. light blue or white).
4. In the form itself, the first block is the **title**.  
   - Set title: **Jal-Seva – Water Partner Waitlist**.  
   - In the **description** under the title, paste the brand text from section 1.

---

## 4. Add these questions (match your website)

Add questions in this order so they match your site and any future integration.

| # | Question / field        | Type        | Required | Options / notes                          |
|---|--------------------------|------------|----------|------------------------------------------|
| 1 | Full Name                | Short answer | Yes    | —                                        |
| 2 | Mobile Number            | Short answer | Yes    | Description: "10-digit mobile number"    |
| 3 | City                     | Short answer | Yes    | Placeholder: e.g. Delhi, Lucknow, Pune |
| 4 | Type of Rickshaw         | Dropdown   | Yes      | Cycle Rickshaw, E-Rickshaw, Auto Rickshaw |
| 5 | Preferred contact (optional) | Short answer | No   | e.g. WhatsApp, best time to call         |

**How to add in Google Forms:**

- For **Short answer:** Add question → choose **Short answer**.
- For **Type of Rickshaw:** Add question → choose **Dropdown** → add the three options above.
- Turn **Required** on for questions 1–4; leave it off for question 5.

---

## 5. Connect to Google Sheet

1. Open your form.
2. Go to the **Responses** tab.
3. Click the green **Sheets** icon: **Create a new spreadsheet** (or link to an existing one).
4. Name the sheet (e.g. **Jal-Seva Waitlist**).  
Responses will now be saved in that sheet.

---

## 6. (Optional) Use the same form from your React site

If you want your React site’s waitlist form to submit **to this Google Form** (so data goes to the same Sheet):

1. In Google Forms, click **Preview** (eye icon).
2. Right‑click the page → **View page source** (or Inspect).
3. In the HTML, find the `<form>` tag and copy:
   - **action** URL (looks like `https://docs.google.com/forms/d/e/.../formResponse`).
4. For each question, find the `<input>` or `<select>` and copy its **name** (e.g. `entry.1234567890`).
5. In your React project, open `src/components/WaitlistForm.jsx` and:
   - Set the form `action` to the URL from step 3.
   - Set each input’s `name` to the matching `entry.xxxxx` value.

---

## 7. Use the existing form: [Rickshaw Owner Registration (Jal Seva)](https://forms.gle/PRBsXMhrmS7pREtEA)

The site is already wired to this form:

- **Redirect:** If you haven’t set up auto-submit yet, clicking “Register Now” on the site sends users to the form link above so they can register there.
- **Auto-submit (data into Sheet from the site):** To have the site send responses straight into the same form/Sheet:
  1. Open the form: https://forms.gle/PRBsXMhrmS7pREtEA  
  2. Click **Preview** (eye icon).  
  3. In the address bar, copy the URL (e.g. `.../viewform?usp=...`).  
  4. Replace `viewform` with `formResponse` → that’s your **FORM_ACTION_URL**.  
  5. Right‑click the page → **View page source**. Search for `entry.` and note the `name` for each question (e.g. `entry.1234567890`).  
  6. In `src/config/googleForm.js` set `GOOGLE_FORM_VIEW_URL` (step 3) and `ENTRY_IDS` (each field to its `entry.xxxxx` from step 5).

The app never submits from its side — it only opens the form. The user submits on the Google Form page so the entry is saved to your Sheet.

---

## Quick checklist

- [ ] Form created and named  
- [ ] Header image uploaded in theme  
- [ ] Title and description (brand text) added  
- [ ] All 5 questions added with correct types  
- [ ] Required/optional set correctly  
- [ ] Responses linked to a Google Sheet  

Your form is ready to share (link or embed) and will collect the same “normal” info as your site: name, mobile, city, rickshaw type, and optional contact preference.

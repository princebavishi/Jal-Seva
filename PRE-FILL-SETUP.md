# How to make the form open pre-filled

The form will **only** open with pre-filled data when both are set:

1. **GOOGLE_FORM_VIEW_URL** – the long form URL  
2. **ENTRY_IDS** – the `entry.xxxxx` id for each question  

Until then, clicking "Register Now" opens the form in a new tab with **empty** fields.

---

## Step 1: Get the long form URL

1. Open your form: https://forms.gle/PRBsXMhrmS7pREtEA  
2. Click the **⋮** (three dots) at the top right.  
3. Choose **"Get pre-filled link"**.  
4. Fill **one** field (e.g. Full Name = `Test`), then click **"Get link"**.  
5. Copy the URL. It will look like:  
   `https://docs.google.com/forms/d/e/1FAIpQLS.../viewform?usp=pp_url&entry.123456789=Test`  
6. In `src/config/googleForm.js`, set **GOOGLE_FORM_VIEW_URL** to the **base** part only (no query string):  
   `https://docs.google.com/forms/d/e/1FAIpQLS.../viewform`  
   (Everything before the first `?`.)

---

## Step 2: Get entry IDs for all questions

1. Open the form in a browser: https://forms.gle/PRBsXMhrmS7pREtEA  
2. **Right-click** the page → **View page source** (or Ctrl+U).  
3. In the source, search for **`entry.`** (e.g. Ctrl+F).  
4. You’ll see names like `entry.1234567890`, `entry.9876543210`, etc.  
5. Match each question (Full Name, Mobile, Address, City, …) to its `entry.xxxxx`.  
6. In `src/config/googleForm.js`, fill **ENTRY_IDS** like this (use your real numbers):

```js
export const ENTRY_IDS = {
  fullName: 'entry.1234567890',   // replace with your Full Name entry id
  mobile: 'entry.1111111111',
  address: 'entry.2222222222',
  city: 'entry.3333333333',
  pincode: 'entry.4444444444',
  rickshawType: 'entry.5555555555',
  vehicleCondition: 'entry.6666666666',
  workingHours: 'entry.7777777777',
  dailyEarnings: 'entry.8888888888',
  otherDetailsOwner: 'entry.9999999999',
  otherDetailsRickshaw: 'entry.0000000000',
}
```

---

## Step 3: Save and test

1. Save `src/config/googleForm.js`.  
2. Reload the app and go to the registration page.  
3. Fill the form (or use "Fill test data") and click **Register Now**.  
4. The Google Form should open in a new tab **with fields already filled**.  
5. The user only needs to click **Submit** on that page.

---

**Note:** The app adds `usp=pp_url` to the URL automatically; that’s required by Google for pre-fill to work.

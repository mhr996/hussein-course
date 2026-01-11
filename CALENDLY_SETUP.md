# Calendly Integration Setup Guide

## Overview

The Calendly integration has been successfully implemented for Hussein Housh's consultation booking feature. Users can now schedule free 30-minute consultations directly from the video page.

---

## What I Need From Your Calendly Account

To complete the integration, please provide the following information from your Calendly account:

### 1. **Calendly Scheduling Link** (REQUIRED)

- Go to your Calendly dashboard
- Click on the event type you want to use (e.g., "30 Minute Meeting" or "Free Consultation")
- Click "Copy Link"
- The URL should look like: `https://calendly.com/your-username/30min` or `https://calendly.com/your-username/consultation`
- **Send me this complete URL**

### 2. **Preferred Configuration** (Optional but Recommended)

- **Event Name**: What do you want to call this meeting? (e.g., "استشارة مع حسين حوش")
- **Duration**: 30 minutes (as currently configured)
- **Meeting Platform**: Zoom, Google Meet, Phone, or other?

---

## How to Get Your Calendly Link

1. Log in to [calendly.com](https://calendly.com)
2. Go to "Event Types" in the sidebar
3. Find or create an event type for consultations
4. Click on the event type
5. Look for "Copy Link" button or find the URL in your browser
6. Copy the entire URL (example: `https://calendly.com/hussein-housh/free-consultation`)

---

## What's Already Implemented

✅ **CalendlyModal Component** (`components/CalendlyModal.tsx`)

- Beautiful modal with Hussein Housh branding
- Embedded Calendly widget
- Professional header with consultation details
- Mobile responsive
- Smooth animations

✅ **Video Page Integration** (`app/video/page.tsx`)

- "حدد موعد استشارة " button
- Opens Calendly modal when clicked
- Professional CTA section

✅ **Features Included**

- 30-minute consultation duration displayed
- "Via Zoom" indicator
- "100% Free" badge
- Email confirmation notice
- Close/cancel functionality
- Backdrop blur effect
- Prevents body scroll when open

---

## How to Configure (Once You Provide the Link)

1. Add your Calendly link to `.env.local`:

   ```bash
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR_USERNAME/YOUR_EVENT
   ```

2. Restart your development server

3. Test the booking flow on the video page

---

## Customization Options Available

Once set up, you can easily customize:

- **Primary Color**: Currently set to blue (#2563eb) matching your brand
- **Meeting Duration**: Change display text if needed
- **Benefits Shown**: "30 دقيقة", "عبر Zoom", "مجاني 100%"
- **Modal Header**: "مع حسين حوش" subtitle

---

## Testing Checklist

After you provide the Calendly link, test:

- [ ] Modal opens when clicking "حدد موعد استشارة "
- [ ] Calendly widget loads properly
- [ ] Date/time selection works
- [ ] Form submission works
- [ ] Email confirmation is sent
- [ ] Modal closes properly
- [ ] Mobile responsive design works

---

## Additional Setup (Optional)

### Email Notifications

Configure in Calendly dashboard:

- Confirmation emails to attendees
- Reminder emails (24h, 1h before)
- Calendar invites
- Custom email templates in Arabic

### Calendar Integration

Connect Calendly to:

- Google Calendar
- Outlook Calendar
- iCloud Calendar
- Other calendar systems

### Custom Questions

Add custom intake questions in Calendly:

- "ما هو مجال تدريبك؟"
- "ما هي أكبر تحديات تواجهك حالياً؟"
- "كم عدد سنوات خبرتك في التدريب؟"

---

## Support

If you encounter any issues:

1. Verify the Calendly URL is correct
2. Check that the event type is active in Calendly
3. Ensure the event is not set to "Secret" or has restricted access
4. Clear browser cache and test again

---

## Next Steps

**Please provide:**

1. ✅ Your Calendly scheduling link
2. ✅ Preferred event name (if different from default)
3. ✅ Any custom questions you want to add

Once I have these details, I'll complete the configuration and you'll be ready to accept bookings!

/**
 * Help Center content — single source of truth for /help.
 * Each article uses blank lines between paragraphs (whitespace-pre-line on the page).
 */

export type HelpArticle = {
  slug: string;
  title: string;
  body: string;
};

export type HelpCategory = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  articles: HelpArticle[];
};

export const helpCategories: HelpCategory[] = [
  {
    id: "getting-started",
    icon: "🚀",
    title: "Getting started",
    desc: "Understand the product, choose the right workflow, and publish your first video.",
    articles: [
      {
        slug: "how-quotvid-works",
        title: "How QuotVid works",
        body: `QuotVid is an AI-powered platform that turns short quotes into ready-to-publish vertical videos. Every export is delivered as an MP4 file at 1080×1920 pixels (9:16 aspect ratio), formatted for YouTube Shorts, Pinterest, Pinterest, and similar channels.

What QuotVid does for you
The platform handles quote writing (in AI mode), visual layout, background selection, typography, background music, rendering, and—when your plan and integrations allow—scheduling posts to connected social accounts. You focus on strategy and distribution; QuotVid handles production.

Two ways to create content
AI Persona — Configure your niche, language, visual identity, generation cadence, and posting preferences once. QuotVid then produces quote batches and renders videos on your schedule. This path is designed for consistent, hands-off channel growth.

Custom Studio — Enter your own quote text, refine layout and styling, and generate individual videos on demand. Studio outputs remain in your library until you delete them and are ideal when you need precise creative control.

Main areas of the app (sidebar)
Dashboard — Overview of usage, pipeline counts, and recent activity.
Generated videos — All render jobs (queued, processing, completed, or failed).
Scheduled — Videos with pending posts to connected platforms.
Published — Videos that have successfully gone live, with links per platform.
Integrations — Connect or disconnect social accounts (OAuth).
Profile — Brand kit: logo, channel name, and on-video branding.
Billing — View your plan, upgrade, or manage subscription.

Recommended workflow (AI Persona)
Step 1: Complete onboarding or funnel setup and sign in at app.quotvid.com.
Step 2: Open AI Persona and configure Content, Visual Style, Schedule, Intent, and Posting Preferences. Save your changes.
Step 3: Connect the platforms you want to post to under Integrations (if auto-posting applies to your plan).
Step 4: Allow the first generation job to complete, or use “Generate batch now” for an immediate batch.
Step 5: Review completed videos under Generated videos, download MP4 files if needed, and monitor Scheduled and Published as posts go out.

You can switch to Custom Studio at any time for one-off videos without disabling your account.`,
      },
      {
        slug: "ai-persona-vs-custom-studio",
        title: "AI Persona vs Custom Studio",
        body: `QuotVid offers two distinct creation modes. Only one mode is “active” at a time; the active mode determines whether scheduled automation runs.

AI Persona — automated content engine
Purpose: Build a repeatable content system for your brand or channel.
You configure: content category (niche), language, video template, backgrounds, accent colors, fonts, default music, generation schedule (daily or selected weekdays), daily batch size (within plan limits), brand intent (voice and goals), and per-platform posting times.
What happens: The system generates quotes, creates video render jobs, and—on eligible plans—queues social posts after each video completes.
Best for: Creators who want daily or weekly output without manually writing every quote.
Where to find it: Dashboard → AI Persona (settings are organized in tabs: Content, Visual Style, Schedule, Intent, and posting-related preferences).

Custom Studio — manual, single-video workflow
Purpose: Produce a specific video from text you already have, or experiment with layout before updating your persona.
You configure: Quote body (and optional author), template, fonts, colors, background, music, and optional per-video posting targets.
What happens: One quote becomes one video. Studio videos are labeled in the Generated list. They are not removed on the same automatic retention schedule as AI-generated videos.
Best for: Campaign-specific quotes, client deliverables, or testing a new visual style.
Important: The background worker does not auto-post Studio videos. After render, use the in-app share or post flow to choose platforms for that video.

Switching between modes
If Custom Studio is currently active, scheduled AI generation is paused until you open AI Persona, save your settings, and return to AI mode. When switching from Studio to AI, you may be prompted to run “Generate batch now” to queue an immediate batch.

Decision guide
Choose AI Persona if you want volume, consistency, and optional auto-posting.
Choose Custom Studio if you want full control over a single piece of content or need to keep the file indefinitely without the AI retention window.`,
      },
      {
        slug: "create-first-video",
        title: "Create your first video",
        body: `This guide covers both sign-up paths: direct registration and funnel-based trial registration.

Path A — Direct sign-up (app.quotvid.com)
1. Create an account with email or Google (where available). Verify your email if prompted.
2. Complete onboarding: select your niche, template, language, and basic preferences. These seed your first persona.
3. Open AI Persona from the dashboard. Review each tab (Content, Visual Style, Schedule, Intent). Adjust anything that does not match your brand, then save.
4. Wait for the system to queue your first generation job, or click “Generate batch now” if you want content immediately (subject to your daily limit).
5. Open Generated videos in the sidebar. When status shows completed, preview the video and download the MP4 if desired.
6. Optional: Open Integrations and connect a social account, then configure posting times under AI Persona → Posting Preferences.

Path B — Funnel trial (QuotVid landing page)
1. Submit the funnel form with a valid email (temporary or disposable addresses are blocked).
2. Check your inbox for “Set your password” and complete registration within 24 hours.
3. You are signed in automatically with a trial plan and a persona pre-filled from your funnel answers (niche, goal, tone).
4. Go to Integrations and connect the platform you selected on the funnel (for example, Pinterest). This step starts your five-day trial countdown, shown on the dashboard banner.
5. Your first video generation job is queued during setup. Monitor Generated videos until processing completes.
6. Configure posting times and auto-post toggles under AI Persona if you want scheduled publishing during the trial.

Path C — First video in Custom Studio (fastest manual route)
1. Sign in and open Custom Studio from the dashboard or persona area.
2. Paste or type a short quote (clear, readable lines work best on mobile).
3. Select template, language, background, and music. Use preview if available.
4. Click generate and wait for the job to finish under Generated videos.
5. Download or share to connected platforms from the video detail view.

Tips for a strong first export
Keep quotes concise (roughly one to three lines on screen).
Match language in settings to the language of your text.
On free plans, expect QuotVid branding on the video until you upgrade and configure your brand kit.`,
      },
      {
        slug: "setup-persona",
        title: "Configure your AI Persona",
        body: `Your AI Persona is the control center for automated quote videos. Changes apply to the next generation run after you save.

Content tab
Category (niche) — Drives quote tone and recommended templates (for example, Stoic, Business, Discipline, Psychology, Mindset). Select “Random” if you want variety across batches.
Language — Sets quote generation language and on-screen typography. Must be correct for RTL scripts (Arabic, Urdu, Persian).
Template — Default motion and layout (Pure, Cinematic, Bold, Longform, Poetry for Urdu, and others). Filtered by category and language.
Poetry — Available when language is Urdu; choose a subcategory (for example, love or sad) for specialized poetry layouts.

Visual Style tab
Font and size — Controls readability on mobile. Increase size for shorter quotes; decrease for longer text.
Accent colors and mode — Highlight words or lines according to your brand palette.
Text alignment and shadow — Left, center, right, or justified; optional shadow for contrast on bright backgrounds.
Background — Options include solid black, gradients, AI-generated scenes (style and scene presets), or uploaded images managed in Studio.
Music — Default track from the library or your uploaded audio (plan permitting). Preview before saving.

Schedule tab
Generation frequency — Daily, three days per week (Monday, Wednesday, Friday), or weekdays (Monday through Friday).
Daily video count — Number of videos per generation run, capped by your plan. The dashboard and AI Persona header show used versus limit for free and trial accounts.
“Generate batch now” — Queues an extra batch outside the normal schedule; useful after major setting changes.

Intent tab
Niche label, brand voice tags, and primary goals — Inform how the AI writes quotes. Align these with your audience and positioning.

Posting Preferences tab
Timezone — Use IANA timezone names (for example, America/New_York, Asia/Karachi, Europe/London). All scheduled post times are interpreted in this zone.
Per-platform post time — 24-hour format (for example, 09:00 for morning, 18:00 for evening).
Auto-post toggles — Enable or disable automatic publishing per platform without disconnecting the account.

After saving
The next scheduled run—or an immediate batch if you trigger one—uses the updated configuration. Existing completed videos are not re-rendered automatically; regenerate or create new content to apply visual changes retroactively.`,
      },
      {
        slug: "content-niches",
        title: "Content categories and niches",
        body: `In QuotVid, “category” or “niche” refers to the thematic bucket for your quotes. It affects AI writing style, template recommendations, and audience fit.

Why category matters
A aligned category produces quotes that sound native to your channel (for example, discipline-focused lines for a fitness motivation page). Misaligned categories can feel generic and hurt retention.

Available themes (examples)
Stoic — Reflective, resilience-oriented phrasing.
Business / mindset / psychology — Growth, habits, and performance angles.
Discipline — Action and consistency-focused lines.
Poetry (Urdu only) — Line-by-line cinematic poetry layouts with subcategories such as love or sad.
Random — Rotates thematic variety across batches when you want diversity.

Changing category
You may change category at any time in AI Persona. Previously rendered videos are unchanged. Only future generations use the new setting.

Template relationship
Each category maps to a subset of templates the product recommends. You can still override template in Custom Studio per video.

Best practice
Define one primary category per persona. If you operate multiple brands or languages, create separate personas (where your plan allows) rather than mixing unrelated niches in one profile.`,
      },
      {
        slug: "supported-languages",
        title: "Languages and typography",
        body: `QuotVid supports multilingual quote generation and on-screen rendering. Language must be set before you generate so fonts, line breaks, and direction match your text.

Setting language
AI Persona — Content tab → Language.
Custom Studio — Language control in the studio form before render.

Right-to-left (RTL) languages
Arabic, Urdu, Persian, and related scripts use right-to-left layout and appropriate fonts (including Urdu Nastaliq where applicable). Do not enter RTL text while English is selected in settings.

Latin and extended scripts
European and many Asian languages use left-to-right layout with fonts chosen for readability at mobile scale.

Poetry and Urdu
The dedicated Poetry template and poetry subcategories are available only when Urdu is selected. Other languages receive the standard template catalog without the poetry layout.

Quality guidelines
Keep lines short enough to read without pausing.
Avoid mixing two languages in one quote unless intentional.
If characters appear as boxes or wrong shapes, confirm language setting and regenerate.
For crowded layouts, reduce font size or shorten the quote in Custom Studio.

QuotVid does not auto-translate your brand voice; it generates or displays text in the language you select. For multi-language channels, use separate personas or switch language before each batch.`,
      },
      {
        slug: "download-videos",
        title: "Download and keep your videos",
        body: `Every completed render can be downloaded as an MP4 for backup, manual upload, or editing in external tools.

How to download
1. Sign in at app.quotvid.com.
2. Open Generated videos in the sidebar.
3. Select a completed video (status must not be queued or processing).
4. Use the download action on the video detail or list view.
5. Save the file to your device. File names may include identifiers to help you organize batches.

Retention rules (important)
AI Persona videos — These are subject to automatic storage limits. An expiry date is shown in the Generated list (commonly seven days after creation). Download any file you wish to keep before that date. After expiry, the file is removed from your QuotVid library (posts already published on social networks are not affected).

Custom Studio videos — Marked with a Studio badge. They remain in your account until you delete them manually. They are not subject to the same automatic deletion schedule as AI-generated videos.

When to download
Before the expiry date on AI videos.
Before canceling a subscription if you will not renew and still need local copies.
Whenever you post manually to a platform that is not connected via Integrations.

Playback and sharing
Exported files use H.264 video and AAC audio for broad compatibility. If a download fails, retry on a stable connection or contact support with the approximate time of the failure.`,
      },
    ],
  },
  {
    id: "account-billing",
    icon: "💳",
    title: "Account and billing",
    desc: "Plans, trials, usage limits, payments, and subscription management.",
    articles: [
      {
        slug: "free-plan",
        title: "Free plan",
        body: `The free plan allows you to evaluate QuotVid before committing to a paid subscription.

What is included
Account access to the web application (app.quotvid.com).
AI Persona and Custom Studio (subject to daily generation limits shown in the app).
Access to core templates, categories, and languages.
Ability to download completed MP4 files.

What to expect on free
Daily generation cap — The dashboard and AI Persona display “used / limit” for video generation. Limits reset according to the schedule shown in the app (quota is calculated in UTC).
QuotVid branding — Videos include QuotVid watermarking on export. Custom logo replacement requires a paid plan and brand kit configuration.
No automatic worker posting — The system does not enqueue automatic social posts for perpetual free accounts. You may still download videos and upload them manually.

What is not required
No credit card to create an account or generate videos within your limit.

Upgrading
Open Billing in the sidebar to compare Monthly, Annual, and Lifetime options. Paid plans typically remove the QuotVid watermark (when your brand kit is configured), increase or remove daily generation caps, and enable auto-posting for AI-generated videos when integrations are connected.`,
      },
      {
        slug: "funnel-trial",
        title: "Funnel trial (five days)",
        body: `Users who register through a QuotVid marketing funnel (for example, a Pinterest or YouTube landing page) receive a trial plan after password setup.

How the trial starts
1. You submit the funnel form with email and preferences.
2. You set your password via the email link (valid for 24 hours).
3. An account is created with plan_name “trial” and a persona seeded from funnel data (niche, goal, content tone).
4. The trial clock does not start until you connect your funnel platform under Integrations.
5. Connecting triggers the five-day trial window displayed on the dashboard banner (countdown).

During the trial
You generally receive access similar to paid subscribers: custom branding on paid rules, auto-posting when platforms are connected, and integrations for available networks.
Daily generation limits still apply; monitor the usage indicator in AI Persona.
Your first video job is often queued automatically at signup.

When the trial ends
If you do not upgrade, access to generation and posting features may be restricted until you subscribe.
Your account data, connections, and history are preserved in most cases—upgrade from Billing to restore full access.

Funnel platform lock
Your trial may be associated with the platform you chose on the funnel (for example, Pinterest). Connect that platform first to start the trial and unlock the intended workflow.`,
      },
      {
        slug: "daily-video-limits",
        title: "Daily video limits",
        body: `QuotVid enforces daily generation limits on free and trial plans to ensure fair usage. Paid subscribers receive expanded or unlimited generation according to their plan.

Where to see your usage
AI Persona page header — Shows used versus limit for eligible plans.
Dashboard summary — Daily usage widget when available.
“Generate batch now” dialog — Confirms whether a new batch would exceed your limit.

How limits work
Each video render job counts toward your daily total when created.
Deleting a video does not restore a slot for the same day.
Limits reset on a schedule tied to UTC (the app displays the next reset time).

Free and trial
Subject to a daily cap (the exact number is shown in your account and may change—always trust the in-app counter).

Monthly, Annual, and Lifetime
Daily caps are lifted or substantially increased for paid plans. Billing page and plan details describe your entitlements.

If you exceed the limit
Generation and “Generate batch now” will be blocked until reset or upgrade.
Upgrade under Billing for immediate higher limits on paid tiers.`,
      },
      {
        slug: "upgrade-plan",
        title: "Upgrade your plan",
        body: `Upgrading unlocks paid features such as custom branding, higher generation limits, and automatic posting for AI-generated content.

Steps to upgrade
1. Sign in at app.quotvid.com.
2. Open Billing from the sidebar (or visit Pricing on the marketing site and follow checkout links).
3. Select Monthly, Annual, or Lifetime according to your needs.
4. Complete checkout on our payment partner (Lemon Squeezy). Enter payment details on their secure page.
5. Return to the app. Your plan usually updates within one minute after payment confirmation.

After upgrade
Configure your brand kit under Profile (logo and channel name) so exports use your identity instead of QuotVid watermarking.
Connect social accounts under Integrations if you want auto-posting.
Review AI Persona posting times and timezones.

If your plan does not update
Sign out and sign back in to refresh your session.
Check your email for a receipt from Lemon Squeezy.
Contact support@quotvid.com with your account email and payment confirmation.

Plan comparison (general)
Monthly / Annual — Recurring subscription; cancel before renewal to stop charges.
Lifetime — One-time purchase for long-term access to features defined at time of purchase; no recurring subscription fee.`,
      },
      {
        slug: "cancel-subscription",
        title: "Cancel your subscription",
        body: `You may cancel recurring subscriptions without deleting your QuotVid account.

How to cancel
1. Sign in and open Billing.
2. Open the customer portal or subscription management link provided on the page.
3. Follow the cancellation flow for Monthly or Annual plans.
4. Confirm the end date of your current billing period—you retain access until that date.

After cancellation
No further charges occur for the canceled subscription.
Paid features remain active until the period ends.
Download AI-generated videos before expiry if you will not renew (see retention rules in Download and keep your videos).

Lifetime plans
Lifetime is a one-time purchase and does not renew. There is no subscription to cancel.

Account and data
Canceling billing does not automatically delete your account or disconnect social platforms. Use Integrations → Disconnect if you want to revoke posting access.

Reactivation
You may subscribe again at any time from Billing; previous personas and settings typically remain.`,
      },
      {
        slug: "refund-policy",
        title: "Refund policy",
        body: `All sales are final. QuotVid does not offer refunds on paid plans, including the $10 lifetime deal.

Try before you buy
Use the free 5-day YouTube or Pinterest trial to evaluate QuotVid before purchasing. No credit card is required to start a trial where advertised.

Legacy subscriptions
If you are on a legacy monthly or annual subscription, you may cancel before the renewal date to avoid future charges. Cancellation does not refund the current billing period.

Billing issues
If you were charged in error (for example, a duplicate charge), contact hello@quotvid.com with your account email and Lemon Squeezy receipt so we can investigate.

Policy updates
The authoritative wording appears on the pricing, checkout, and Terms of Service pages at the time you pay. This help article is a summary, not a legal contract.`,
      },
      {
        slug: "payment-methods",
        title: "Payment methods and receipts",
        body: `QuotVid processes payments through Lemon Squeezy, a trusted merchant of record.

Accepted methods
Major credit and debit cards (Visa, Mastercard, American Express, and others shown at checkout).
Additional payment methods may appear depending on your country (for example, PayPal or local options)—availability is determined at checkout.

Receipts and invoices
After purchase, Lemon Squeezy emails a receipt to the address you provide.
Access billing history and subscription management from the portal link in Billing.

Tax and business purchases
Tax handling depends on your region and is calculated at checkout where applicable.
For VAT or invoice requirements, contact support with your order ID.

Failed payments
If payment fails, your plan will not upgrade. Retry checkout or use a different payment method.
For recurring plans, update payment details in the customer portal to avoid interruption.`,
      },
      {
        slug: "billing-plan-faq",
        title: "AI videos vs Studio videos (storage)",
        body: `Understanding the difference helps you manage downloads and storage.

AI Persona videos
Created by scheduled or manual AI batches.
Listed in Generated videos with a visible expiry date (typically seven days).
Automatically removed from your QuotVid library after expiry to manage storage.
Always download files you need for long-term archives or offline editing.

Custom Studio videos
Created one at a time from your own text.
Marked with a Studio badge in the Generated list.
Not auto-deleted on the AI retention schedule; they remain until you delete them.

Trial vs paid vs free
Trial — Time-limited (five days after platform connect for funnel users); features similar to paid during the window.
Free — Ongoing access with daily caps and QuotVid watermark.
Paid — Custom branding, higher limits, and auto-posting for eligible AI videos.

Lifetime plan
One-time payment for access to product features defined at purchase. No recurring subscription. Fair use and terms of service still apply.`,
      },
    ],
  },
  {
    id: "video-generation",
    icon: "🎬",
    title: "Video generation",
    desc: "How quotes become videos: AI writing, templates, audio, format, and troubleshooting.",
    articles: [
      {
        slug: "ai-quote-generation",
        title: "How AI generates quotes",
        body: `In AI Persona mode, QuotVid creates original quote text before rendering each video.

Inputs the system uses
Content category (niche) and language.
Brand voice tags and intent goals from the Intent tab.
Template and length constraints built into the generation pipeline.

Quality controls
Word count limits — Quotes outside the allowed range may be filtered or rewritten.
Engagement scoring — Low-scoring lines can be discarded in favor of stronger alternatives.
Deduplication — Similar text to recent quotes may be blocked to reduce repetition on your channel.

From quote to video
1. A quote record is created and approved for production.
2. A video render job is queued (status: queued → processing → completed).
3. The render pipeline applies template, background, typography, music, and branding.
4. The finished MP4 is stored and listed under Generated videos.

Custom Studio
You supply the full quote text (and optional author attribution). The AI does not rewrite unless you edit and generate again. Use Studio when compliance, exact wording, or client approval requires fixed copy.

Tips for better AI output
Tighten brand voice tags to adjectives that describe your tone (for example, direct, calm, bold).
Choose a category that matches your audience.
Avoid switching language between batches without updating persona settings.`,
      },
      {
        slug: "video-templates",
        title: "Video templates",
        body: `Templates define how text appears, animates, and sits on screen. Choosing the right template improves readability and watch-through rate on mobile.

Template families (examples)
Pure — Minimal layout, often on dark backgrounds; strong for stoic and mindset quotes.
Cinematic — Atmospheric headings and dramatic pacing.
Bold / minimal_dark — High-contrast motivational styles.
Longform / scroll / split — Multi-line or narrative layouts for longer thoughts.
Poetry (Urdu) — Line-by-line reveal tuned for Urdu script.
Structured / story — Sections or beats for list-style or story content.

How selection works
AI Persona — Set a default template in Content. Category may limit which templates are offered.
Custom Studio — Override template per video; preview when available.

Changing templates
Updates in AI Persona affect the next generation run only. To apply a new template to existing text, regenerate in Studio or wait for the next batch.

Design recommendations
Aim for one clear idea per video.
Prefer three to seven on-screen lines for most templates.
Test Longform only when your quote truly needs more screen time.`,
      },
      {
        slug: "background-music",
        title: "Background music",
        body: `Every QuotVid export can include licensed background music mixed beneath the visual track.

Library tracks
Browse moods such as ambient, cinematic, uplifting, emotional, and dark in the music picker.
Tracks are hosted on our CDN; the renderer downloads and caches audio during video generation.
Select a default in AI Persona or per video in Custom Studio.

Custom uploads
Where your plan allows, upload your own MP3 or similar file. Uploaded audio is stored securely and associated with your account.

Audio processing
Volume is normalized for social platforms.
Fade-in and fade-out reduce harsh starts and ends.
Music does not replace spoken voiceover—QuotVid quote videos are music plus text visuals.

Preview
Use the in-app preview in the music picker before generating to confirm mood and energy.

Troubleshooting silent videos
If a video has no music, the track may have failed to download (network or CDN issue). Regenerate the video or choose another track. Persistent issues should be reported to support with the video ID and time of render.`,
      },
      {
        slug: "rtl-languages",
        title: "Right-to-left languages",
        body: `QuotVid supports right-to-left (RTL) scripts including Arabic, Urdu, and Persian when the correct language is selected before generation.

Configuration
Set language to your target RTL language in AI Persona (Content tab) or Custom Studio.
Do not paste RTL text while English is selected—layout and font selection depend on language.

Typography
Urdu poetry uses specialized fonts (for example, Nastaliq-style rendering) and the Poetry template.
Other RTL languages receive appropriate direction and alignment for captions.

Authoring tips
Write naturally in the target language; avoid mixing LTR English phrases unless intentional.
Keep lines short; RTL scripts often need more vertical space.
Punctuation should follow the conventions of the language, not English quote marks alone.

If output looks wrong
Confirm language setting → save persona → regenerate.
Do not edit only the video file externally; fix settings and re-render.`,
      },
      {
        slug: "video-specs",
        title: "Technical specifications",
        body: `QuotVid standard export specifications are optimized for short-form social platforms.

Video
Resolution: 1080×1920 pixels (vertical 9:16).
Container: MP4.
Video codec: H.264 (broad device and platform support).
Typical duration: Approximately 30–45 seconds, depending on quote length, template animation, and hold times.

Audio
Codec: AAC.
Sample rate: 48 kHz (suitable for YouTube Shorts and Pinterest).
Background music mixed at configured volume with fades.

Delivery
Files are available for download from the app and may be uploaded to R2-backed storage for streaming in the library.
“Fast start” moov atom placement supports quicker playback in browsers.

Platform notes
YouTube Shorts and Pinterest Pins accept vertical MP4 within platform size limits. If a network rejects a file, check its current maximum file size and duration policies.`,
      },
      {
        slug: "generation-stuck",
        title: "Troubleshooting failed or slow renders",
        body: `Video generation is asynchronous. Understanding statuses helps you decide when to wait versus when to act.

Job statuses
Queued — Waiting for a worker.
Processing — Actively rendering.
Completed — Ready to preview and download.
Failed — Render did not finish; see error hints in the app if shown.

Normal wait times
Most videos complete within a few minutes. Queue depth, background image generation, and music download can extend time during peak usage.

If processing takes longer than one hour
Note the approximate start time and your account email.
Refresh the Generated list in case the UI is stale.
Do not queue duplicate batches repeatedly—this adds load.

Common failure causes
Quote text too long for the selected template.
Background asset unavailable or timed out.
Music file failed to download from CDN.
Temporary server maintenance (check status or support channels).

Recommended actions
Shorten the quote or switch template in Custom Studio and regenerate.
Select a simpler background (solid or gradient) to test.
Choose a different music track.
Contact support@quotvid.com with account email, video or quote ID if available, and timestamp (with timezone).`,
      },
    ],
  },
  {
    id: "social-posting",
    icon: "📲",
    title: "Social posting",
    desc: "Connect accounts, schedule content, and understand the publishing pipeline.",
    articles: [
      {
        slug: "connect-social-account",
        title: "Connect a social account",
        body: `Social connections let QuotVid publish on your behalf when auto-posting is enabled and your plan allows it.

Prerequisites
Active QuotVid account.
For auto-posting on AI videos: paid or trial plan (perpetual free plans do not receive worker-driven auto-post).
Platform marked “active” in Integrations (some networks may show “Coming Soon” until launched).

Connection steps
1. Sign in and open Integrations in the sidebar.
2. Locate the platform card (YouTube or Pinterest).
3. Click Connect.
4. You are redirected to the official OAuth login for that network. Sign in and approve the requested permissions.
5. After success, you return to QuotVid and the connected account or channel name appears on the card.

Permissions (summary)
YouTube — Upload videos and read channel information for labeling.
Pinterest — Read boards, create pins, read username.

Disconnecting
Click Disconnect on the platform card. QuotVid deletes your access token immediately and cannot post until you connect again.

Security
Tokens are stored encrypted. We never ask for your social network password inside QuotVid—only the official provider login page.`,
      },
      {
        slug: "connect-pinterest",
        title: "Connect Pinterest",
        body: `Pinterest is a primary integration for many QuotVid users, especially those arriving from Pinterest funnels.

Connection steps
1. Open Integrations.
2. Click Connect on the Pinterest card (when status is active).
3. Approve OAuth scopes for boards, pin creation, and profile access.
4. Confirm your username appears on the card.

After connecting
Open AI Persona → Posting Preferences.
Set your timezone and the daily time you want pins to go live.
Ensure auto-post is enabled for Pinterest if you want hands-free publishing.

Funnel trial users
If you signed up via a Pinterest funnel, connecting Pinterest starts your five-day trial countdown. Complete this step promptly to avoid confusion about trial timing.

Content format
Videos are vertical MP4s suitable for video pins. Titles and descriptions may be derived from quote metadata and persona settings.`,
      },
      {
        slug: "connect-youtube",
        title: "Connect YouTube",
        body: `YouTube Shorts is a primary integration for QuotVid automation.

Connection steps
1. Open Integrations.
2. Click Connect on the YouTube card.
3. Sign in with the Google account that owns the channel you want to publish to.
4. Approve upload and channel-read permissions.
5. Confirm your channel name appears on the card.

After connecting
Open AI Persona → Posting Preferences.
Set your timezone and the daily time you want Shorts to go live.
Ensure auto-post is enabled for YouTube if you want hands-free publishing.

Funnel trial users
If you signed up via a YouTube funnel, connecting YouTube starts your five-day trial countdown.

Content format
Uploaded videos are Shorts-compatible vertical MP4 files (1080×1920).
You may always download and upload manually via YouTube Studio if preferred.`,
      },
      {
        slug: "posting-schedule",
        title: "Posting schedule and timezone",
        body: `Accurate scheduling aligns generation and publishing with your audience’s active hours.

Where to configure
AI Persona → Posting Preferences (and related schedule tabs).

Timezone
Enter an IANA timezone string, for example:
America/Los_Angeles
Europe/Berlin
Asia/Karachi
Australia/Sydney
All post times are interpreted in this zone. Incorrect timezone is a common cause of posts appearing at the wrong local hour.

Per-platform post time
Use 24-hour format (HH:MM), for example 09:00 for 9 AM or 21:30 for 9:30 PM.
Set different times per network if your audiences differ by platform.

Generation schedule vs post time
Generation schedule (daily, three-per-week, weekdays) controls when new videos are created.
Post time controls when completed videos are sent to each platform.
These are independent: you might generate overnight and post at 8 AM local time.

Auto-post toggle
Disable auto-post for a platform to pause publishing without revoking OAuth access.

Custom Studio posts
After a Studio render completes, use the share/post dialog to select which connected platforms receive that specific video.`,
      },
      {
        slug: "auto-schedule",
        title: "Automatic generation and posting",
        body: `Automation reduces manual work when AI Persona is active and your plan supports it.

Automatic generation
When AI Persona is the active mode, the scheduler creates quote and video jobs according to your generation schedule (daily or selected weekdays).
“Generate batch now” triggers an additional batch outside the normal cadence, subject to daily limits.

Automatic posting (AI videos only)
After a video render completes, the worker may enqueue posting jobs for connected platforms with auto-post enabled.
Posts go out at the times configured in Posting Preferences (in your timezone).

Plan eligibility
Trial and paid plans — Auto-posting for AI-generated videos is supported when integrations are connected.
Perpetual free plan — Worker does not enqueue system auto-post; download and upload manually.
Custom Studio — Not auto-posted by the worker; use manual share flow per video.

Monitoring
Track progress in Generated (render), Scheduled (pending posts), and Published (live links).
Cancel scheduled posts from the Scheduled tab when the app offers cancel, before the publish time.`,
      },
      {
        slug: "video-pipeline-tabs",
        title: "Generated, Scheduled, and Published",
        body: `The three pipeline views organize your content by stage in the production and publishing lifecycle.

Generated videos
Purpose: Track every render job.
Ordering: Active jobs (queued or processing) typically appear first, followed by completed, then failed.
AI videos: Display an expiry date—download before this date.
Studio videos: Show a Studio badge; no AI retention expiry.
Actions: Preview, download, delete (where available), or open detail for posting options.

Scheduled
Purpose: Videos with one or more pending posting jobs to connected platforms.
Display: May include countdown to scheduled publish time per platform.
Actions: Cancel a scheduled post before it goes live when cancel is offered.
Note: Canceling here stops the QuotVid job; it does not affect posts already published.

Published
Purpose: Historical record of successful posts.
Display: Platform links, publish date, and which networks received the video.
Actions: Removing an entry deletes only the QuotVid record—the live post remains on the social network.

Dashboard overview
The main dashboard summarizes counts for quick health checks without opening each tab.`,
      },
      {
        slug: "bulk-generation",
        title: "Manual batch generation",
        body: `Besides scheduled runs, you can trigger content on demand.

Generate batch now
Location: AI Persona (header or schedule section).
Effect: Queues a new quote generation and video batch immediately using current persona settings.
Limits: Respects daily used/limit for free and trial accounts; dialog shows projected usage.

When to use it
After changing category, template, or language and wanting content before the next scheduled run.
When switching from Custom Studio back to AI Persona (you may be prompted to generate).
When recovering from a failed batch and you need replacement videos.

When not to use it
Repeated clicks while jobs are still processing—wait for queue to clear.
When you are already at your daily limit—upgrade or wait for reset.

After triggering
Allow several minutes for jobs to appear in Generated.
Review failed jobs individually rather than spamming new batches.`,
      },
    ],
  },
  {
    id: "brand-kit",
    icon: "🏷️",
    title: "Brand kit",
    desc: "Logo, channel name, and professional on-video identity.",
    articles: [
      {
        slug: "logo-watermark",
        title: "Add your logo",
        body: `A consistent logo builds recognition across your quote videos.

Requirements
Paid plan (free and trial exports use QuotVid branding unless upgraded).
PNG format with transparent background recommended.
Square or horizontal logos work best; avoid very fine detail that disappears on mobile.

Setup steps
1. Sign in and open Profile.
2. Open the Brand kit or Watermark section (tab may be labeled accordingly).
3. Upload your logo file.
4. Adjust position (commonly corners), width, height, and opacity.
5. Save changes.
6. Generate a new video or batch to apply branding—existing MP4s are not retroactively updated.

Preview
Use any in-app phone or frame preview to confirm the logo does not cover the main quote text.

Storage
Logos are stored in secure cloud storage associated with your account.`,
      },
      {
        slug: "channel-name",
        title: "Channel name overlay",
        body: `The channel name (or handle) appears as on-screen text separate from the quote body—similar to a broadcast lower third or social handle.

Best practices
Keep text short (ideally under 20 characters).
Use the same handle viewers search for on your social platforms.
Avoid special characters that render poorly at small sizes.

Configuration
Set channel name, position, font size, and opacity in Profile → Brand kit alongside logo settings.
Paid plans use your channel name; free/trial may show default QuotVid branding rules.

Timing
Changes apply to renders created after you save. Re-download or regenerate if you need updated branding on a specific asset.`,
      },
      {
        slug: "brand-position",
        title: "Logo placement and opacity",
        body: `Thoughtful placement keeps your brand visible without hurting readability.

Position
Top-left or top-right is standard for logos.
Avoid covering the center of the frame where quote text animates.
If using AI-generated busy backgrounds, prefer corners with darker or simpler areas.

Opacity
100% opacity works on plain backgrounds.
On busy scenes, reduce opacity slightly (for example 70–85%) so the logo remains visible but not distracting.

Channel name vs logo
Do not stack channel name and logo over the same text block.
If overlap occurs, move one element or shorten the quote in Custom Studio.`,
      },
      {
        slug: "persona-brand",
        title: "Brand kit vs AI Persona settings",
        body: `Branding and content settings are split across two areas by design.

Profile (Brand kit)
Account-level logo, channel name, positions, and opacity.
Applies to rendered videos according to plan rules (paid = your brand; free/trial = QuotVid watermark rules).

AI Persona
Category, language, template, colors, fonts, backgrounds, music, schedules, and posting.
Drives what the AI writes and how each automated video looks and sounds.

Interaction
Persona controls creative direction; brand kit controls identity overlay.
Update both before a large batch if you are rebranding.

Multiple brands
If you operate separate channels, use separate personas (where supported) or separate accounts for clean separation.`,
      },
    ],
  },
  {
    id: "technical",
    icon: "🛠️",
    title: "Technical help",
    desc: "Resolve common issues and reach QuotVid support.",
    articles: [
      {
        slug: "slow-generation",
        title: "Slow video rendering",
        body: `Render time depends on queue depth, video complexity, and external asset downloads.

Expected behavior
Status progresses from queued to processing to completed in Generated videos.
Most jobs finish within minutes under normal load.

Factors that increase wait time
High server demand during peak hours.
AI background image generation.
Downloading music from CDN for each render.
Long quotes with complex templates.

What you should do
Keep the browser tab open briefly, then refresh Generated.
Avoid submitting many duplicate batches while jobs are pending.
If wait exceeds one hour, contact support with account email and approximate start time (include timezone).`,
      },
      {
        slug: "download-quality",
        title: "Download or playback problems",
        body: `If you cannot download or play an MP4, try the following in order.

Download issues
Use a stable Wi-Fi or wired connection.
Allow downloads from app.quotvid.com in browser settings (pop-up blockers, corporate firewalls).
Retry download once; if file size is zero bytes, regenerate the video.

Playback issues
Test in VLC Media Player or another modern player.
Confirm the file extension is .mp4.
Re-download in case the first transfer was interrupted.

Mobile transfer
AirDrop, cloud drive, or cable transfer may be required to move files to phone camera roll for native posting apps.`,
      },
      {
        slug: "login-issues",
        title: "Sign-in and password issues",
        body: `Account access problems are usually resolved with standard recovery steps.

Forgot password
1. Open app.quotvid.com sign-in.
2. Click Forgot password.
3. Enter your account email.
4. Check inbox and spam for the reset link.
5. Set a new password and sign in.

Funnel set-password link expired
Links expire after 24 hours. Return to the funnel page and submit your email again to receive a new link.

Google sign-in
Use Continue with Google if enabled for your account. Ensure you select the same Google account each time.

Browser issues
Try incognito/private mode to disable extensions.
Clear cookies for app.quotvid.com if sessions loop.

Still locked out
Email support@quotvid.com from the address on your account with a description of the issue.`,
      },
      {
        slug: "oauth-disconnect",
        title: "Reconnect a social account",
        body: `Authorization can expire when passwords change, permissions are revoked, or platforms rotate tokens.

Symptoms
Posts stuck in Scheduled with auth errors.
Integrations card shows disconnected or error state.
Published tab stops receiving new entries for that platform.

Fix
1. Open Integrations.
2. Click Disconnect for the affected platform.
3. Click Connect and complete OAuth again.
4. Verify account name appears correctly.
5. Confirm auto-post is enabled in AI Persona if you want automation.
6. Allow the next generation cycle to create fresh posting jobs.

Platform-specific notes
YouTube requires channel ownership on the authorized Google account.
Pinterest requires board access for the boards you select.`,
      },
      {
        slug: "contact-support",
        title: "Contact support",
        body: `Our team is available to help with billing, technical, and product questions.

Channels
Contact form: Use the link on this website (/contact).
Email: support@quotvid.com

Response time
We aim to respond within 24–48 business hours. Complex issues may require additional time.

Information to include
QuotVid account email (the address you sign in with).
Description of the issue and steps to reproduce.
Screenshots or screen recordings if applicable.
For video problems: approximate date, time, and timezone; whether the video was AI or Studio.
For billing: order ID or receipt from Lemon Squeezy.

What we cannot do via email
Reset social network passwords (use each platform’s recovery).
Guarantee posting during third-party outages (Google, Pinterest).

We read every message and will guide you to resolution or escalate internally when needed.`,
      },
    ],
  },
];

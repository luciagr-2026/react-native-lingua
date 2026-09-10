# PostHog Data Warehouse Setup Report

Created 0 of 1 detected sources in PostHog. The credential prompt was cancelled, so the Clerk source needs browser setup.

## Sources Detected

| Source | Kind  | Status         |
|--------|-------|----------------|
| Clerk  | Clerk | Needs browser setup |

## What Was Done

No changes were made to the project codebase. This skill only connects external data sources — it does not modify application files.

The wizard detected `CLERK_SECRET_KEY` in `.env.local`, confirming Clerk is used in this project. The PostHog data warehouse source was not created because the credential prompt was cancelled.

## Next Steps — Manual Setup Required

To connect Clerk to the PostHog data warehouse, open the following URL in your browser and paste your Clerk secret key (`sk_live_...`) when prompted:

**[Connect Clerk in PostHog](https://eu.posthog.com/project/269328/data-warehouse/new-source?kind=Clerk&utm_source=wizard&utm_campaign=warehouse-source)**

You can find your Clerk secret key in the [Clerk Dashboard](https://dashboard.clerk.com/) under **API Keys**.

## Files Modified or Created

- `posthog-warehouse-report.md` — this report (created)

No other files were modified.

# Lnker.com
### Simple CRM AI Message generator

**Campaigns have context files describing the concept. Each campaign has a database of linkedin contacts. The system will generate follow-up emails based on the desired goals, taking into account all previous messages. The user is responsible for creating campaigns, adding contacts and (for now) adding contact responses. Messages generated can be sent by email or pasted into Linkedin.**

## Roles

* User -- can see and access assigned campaigns, pays $5/10/50/mo per campaign access
* Admin -- can access all campaigns and has additional unsafe automations

## Pages

* Home: Sales description / signup (no charge first 7 days) / Tuorial
* Dashboard: shows connected media, connected Gmail, response threads, suggested next activity
  * Shows list of campaigns with analytics summaries
  * Add/remove campaigns
  * Aggregate analytics
  * Tasks: (responses needing follow-up, next batch of sends)
* Campaign details screen
  * Edit screen or in-place editing of campaign details
  * Tabbed interface to contexts == each with a description
  * Connections/Automations -- social media connections and assets
  * Campaign Analytics -- analytics report for landing pages
* User Account
 Details


## Technology Stack

* Sveltekit / TailwindCSS/Typography / DaisyUI
* Modules:
  * openai
  * linkedin-web-api
  * firebase auth: https://www.youtube.com/watch?v=N6Y3hqhZvNI




# qatechlabs.com

Marketing and learning site for QA Tech Labs. Built with [Astro](https://astro.build) and Tailwind CSS, deployed as a static site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where to edit things

| What | Where |
| --- | --- |
| Business details, social links, form endpoint, WhatsApp number, recordings playlist | `src/config/site.ts` |
| Upcoming batches | `batches` array in `src/config/site.ts` (past dates hide automatically) |
| Testimonials | `testimonials` array in `src/config/site.ts` |
| Courses (price, syllabus, payment link) | `src/content/courses/*.md` |
| Blog posts | `src/content/blog/*.md` |
| Downloads / resources | `src/content/resources/*.md` (`access: free` or `paid`, `link` to file or payment page) |
| Colours and fonts | `src/styles/global.css` (`@theme` block) |
| Logo | `src/components/Logo.astro` and `public/favicon.svg` |

### Taking payments

Create a payment link in Razorpay or Stripe for each course and paste it into the course file's `paymentLink`. Until then, "Enrol now" sends people to the contact form with the course pre-filled.

### Contact form

Create a free form at https://formspree.io, copy the endpoint into `site.formEndpoint`. Until then the form opens the visitor's email app.

## Deploy (Vercel)

1. Import this repo at https://vercel.com/new (framework is detected automatically).
2. Add the domain `qatechlabs.com` and `www.qatechlabs.com` in Vercel → Settings → Domains.
3. In GoDaddy DNS add: `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`.
4. Every push to `main` deploys automatically.

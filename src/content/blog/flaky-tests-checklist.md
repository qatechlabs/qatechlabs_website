---
title: "The Flaky Test Checklist: 10 Causes and Their Fixes"
description: "Every flaky Playwright test we have ever debugged came down to one of these ten causes."
pubDate: 2026-09-18
topic: "Automation"
readingTime: "5 min read"
---

Flaky tests destroy trust in a suite faster than missing tests. Work through this list top to bottom.

1. **Hard-coded sleeps.** Replace `waitForTimeout` with `expect(locator).toBeVisible()` or `waitForResponse`.
2. **Ambiguous locators.** If `getByRole` can match two elements, it will eventually pick the wrong one. Tighten it.
3. **Shared test data.** Two parallel workers editing the same record. Create data per test.
4. **Order dependence.** Run the test alone. If it fails, it depends on another test.
5. **Animations.** Disable them in test environments or wait for the animation end.
6. **Network races.** Assert on the response, not on a spinner disappearing.
7. **Timezones and dates.** Freeze the clock with `page.clock` or inject a fixed date.
8. **Third-party scripts.** Block analytics and chat widgets with `page.route`.
9. **Viewport differences.** Pin the viewport in config, not per test.
10. **Environment drift.** CI runs a different browser version. Pin versions in `package.json`.

Keep a retry budget of one in CI, and treat every retry as a bug to fix, not a feature to rely on.

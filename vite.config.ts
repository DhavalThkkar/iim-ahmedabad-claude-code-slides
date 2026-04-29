import { defineConfig } from 'vite'

/** Injected before </body> when CI=true (GitHub Actions) or SLIDEV_ANALYTICS=1 (optional local prod check). */
const CLOUDFLARE_BEACON = `<!-- Cloudflare Web Analytics --><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "5087082221b340f89c72f8bd467a9af6"}'></script><!-- End Cloudflare Web Analytics -->`

function injectBeacon(html: string): string {
  if (html.includes('cloudflareinsights.com/beacon')) return html
  if (!html.includes('</body>')) return html
  return html.replace('</body>', `${CLOUDFLARE_BEACON}\n</body>`)
}

export default defineConfig({
  plugins: [
    {
      name: 'slidev-cloudflare-web-analytics',
      transformIndexHtml(html) {
        const enabled =
          process.env.CI === 'true' || process.env.SLIDEV_ANALYTICS === '1'
        if (!enabled) return html
        return injectBeacon(html)
      },
    },
  ],
})

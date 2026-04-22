# Seunghyeon Seo - Personal Homepage

Static personal research homepage with four pages:

- `index.html`
- `publications.html`
- `experience.html`
- `blog.html`

## Main Editing File

Most content is managed in `site-content.js`.

Update these sections there:

- `profile`: name, intro, links, profile image, CV
- `news`: homepage news list
- `publications`: all paper entries
- `workExperience`: experience page
- `blog.posts`: blog entries

## How To Add A Publication

Add a new object to `siteContent.publications`.

Important fields:

- `title`
- `authors`
- `venue`
- `summary`
- `media`
- `links`

If you want it to appear on the Home page under `Selected Publications`, set:

```js
selected: true
```

You can also add:

```js
contribution: 'First author'
```

or

```js
contribution: 'Co-first author'
```

## How To Add Work Experience

Add a new object to `siteContent.workExperience`.

Example:

```js
{
  organization: 'Company Name',
  role: 'Research Scientist Intern',
  period: 'May 2026 - Aug. 2026',
  location: 'City, Country',
  logo: 'images/company-logo.png',
  bullets: ['Contribution 1', 'Contribution 2']
}
```

## How To Add Blog Posts

Add entries to `siteContent.blog.posts`.

Example:

```js
{
  title: 'A Note on Sparse-view Rendering',
  date: '2026-04-22',
  summary: 'Short summary of the post.',
  url: 'https://example.com/post'
}
```

## Media

- Profile photo: `Seunghyeon.jpeg`
- CV: `data/SeunghyeonSeo_CV.pdf`
- Paper images/videos: `images/*`

## Analytics

Google Analytics 4 from the previous homepage is already wired in with:

```js
analytics: {
  googleAnalyticsId: 'G-XV9FTV9E2Z'
}
```

GoatCounter is still optional. Update this field in `site-content.js` only if you want to use it too:

```js
analytics: {
  goatcounter: 'https://YOUR_CODE.goatcounter.com/count'
}
```

## Search / Verification Files

The site also includes:

- `google168e2eff65d1ed7d.html`
- `robots.txt`
- `sitemap.xml`

These are useful when publishing the site at `https://shawn615.github.io/`.

## Local Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Recommended Deployment

The cleanest deployment target is the existing homepage directory:

- `/Users/seunghyeonseo/Desktop/MISC/shawn615.github.io-main`

Recommended approach:

1. Keep project subpages such as `/mixnerf`, `/flipnerf`, `/genhmc`, `/arc-nerf` in that repo.
2. Replace only the root homepage files with the files from this folder.
3. Commit to `main`.
4. Push, and GitHub Pages will update `https://shawn615.github.io/`.

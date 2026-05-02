const content = window.siteContent;

function renderLinks(links) {
  return (links || [])
    .map(link => `<a href="${link.url}" target="${link.url.startsWith('mailto:') ? '_self' : '_blank'}" rel="noreferrer">${link.label}</a>`)
    .join('<span class="divider">/</span>');
}

function highlightVenueText(text) {
  return text.replace(/\((Oral|Journal Track|Qualcomm Innovation Fellowship Korea 2023 Winner)\)/g, '<span class="venue-highlight">($1)</span>');
}

function renderAuthor(author) {
  const label = author.isMe ? `<strong>${author.name}</strong>` : author.name;
  if (author.url) {
    return `<a href="${author.url}" target="_blank" rel="noreferrer">${label}</a>`;
  }
  return label;
}

function renderAuthors(authors) {
  return (authors || []).map(renderAuthor).join(', ');
}

function renderMedia(media) {
  if (!media) {
    return '';
  }

  if (media.type === 'video') {
    return `<video class="publication-media-element" src="${media.src}" autoplay muted loop playsinline></video>`;
  }

  if (media.type === 'image' && media.hoverSrc) {
    return `
      <div class="publication-media-stack has-hover-media">
        <img class="publication-media-element publication-media-base" src="${media.src}" alt="${media.alt || ''}" loading="lazy" />
        <img class="publication-media-element publication-media-hover" src="${media.hoverSrc}" alt="${media.alt || ''}" loading="lazy" aria-hidden="true" />
      </div>
    `;
  }

  return `<img class="publication-media-element" src="${media.src}" alt="${media.alt || ''}" loading="lazy" />`;
}

function renderPublicationItem(publication, showContribution) {
  const contribution = showContribution && publication.contribution
    ? `<span class="contribution-badge">${publication.contribution}</span>`
    : '';
  const venue = highlightVenueText(publication.venue);

  return `
    <article class="publication-item">
      <div class="publication-media">
        ${renderMedia(publication.media)}
      </div>
      <div class="publication-content">
        <h3 class="publication-title">${publication.title}</h3>
        <p class="publication-authors">${renderAuthors(publication.authors)}</p>
        <p class="publication-venue">${venue} ${contribution}</p>
        <p class="publication-links">${renderLinks(publication.links)}</p>
        <p class="publication-summary">${publication.summary}</p>
      </div>
    </article>
  `;
}

function renderNewsItem(item) {
  const contentMarkup = (item.segments || [])
    .map(segment => {
      if (!segment.url) {
        return segment.kind === 'highlight'
          ? `<span class="venue-highlight">${segment.text}</span>`
          : segment.text;
      }
      const inner = segment.kind === 'highlight'
        ? `<span class="venue-highlight">${segment.text}</span>`
        : segment.text;
      return `<a href="${segment.url}" target="_blank" rel="noreferrer">${inner}</a>`;
    })
    .join('');

  return `<li><span class="news-date">${item.label}</span> ${contentMarkup}</li>`;
}

function renderWorkItem(item) {
  return `
    <article class="work-item">
      <div class="work-heading">
        <div class="work-identity">
          <div>
            <h3>${item.organization}</h3>
            <p class="work-role">${item.role}</p>
          </div>
        </div>
        <div class="work-meta">
          <p>${item.period}</p>
          <p>${item.location}</p>
        </div>
      </div>
      <ul class="work-bullets">
        ${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    </article>
  `;
}

function setSharedContent() {
  document.querySelectorAll('[data-site-title]').forEach(node => {
    node.textContent = content.profile.siteTitle;
  });

  document.querySelectorAll('[data-name]').forEach(node => {
    node.textContent = content.profile.name;
  });

  document.querySelectorAll('[data-nav="blog"]').forEach(node => {
    node.href = 'blog.html';
  });
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page-link]').forEach(link => {
    if (link.dataset.pageLink === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setupAnalytics() {
  const analytics = content.analytics || {};
  const googleAnalyticsId = analytics.googleAnalyticsId;
  const goatcounterEndpoint = analytics.goatcounter;

  if (googleAnalyticsId) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', googleAnalyticsId);
  }

  if (goatcounterEndpoint && !goatcounterEndpoint.includes('YOUR_CODE')) {
    const goatcounterScript = document.createElement('script');
    goatcounterScript.async = true;
    goatcounterScript.dataset.goatcounter = goatcounterEndpoint;
    goatcounterScript.src = '//gc.zgo.at/count.js';
    document.head.appendChild(goatcounterScript);
  }
}

function renderHome() {
  document.getElementById('profile-title').textContent = content.profile.title;
  document.getElementById('profile-photo').src = content.profile.avatar;
  document.getElementById('profile-photo').alt = content.profile.name;
  document.getElementById('profile-intro').innerHTML = content.profile.intro.map(text => `<p>${text}</p>`).join('');
  document.getElementById('profile-links').innerHTML = renderLinks(content.profile.links);
  document.getElementById('news-list').innerHTML = content.news.map(renderNewsItem).join('');

  const selected = content.publications.filter(publication => publication.selected);
  document.getElementById('selected-publications').innerHTML = selected
    .map(publication => renderPublicationItem(publication, true))
    .join('');
}

function renderPublications() {
  document.getElementById('publication-list').innerHTML = content.publications
    .map(publication => renderPublicationItem(publication, false))
    .join('');
}

function renderExperience() {
  document.getElementById('work-experience-list').innerHTML = content.workExperience
    .map(renderWorkItem)
    .join('');
}

function renderBlog() {
  const intro = document.getElementById('blog-intro');
  if (intro) {
    intro.textContent = content.blog.intro;
  }

  document.getElementById('blog-topics').innerHTML = content.blog.topics
    .map(topic => `<span class="topic-chip">${topic}</span>`)
    .join('');

  const posts = document.getElementById('blog-posts');
  if (!content.blog.posts.length) {
    posts.innerHTML = `
      <div class="empty-state">
        <p class="empty-title">No blog posts yet.</p>
        <p>The feed is ready for research notes, technical detours, and the occasional non-work post that has nothing to do with NeRFs.</p>
      </div>
    `;
    return;
  }

  posts.innerHTML = content.blog.posts
    .map(
      post => `
        <article class="blog-post">
          <h3>${post.title}</h3>
          <p class="blog-date">${post.date}</p>
          <p>${post.summary}</p>
          <p><a href="${post.url}">Read more</a></p>
        </article>
      `
    )
    .join('');
}

function init() {
  setSharedContent();
  setActiveNav();
  setupAnalytics();

  const page = document.body.dataset.page;
  if (page === 'home') {
    renderHome();
  } else if (page === 'publications') {
    renderPublications();
  } else if (page === 'experience') {
    renderExperience();
  } else if (page === 'blog') {
    renderBlog();
  }
}

init();

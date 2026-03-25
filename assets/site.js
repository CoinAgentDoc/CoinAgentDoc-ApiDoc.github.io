document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sidebar = document.querySelector("[data-sidebar]");
  const backdrop = document.querySelector("[data-sidebar-backdrop]");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  const tocRoot = document.querySelector("[data-toc-root]");
  const tocLinks = document.querySelector("[data-toc-links]");
  const doc = document.querySelector(".doc");
  const navSearch = document.querySelector("[data-nav-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");

  const normalizeText = (value) => (value || "").replace(/\s+/g, " ").trim();
  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const closeSidebar = () => {
    body.classList.remove("sidebar-open");
  };

  if (toggle && sidebar && backdrop) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("sidebar-open");
    });
    backdrop.addEventListener("click", closeSidebar);
    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeSidebar);
    });
  }

  document.querySelectorAll("[data-nav-group]").forEach((group) => {
    const button = group.querySelector("[data-nav-toggle]");
    const items = group.querySelector(".nav-group-items");
    if (!button || !items) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      group.classList.toggle("active", !expanded);
      items.hidden = expanded;
    });
  });

  if (navSearch) {
    const groups = Array.from(document.querySelectorAll("[data-nav-group]"));
    let searchIndex = [];

    const renderSearchResults = (items, keyword) => {
      if (!searchResults) return;
      searchResults.innerHTML = "";

      if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "search-empty";
        empty.textContent = "没有匹配的文档结果";
        searchResults.appendChild(empty);
        searchResults.hidden = false;
        return;
      }

      items.slice(0, 6).forEach((item) => {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = item.url;

        const title = document.createElement("span");
        title.className = "search-result-title";
        const highlightedTitle = escapeHtml(item.title).replace(
          new RegExp(`(${escapeRegExp(keyword)})`, "ig"),
          '<mark class="search-highlight">$1</mark>',
        );
        title.innerHTML = highlightedTitle;

        const snippet = document.createElement("span");
        snippet.className = "search-result-snippet";
        const text = item.content || "";
        const lower = text.toLowerCase();
        const at = lower.indexOf(keyword.toLowerCase());
        const snippetStart = Math.max(0, at - 24);
        const snippetRaw = text.slice(snippetStart, snippetStart + 100);
        const highlightedSnippet = escapeHtml(snippetRaw).replace(
          new RegExp(`(${escapeRegExp(keyword)})`, "ig"),
          '<mark class="search-highlight">$1</mark>',
        );
        snippet.innerHTML = highlightedSnippet;

        link.appendChild(title);
        link.appendChild(snippet);
        searchResults.appendChild(link);
      });

      searchResults.hidden = false;
    };

    const searchIndexUrl = searchResults?.dataset.searchIndex;

    fetch(searchIndexUrl || "/search.json")
      .then((response) => response.json())
      .then((data) => {
        searchIndex = Array.isArray(data) ? data : [];
      })
      .catch(() => {
        searchIndex = [];
      });

    navSearch.addEventListener("input", () => {
      const keyword = normalizeText(navSearch.value).toLowerCase();

      groups.forEach((group) => {
        const links = Array.from(group.querySelectorAll(".nav-link"));
        let visibleCount = 0;

        links.forEach((link) => {
          const matched = keyword === "" || normalizeText(link.textContent).toLowerCase().includes(keyword);
          link.hidden = !matched;
          if (matched) visibleCount += 1;
        });

        const button = group.querySelector("[data-nav-toggle]");
        const items = group.querySelector(".nav-group-items");
        const hasVisible = visibleCount > 0;
        group.classList.toggle("filtered-out", !hasVisible);

        if (button && items) {
          if (keyword !== "" && hasVisible) {
            button.setAttribute("aria-expanded", "true");
            items.hidden = false;
            group.classList.add("active");
          } else if (keyword === "" && button.getAttribute("aria-expanded") === "false") {
            items.hidden = true;
            group.classList.remove("active");
          }
        }
      });

      if (searchResults) {
        if (keyword === "") {
          searchResults.hidden = true;
          searchResults.innerHTML = "";
        } else {
          const matchedDocs = searchIndex.filter((item) => {
            const haystack = `${item.title} ${item.content}`.toLowerCase();
            return haystack.includes(keyword);
          });
          renderSearchResults(matchedDocs, keyword);
        }
      }
    });
  }

  if (doc) {
    doc.querySelectorAll("img").forEach((image) => {
      image.addEventListener("click", () => {
        if (!lightbox || !lightboxImage) return;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || "";
        lightbox.hidden = false;
        body.style.overflow = "hidden";
      });
    });

    let sectionIndex = 0;
    let stepIndex = 0;
    let node = doc.firstElementChild;

    while (node) {
      if (node.tagName === "H2") {
        sectionIndex += 1;
        stepIndex = 0;
      }

      if (node.tagName === "HR") {
        const cardNodes = [];
        let cursor = node.nextElementSibling;

        while (cursor && cursor.tagName !== "HR" && cursor.tagName !== "H2") {
          const next = cursor.nextElementSibling;
          cardNodes.push(cursor);
          cursor = next;
        }

        const hasMeaningfulContent = cardNodes.some((item) => normalizeText(item.textContent) !== "" || item.tagName === "FIGURE");

        if (hasMeaningfulContent) {
          stepIndex += 1;
          const card = document.createElement("section");
          card.className = "step-card";
          const label = document.createElement("div");
          label.className = "step-label";
          label.textContent = `Step ${stepIndex}`;
          card.appendChild(label);

          const copy = document.createElement("div");
          copy.className = "step-card-copy";
          const media = document.createElement("div");
          media.className = "step-card-media";

          cardNodes.forEach((item) => {
            if (item.tagName === "FIGURE") {
              media.appendChild(item);
            } else {
              copy.appendChild(item);
            }
          });

          if (copy.childNodes.length > 0) {
            card.appendChild(copy);
          }
          if (media.childNodes.length > 0) {
            card.appendChild(media);
          }

          node.replaceWith(card);
        } else {
          node.remove();
        }

        node = cursor;
        continue;
      }

      node = node.nextElementSibling;
    }

    doc.querySelectorAll("p, li").forEach((element) => {
      const text = normalizeText(element.textContent);
      if (!text) return;

      let calloutType = "";
      let calloutTitle = "";

      if (text.includes("注意事项")) {
        calloutType = "callout-warning";
        calloutTitle = "注意事项";
      } else if (text.includes("前置条件")) {
        calloutType = "callout";
        calloutTitle = "前置条件";
      } else if (text.includes("白名单")) {
        calloutType = "callout-danger";
        calloutTitle = "白名单";
      } else if (text.includes("如果没能顺利验证") || text.includes("检查前置条件")) {
        calloutType = "callout-warning";
        calloutTitle = "验证提示";
      }

      if (!calloutType) return;
      if (element.closest(".callout")) return;

      const box = document.createElement("div");
      box.className = `callout ${calloutType}`.trim();
      const title = document.createElement("div");
      title.className = "callout-title";
      title.textContent = calloutTitle;
      box.appendChild(title);
      element.replaceWith(box);
      box.appendChild(element);
    });
  }

  const headings = Array.from(document.querySelectorAll(".doc h2, .doc h3"));

  if (!tocRoot || !tocLinks || headings.length === 0) {
    if (tocRoot) tocRoot.hidden = true;
    return;
  }

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();
    link.className = `toc-link toc-${heading.tagName.toLowerCase()}`;
    link.dataset.target = heading.id;
    tocLinks.appendChild(link);
  });

  const tocMap = new Map(
    Array.from(tocLinks.querySelectorAll(".toc-link")).map((link) => [link.dataset.target, link]),
  );

  let latestActiveTop = Number.POSITIVE_INFINITY;

  const observer = new IntersectionObserver(
    (entries) => {
      latestActiveTop = Number.POSITIVE_INFINITY;
      let nextActive = null;

      entries.forEach((entry) => {
        const link = tocMap.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting && entry.boundingClientRect.top < latestActiveTop) {
          latestActiveTop = entry.boundingClientRect.top;
          nextActive = link;
        }
      });

      if (nextActive) {
        tocLinks.querySelectorAll(".toc-link.active").forEach((item) => item.classList.remove("active"));
        nextActive.classList.add("active");
      }
    },
    {
      rootMargin: "-12% 0px -72% 0px",
      threshold: 0.1,
    },
  );

  headings.forEach((heading) => observer.observe(heading));

  if (lightbox && lightboxClose) {
    const closeLightbox = () => {
      lightbox.hidden = true;
      if (lightboxImage) {
        lightboxImage.src = "";
      }
      body.style.overflow = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }
});

import { useEffect, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type HubIssue = {
  number: number;
  slug: string;
  title: string;
  shortBlurb: string;
  body: string[];
};

export type HubPractice = {
  id: string;
  institution: string;
  title: string;
  summary: string;
  detail: string[];
  tags: string[];
  link?: { href: string; label: string };
};

type Props = {
  issues: HubIssue[];
  practices: HubPractice[];
};

type ModalKind = "issues" | "schools" | null;

export default function EssentialsHub({ issues, practices }: Props) {
  const [modal, setModal] = useState<ModalKind>(null);
  const [activeIssue, setActiveIssue] = useState(0);
  const [activePractice, setActivePractice] = useState(0);
  const [mounted, setMounted] = useState(false);
  const issuesTitleId = useId();
  const schoolsTitleId = useId();

  const issue = issues[activeIssue] ?? issues[0];
  const practice = practices[activePractice] ?? practices[0];
  const issueHints = issues.slice(0, 5);
  const practiceHints = practices.slice(0, 4);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  function openIssues(index = 0) {
    setActiveIssue(index);
    setModal("issues");
  }

  function openSchools(index = 0) {
    setActivePractice(index);
    setModal("schools");
  }

  const modalNode =
    modal === "issues" && issue ? (
      <ModalShell
        titleId={issuesTitleId}
        kicker="Top 10 Issues"
        title="Facing WNC educators"
        onClose={() => setModal(null)}
      >
        <nav className="modal-nav" aria-label="Issues">
          {issues.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              className={index === activeIssue ? "is-active" : undefined}
              onClick={() => setActiveIssue(index)}
            >
              <span>{item.number}</span>
              {item.title}
            </button>
          ))}
        </nav>
        <article className="modal-detail" key={issue.slug}>
          <p className="modal-num">Issue {issue.number} of 10</p>
          <h3>{issue.title}</h3>
          <p className="modal-lede">{issue.shortBlurb}</p>
          {issue.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </article>
      </ModalShell>
    ) : modal === "schools" && practice ? (
      <ModalShell
        titleId={schoolsTitleId}
        kicker="Campus practice"
        title="What schools are doing"
        onClose={() => setModal(null)}
      >
        <nav className="modal-nav" aria-label="Campus practices">
          {practices.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === activePractice ? "is-active" : undefined}
              onClick={() => setActivePractice(index)}
            >
              <span>{index + 1}</span>
              {item.title}
            </button>
          ))}
        </nav>
        <article className="modal-detail" key={practice.id}>
          <p className="modal-num">{practice.institution}</p>
          <h3>{practice.title}</h3>
          <p className="modal-lede">{practice.summary}</p>
          {practice.detail.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          {practice.link && (
            <a className="modal-link" href={practice.link.href} target="_blank" rel="noreferrer">
              {practice.link.label}
            </a>
          )}
        </article>
      </ModalShell>
    ) : null;

  return (
    <div className="hub">
      <div className="hub-grid">
        <article className="hub-card">
          <p className="hub-label">Survey report</p>
          <h3>Top 10 Issues</h3>
          <p className="hub-lead">
            Critical thinking, policy lag, and assessment redesign keep coming up. Five below; all ten
            in the modal.
          </p>
          <ul className="hub-list">
            {issueHints.map((item, index) => (
              <li key={item.slug}>
                <button type="button" onClick={() => openIssues(index)}>
                  <strong>
                    {item.number}. {item.title}
                  </strong>
                  <span>{item.shortBlurb}</span>
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="hub-open" onClick={() => openIssues(0)}>
            Open full Top 10
          </button>
        </article>

        <article className="hub-card">
          <p className="hub-label">Campus practice</p>
          <h3>What schools are doing</h3>
          <p className="hub-lead">
            Policy frameworks, faculty courses, and classroom redesigns already underway across WNC.
          </p>
          <ul className="hub-list">
            {practiceHints.map((item, index) => (
              <li key={item.id}>
                <button type="button" onClick={() => openSchools(index)}>
                  <strong>{item.title}</strong>
                  <span>
                    {item.institution} — {item.summary}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="hub-open" onClick={() => openSchools(0)}>
            Open all campus practices
          </button>
        </article>
      </div>

      {mounted && modalNode ? createPortal(modalNode, document.body) : null}
      <style>{hubStyles}</style>
    </div>
  );
}

function ModalShell({
  titleId,
  kicker,
  title,
  onClose,
  children,
}: {
  titleId: string;
  kicker: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="modal-root" role="presentation">
      <button type="button" className="modal-backdrop" aria-label="Close dialog" onClick={onClose} />
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal-head">
          <div>
            <p className="modal-kicker">{kicker}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-layout">{children}</div>
      </div>
    </div>
  );
}

const hubStyles = `
  .hub-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem;
    align-items: start;
  }
  .hub-card h3 {
    font-family: var(--font-display);
    font-size: 1.55rem;
    margin: 0 0 0.45rem;
    color: var(--ink);
  }
  .hub-label {
    color: var(--blue);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.3rem;
  }
  .hub-lead {
    color: var(--muted);
    font-size: 0.95rem;
    margin: 0 0 0.85rem;
    line-height: 1.5;
  }
  .hub-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
  }
  .hub-list button {
    width: 100%;
    text-align: left;
    border: 0;
    background: transparent;
    padding: 0.7rem 0;
    border-bottom: 1px solid color-mix(in srgb, var(--purple) 14%, transparent);
    cursor: pointer;
    display: grid;
    gap: 0.25rem;
    color: inherit;
    font: inherit;
  }
  .hub-list button:hover strong {
    color: var(--purple);
  }
  .hub-list span {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .hub-open {
    margin-top: 0.9rem;
    border: 0;
    background: transparent;
    color: var(--green);
    font: inherit;
    font-weight: 600;
    padding: 0.4rem 0;
    cursor: pointer;
  }
  .hub-open:hover {
    color: var(--purple);
  }
  .modal-root {
    position: fixed;
    inset: 0;
    z-index: 80;
    display: grid;
    place-items: center;
    padding: 1rem;
    animation: hubFade 0.22s ease both;
  }
  .modal-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: color-mix(in srgb, var(--ink) 55%, transparent);
    cursor: pointer;
  }
  .modal-panel {
    position: relative;
    z-index: 1;
    width: min(100%, 58rem);
    max-height: min(88vh, 46rem);
    overflow: auto;
    background: var(--cream);
    border-radius: 1.25rem;
    padding: 1.25rem 1.25rem 1.5rem;
    box-shadow: 0 24px 60px color-mix(in srgb, #000 28%, transparent);
    animation: hubPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  @keyframes hubFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes hubPop {
    from { opacity: 0; transform: translateY(1.25rem) scale(0.96); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: start;
    margin-bottom: 1rem;
  }
  .modal-kicker {
    color: var(--purple);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.25rem;
  }
  .modal-head h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  .modal-close {
    border: 0;
    background: transparent;
    color: var(--muted);
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
  }
  .modal-close:hover {
    color: var(--ink);
    background: color-mix(in srgb, var(--purple) 10%, transparent);
  }
  .modal-layout {
    display: grid;
    grid-template-columns: minmax(11rem, 15rem) minmax(0, 1fr);
    gap: 1.25rem;
  }
  .modal-nav {
    display: grid;
    gap: 0.25rem;
    align-content: start;
  }
  .modal-nav button {
    text-align: left;
    border: 0;
    background: transparent;
    border-radius: 0.65rem;
    padding: 0.55rem 0.65rem;
    cursor: pointer;
    color: var(--muted);
    font: inherit;
    font-size: 0.88rem;
    display: flex;
    gap: 0.45rem;
    line-height: 1.3;
  }
  .modal-nav button span {
    color: var(--green);
    font-weight: 700;
    min-width: 1.1rem;
  }
  .modal-nav button.is-active,
  .modal-nav button:hover {
    background: color-mix(in srgb, var(--green-light) 45%, white);
    color: var(--ink);
  }
  .modal-detail h3 {
    font-family: var(--font-display);
    font-size: 1.55rem;
    margin: 0.2rem 0 0.65rem;
  }
  .modal-num {
    color: var(--green);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }
  .modal-lede {
    color: var(--muted);
    margin: 0 0 0.85rem;
  }
  .modal-detail p {
    margin: 0 0 0.75rem;
    color: var(--ink);
  }
  .modal-link {
    color: var(--green);
    font-weight: 600;
    text-decoration: none;
  }
  .modal-link:hover {
    color: var(--purple);
  }
  @media (max-width: 800px) {
    .hub-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .modal-layout {
      grid-template-columns: 1fr;
    }
    .modal-nav {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      overflow-x: auto;
    }
    .modal-nav button {
      white-space: nowrap;
    }
  }
`;

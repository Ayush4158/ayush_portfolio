/* ============================================================
   REPLACE the old `ProjectScreens` component with this one.
   Keep ScreenFrame, MockScreen and Lightbox from screens-patch.jsx
   exactly as they are. Usage in ProfessionalWork stays:

     <ProjectScreens shots={p.screens} title={p.title} />
   ============================================================ */
const ProjectScreens = ({ shots = [], title }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const list = shots.slice(0, 3);
  const stepIdx = useCallback(
    (d) => setActive((i) => (i + d + list.length) % list.length),
    [list.length],
  );

  if (!list.length) return null;
  const cur = list[active] ?? list[0];

  return (
    <div className="mt-7">
      <p className="f-mono mb-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        Desktop screens · click to enlarge
      </p>

      {/* Large desktop preview */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge screenshot: ${cur.caption || cur.alt || title}`}
        className="focus-ring group relative block w-full text-left"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScreenFrame
              shot={cur}
              className="shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] transition-colors group-hover:border-white/30"
            />
          </motion.div>
        </AnimatePresence>
        <span
          className="f-mono absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Maximize2 className="h-3 w-3" /> Enlarge
        </span>
      </button>

      {cur.caption && (
        <p className="mt-3 text-sm text-neutral-400">{cur.caption}</p>
      )}

      {/* Thumbnail switcher */}
      {list.length > 1 && (
        <div className="mt-4 flex gap-3">
          {list.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}: ${s.caption || s.alt || ""}`}
              aria-pressed={i === active}
              className={`focus-ring relative aspect-[16/10] w-24 overflow-hidden rounded-md border bg-[#0c0c0e] transition-all sm:w-28 ${
                i === active
                  ? "border-[color:var(--accent)] opacity-100"
                  : "b-line opacity-50 hover:opacity-90"
              }`}
            >
              {s.src ? (
                <img
                  src={s.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <MockScreen />
              )}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open && (
          <Lightbox
            shots={list}
            index={active}
            title={title}
            onClose={close}
            onStep={stepIdx}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

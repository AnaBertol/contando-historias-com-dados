/* @ds-bundle: {"format":4,"namespace":"KunumiDesignSystem_c10d9a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Quote","sourcePath":"components/editorial/Quote.jsx"},{"name":"Stat","sourcePath":"components/editorial/Stat.jsx"},{"name":"StatusTag","sourcePath":"components/editorial/StatusTag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"d9c3e8222cc2","components/core/Card.jsx":"8f0c26df83f7","components/core/Tag.jsx":"ccdba2bc4f7f","components/editorial/Quote.jsx":"de1ba1a44d00","components/editorial/Stat.jsx":"f44bd80e1796","components/editorial/StatusTag.jsx":"4fe2afdd9b78"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KunumiDesignSystem_c10d9a = window.KunumiDesignSystem_c10d9a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi Button — institutional action.
 * Primary fills with urucum; secondary is a chumbo outline; ghost is text-only.
 * Geometry is near-square (radius-sm). No gradients, no bounce.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      font: "var(--text-sm)",
      gap: "6px"
    },
    md: {
      padding: "11px 20px",
      font: "var(--text-body)",
      gap: "8px"
    },
    lg: {
      padding: "15px 28px",
      font: "var(--text-body-lg)",
      gap: "10px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--urucum)",
      color: "var(--text-on-accent)",
      border: "var(--border-width) solid var(--urucum)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "var(--border-width-strong) solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "var(--border-width) solid transparent"
    },
    inverse: {
      background: "var(--gelo)",
      color: "var(--chumbo)",
      border: "var(--border-width) solid var(--gelo)"
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    letterSpacing: "var(--tracking-label)",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "transform var(--duration-fast) var(--ease-standard), filter var(--duration-fast) var(--ease-standard)",
    userSelect: "none",
    ...v,
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = "brightness(0.92)";
  };
  const onLeave = e => {
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.transform = "none";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "none";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi Card — a content surface on the gelo canvas.
 * White fill, hairline border, restrained cool shadow, small radius.
 * `tone="inverse"` flips it to a chumbo dark card; `tone="accent"` to urucum.
 */
function Card({
  children,
  tone = "default",
  padding = "var(--space-5)",
  interactive = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "var(--border-width) solid var(--border-subtle)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      border: "var(--border-width) solid transparent"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      border: "var(--border-width) solid var(--border-on-dark)"
    },
    accent: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "var(--border-width) solid var(--surface-accent)"
    }
  };
  const t = tones[tone] || tones.default;
  const base = {
    borderRadius: "var(--radius-lg)",
    padding,
    boxShadow: tone === "default" ? "var(--shadow-sm)" : "none",
    transition: "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
    ...t,
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-md)";
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = tone === "default" ? "var(--shadow-sm)" : "none";
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi Tag — a small uppercase label / eyebrow chip.
 * Used for source labels, section tags, "AQUI ENTRA UMA TAG", legend keys.
 */
function Tag({
  children,
  color = "chumbo",
  variant = "soft",
  style,
  ...rest
}) {
  const palette = {
    chumbo: "var(--chumbo)",
    urucum: "var(--urucum)",
    grafite: "var(--grafite)",
    magenta: "var(--magenta)",
    violeta: "var(--violeta)",
    amarelo: "var(--amarelo)",
    verde: "var(--verde-600)",
    indigo: "var(--indigo-600)"
  };
  const c = palette[color] || palette.chumbo;
  const variants = {
    soft: {
      background: "color-mix(in srgb, " + c + " 12%, transparent)",
      color: c,
      border: "none"
    },
    solid: {
      background: c,
      color: "var(--white)",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: c,
      border: "var(--border-width) solid " + c
    }
  };
  const v = variants[variant] || variants.soft;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 10px",
    borderRadius: "var(--radius-xs)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-semibold)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-caps)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...v,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi Quote — the big-quote / poster motif.
 * Large light-weight statement with an uppercase attribution.
 * On light by default; `tone="inverse"` for chumbo slides.
 */
function Quote({
  children,
  author = "",
  tone = "default",
  style,
  ...rest
}) {
  const onDark = tone === "inverse";
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-6)",
    fontFamily: "var(--font-sans)",
    color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
    ...style
  };
  const q = {
    fontSize: "var(--text-poster)",
    fontWeight: "var(--weight-light)",
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--tracking-tight)",
    margin: 0,
    maxWidth: "20ch",
    textWrap: "balance"
  };
  const cite = {
    fontStyle: "normal",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-semibold)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-caps)",
    color: onDark ? "var(--concreto)" : "var(--text-accent)"
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: q
  }, children), author && /*#__PURE__*/React.createElement("figcaption", {
    style: cite
  }, author));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Quote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi Stat — the "big numbers" motif. A large light-weight figure over a
 * short supporting line. Optional unit/prefix and an accent colour.
 */
function Stat({
  value,
  unit = "",
  prefix = "",
  label = "",
  color = "var(--text-strong)",
  align = "left",
  style,
  ...rest
}) {
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)",
    textAlign: align,
    alignItems: align === "center" ? "center" : "flex-start",
    fontFamily: "var(--font-sans)",
    ...style
  };
  const num = {
    fontSize: "clamp(3rem, 7vw, 5.5rem)",
    fontWeight: "var(--weight-black)",
    lineHeight: 1,
    letterSpacing: "var(--tracking-tight)",
    color,
    fontVariantNumeric: "tabular-nums",
    display: "flex",
    alignItems: "baseline",
    gap: "0.06em"
  };
  const affix = {
    fontSize: "0.42em",
    fontWeight: "var(--weight-semibold)",
    letterSpacing: 0
  };
  const lab = {
    fontSize: "var(--text-body)",
    lineHeight: "var(--leading-normal)",
    color: "var(--text-muted)",
    maxWidth: "26ch"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: num
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: affix
  }, prefix), /*#__PURE__*/React.createElement("span", null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: affix
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    style: lab
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Stat.jsx", error: String((e && e.message) || e) }); }

// components/editorial/StatusTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kunumi StatusTag — the four project states from the deck system:
 * Explorando, Atenção, Concluído, Não iniciado. A colour dot + label pill.
 */
const STATES = {
  explorando: {
    label: "Explorando",
    color: "var(--indigo-600)",
    fill: false
  },
  atencao: {
    label: "Atenção",
    color: "var(--amarelo)",
    fill: true
  },
  concluido: {
    label: "Concluído",
    color: "var(--verde-600)",
    fill: true
  },
  "nao-iniciado": {
    label: "Não iniciado",
    color: "var(--grafite)",
    fill: false
  }
};
function StatusTag({
  status = "explorando",
  label,
  style,
  ...rest
}) {
  const s = STATES[status] || STATES.explorando;
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "5px 12px 5px 10px",
    borderRadius: "var(--radius-pill)",
    background: "color-mix(in srgb, " + s.color + " 10%, transparent)",
    border: "var(--border-width) solid color-mix(in srgb, " + s.color + " 30%, transparent)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-medium)",
    color: "var(--text-strong)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...style
  };
  const dot = {
    width: "9px",
    height: "9px",
    borderRadius: "var(--radius-pill)",
    background: s.fill ? s.color : "transparent",
    border: "1.5px solid " + s.color,
    boxSizing: "border-box",
    flex: "none"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: dot
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/StatusTag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatusTag = __ds_scope.StatusTag;

})();

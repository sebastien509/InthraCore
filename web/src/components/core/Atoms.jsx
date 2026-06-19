// src/components/core/Atoms.jsx
export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary",
    secondary: "border border-brand-secondary/20 bg-white text-brand-dark hover:bg-brand-base focus:ring-brand-secondary",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 ${className}`}>{children}</section>
);

export const Heading = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-bold tracking-tight text-brand-dark md:text-4xl ${className}`}>
    {children}
  </h2>
);
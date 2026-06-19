export default function Section({
    children,
    className = '',
    background = 'bg-[#F7F7F3]',
    containerClass = 'max-w-7xl mx-auto px-6',
    ...props
  }) {
    return (
      <section className={`py-20 ${background} ${className}`} {...props}>
        <div className={containerClass}>{children}</div>
      </section>
    );
  }
export default function TestimonialCarousel({ testimonials }) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              “{item.quote}”
            </p>
  
            <div className="mt-8">
              <p className="font-semibold">{item.name}</p>
  
              <p className="text-sm text-slate-500">
                {item.role} · {item.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
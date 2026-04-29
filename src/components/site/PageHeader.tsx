import Breadcrumbs from "./Breadcrumbs";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}

const PageHeader = ({ eyebrow, title, description, crumbs }: Props) => {
  return (
    <section className="relative overflow-hidden gradient-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
      </div>
      <div className="container relative py-10 sm:py-12 lg:py-16">
        {crumbs && (
          <div className="mb-6 [&_*]:!text-primary-foreground/70 [&_a:hover]:!text-accent [&_.text-foreground]:!text-primary-foreground">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance max-w-3xl animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
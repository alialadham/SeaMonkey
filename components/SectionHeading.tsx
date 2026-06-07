type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-parchment md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-parchment/[0.72] md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Wstrzykuje JSON-LD do DOM (SSR + client). */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

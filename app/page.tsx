export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-24">
        <h1 className="text-5xl font-semibold tracking-tight">
          Alex Jiang
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600">
          Software Engineer building full-stack data products.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-semibold tracking-tight">
          Featured Projects
        </h2>

        <p className="mt-6 text-lg">
          World Cup Fantasy Predictor
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-semibold tracking-tight">
          About
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          I am a software engineer with a background in data science and
          statistics.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight">
          Contact
        </h2>

        <p className="mt-6 text-lg text-zinc-600">
          GitHub · LinkedIn · Email
        </p>
      </section>
    </main>
  );
}
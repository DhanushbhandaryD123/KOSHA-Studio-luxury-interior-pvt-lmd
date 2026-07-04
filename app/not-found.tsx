import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <p className="spec text-brass">Sheet not found in the set</p>
        <h1 className="display mt-5 text-7xl md:text-9xl">404</h1>
        <p className="mt-6 max-w-md leading-relaxed text-stone">
          This page was either moved during a renovation or never drawn. The plans below will get you back inside.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="/">Back to home</MagneticButton>
          <MagneticButton href="/projects" variant="brass">View projects</MagneticButton>
        </div>
        <p className="mt-14 spec text-stone">
          Or write to us — <Link href="/contact" className="text-brass underline underline-offset-4">contact the studio</Link>
        </p>
      </div>
    </section>
  );
}

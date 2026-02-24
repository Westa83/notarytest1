type WelcomeCardProps = {
  title: string;
};

export default function WelcomeCard({ title }: WelcomeCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">
        To jest komponent React osadzony na stronie Astro.
      </p>
    </div>
  );
}

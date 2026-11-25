interface Props {
  marker: string
  title: string
  sub?: string
}

export default function SectionHeader({ marker, title, sub }: Props) {
  return (
    <div className="section-rule">
      <div className="text-center">
        <div className="font-terminal text-[10px] tracking-[0.4em] text-faint mb-2">{marker}</div>
        <h2 className="font-terminal text-2xl md:text-4xl font-bold tracking-[0.12em] text-[#00f48e] glow uppercase">
          {title}
        </h2>
        {sub && <div className="font-terminal text-[11px] tracking-[0.25em] text-dim mt-2 uppercase">{sub}</div>}
      </div>
    </div>
  )
}

function WorkCard({
  image = 'pictures/1715929224511.jpg',
  titre = 'Titre du projet',
  key,
}: {
  image?: string
  titre?: string
  key: string
}) {
  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  }
  return (
    <div
      key={key}
      className="relative w-full h-72 rounded-xl border border-slate-50 z-10 bg-cover shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-out bg-center"
      style={divStyle}
    >
      <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center transition-all duration-500 hover:opacity-0">
        <h3 className="font-bold text-4xl text-white drop-shadow-md relative">
          {titre}
        </h3>
      </div>
    </div>
  )
}

export default WorkCard

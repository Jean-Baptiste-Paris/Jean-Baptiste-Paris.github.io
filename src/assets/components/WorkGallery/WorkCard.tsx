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
      className="w-full h-72 rounded-xl border border-slate-50 z-10 bg-cover shadow-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer text-white hover:text-transparent"
      style={divStyle}
    >
      <div className="rounded-xl w-full h-full flex items-center justify-center backdrop-blur-sm hover:backdrop-blur-none hover:text-sm">
        <h3 className="font-bold text-4xl drop-shadow-md">{titre}</h3>
      </div>
    </div>
  )
}

export default WorkCard

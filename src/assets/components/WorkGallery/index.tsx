import WorkCard from './WorkCard'

interface WorkInterface {
  name: string
  image: string
  subtitle: string
  date: string
  description: string
  technologies: string[]
}

function WorkGallery({
  works,
  className,
}: {
  works: WorkInterface[]
  className?: React.ReactNode | null
}) {
  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}
    >
      {works.map((work) => {
        return <WorkCard key={work.name} work={work} />
      })}
    </div>
  )
}

export default WorkGallery

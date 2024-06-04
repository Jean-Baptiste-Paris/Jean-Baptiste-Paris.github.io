import WorkCard from './WorkCard'

interface WorkInterface {
  name: string
  image: string
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
        return <WorkCard key={work.name} titre={work.name} image={work.image} />
      })}
    </div>
  )
}

export default WorkGallery

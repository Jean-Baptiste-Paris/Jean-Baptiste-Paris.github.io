import WorkCard from './WorkCard'

function WorkGallery({ className }: { className?: React.ReactNode | null }) {
  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}
    >
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  )
}

export default WorkGallery

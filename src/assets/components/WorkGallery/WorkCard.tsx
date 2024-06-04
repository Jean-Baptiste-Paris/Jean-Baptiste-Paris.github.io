// import { useState } from 'react'
// import Modal from './Modal'

interface WorkInterface {
  name: string
  image: string
  subtitle: string
  date: string
  description: string
  technologies: string[]
}

function WorkCard({ work }: { work: WorkInterface }) {
  // const [modalOpen, setModalOpen] = useState(false)

  // function handleClick() {
  //   setModalOpen(true)
  // }

  return (
    <div>
      <div
        className="relative w-full h-72 rounded-xl border border-slate-50 z-10 bg-cover shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-out bg-center"
        style={{ backgroundImage: `url(${work.image})` }}
        // onClick={handleClick}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center transition-all duration-500 hover:opacity-0">
          <h3 className="font-bold text-4xl text-white drop-shadow-md relative">
            {work.name}
          </h3>
        </div>
      </div>
      {/* {modalOpen && <Modal work={work} setIsOpen={setModalOpen} />} */}
    </div>
  )
}

export default WorkCard

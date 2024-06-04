import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import IconGroup from '../IconGroup'

interface WorkInterface {
  name: string
  image: string
  subtitle: string
  date: string
  description: string
  technologies: string[]
}

function Modal({
  work,
  setIsOpen,
}: {
  work: WorkInterface
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="w-full h-full fixed top-0 z-20 left-0 flex justify-center items-center bg-black/50 p-20">
      <div className="w-full h-full relative bg-white flex rounded-lg">
        <span
          className="absolute top-0 left-0 m-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="flex-1 pt-10 px-4">
          <h2 className="text-2xl font-bold">{work.name}</h2>
          <h3 className="text-lg font-semibold">{work.subtitle}</h3>
          <p className="text-gray-500 mb-2">{work.date}</p>
          <p className="mb-4">{work.description}</p>
          {/* <div className="mb-4">
            <IconGroup
              iconClassName="text-lg p-2 text-white bg-slate-800 shadow-md"
              icon={faScrewdriverWrench}
              titleClassName="font-light uppercase font-display"
              title="Technologies"
            />
          </div> */}
        </div>

        <div className="relative w-3/4 rounded-e-lg">
          <img
            src={work.image}
            alt={work.image}
            title={work.name}
            className="max-h-fit object-cover rounded-e-lg"
          />
          <div className="absolute top-0 left-0 bg-black/10 w-full h-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Modal

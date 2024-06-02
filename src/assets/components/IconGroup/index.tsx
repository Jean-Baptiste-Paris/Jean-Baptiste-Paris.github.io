import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

function IconGroup({
  icon,
  title,
  className = '',
  iconClassName = '',
  titleClassName = '',
  children,
}: {
  icon: IconDefinition
  title: string
  className?: string
  iconClassName?: string
  titleClassName?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={`w-full flex flex-col space-y-3 border-slate-50 border rounded-md p-4 shadow-md backdrop-blur-lg bg-gradient-to-t from-slate-50 bg-opacity-20 ${className}`}
    >
      <div className="flex space-x-2 items-end">
        <FontAwesomeIcon
          icon={icon}
          className={`rounded flex-shrink-0 aspect-square ${iconClassName}`}
        ></FontAwesomeIcon>
        <h3 className={`text-xl ${titleClassName}`}>{title}</h3>
      </div>
      <div className="gap-2 flex flex-wrap w-full justify-end">{children}</div>
    </div>
  )
}

export default IconGroup

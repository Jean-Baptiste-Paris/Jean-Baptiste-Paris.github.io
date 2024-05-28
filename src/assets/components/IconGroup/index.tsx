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
    <div className={`w-full flex items-center space-x-3 ${className}`}>
      <FontAwesomeIcon
        icon={icon}
        className={`rounded flex-shrink-0 aspect-square p-4 ${iconClassName}`}
      ></FontAwesomeIcon>
      <div className="flex flex-col space-y-2">
        <h3 className={`text-xl ${titleClassName}`}>{title}</h3>
        <div className="gap-2 flex flex-wrap">{children}</div>
      </div>
    </div>
  )
}

export default IconGroup

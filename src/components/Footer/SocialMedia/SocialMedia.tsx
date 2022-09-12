import clsx from 'clsx'
import { ReactComponent as LinkedInLogo } from './linkdin.svg'
import { ReactComponent as GithubLogo } from './github-logo.svg'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, 'flex gap-2 fill-current')}>
      <li className="w-8">
        <a href="https://www.linkedin.com/in/sriram-piratheepan-290876244/">
          <LinkedInLogo />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.github.com/sriram2509">
          <GithubLogo />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
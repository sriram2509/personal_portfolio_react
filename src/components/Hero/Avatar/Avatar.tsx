import clsx from 'clsx'
import avatar from "./sriram-profile.png";
export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div
      className={clsx('mx-auto flex justify-center w-48 lg:w-56 animate-spin', className)}
    >
      <img alt="Profile avatar" src={avatar} />
    </div>
  )
}

export default Avatar


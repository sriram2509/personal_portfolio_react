import clsx from 'clsx'

export interface Props {
  className?: string
}

const ContactForm = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>ContactForm</span>
    </div>
  )
}

export default ContactForm

import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Typed from 'react-typed'
import Avatar from './Avatar'
import Title from './Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    
    <div className={clsx(className, 'container mx-auto px-4bg-zinc-200')}>
      <Avatar />
      <Title />
      <Typed
        className="flex justify-center text-2xl mx-2 text-center h-6 text-yellow-500 font-bold"
        strings={[
          t('Hero.subtitle.MERNDev'),
          t('Hero.subtitle.chessPlayer'),
          t('Hero.subtitle.Photographer'),
        ]}
        typeSpeed={120}
        backSpeed={20}
        loop
      />
    </div>
  )
}

export default Hero
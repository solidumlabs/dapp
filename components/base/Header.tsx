import Link from 'next/link'
import { SolidumIcon } from './Solidum'
import { Routes } from '@/config'

export const Header = () => {
  const homeLink = Routes.home()

  return (
    <header className="sticky top-0 bg-white/30 backdrop-blur-lg z-10">
      <div className="container flex h-20 items-center">
        <Link href={homeLink} className="flex items-center">
          <SolidumIcon className="w-12 p-2 cursor-pointer" />
          <p className="text-lg font-medium">Solidum</p>
        </Link>
        <div className="flex-1 flex gap-3 items-center justify-end">
          <button className="p-3 flex gap-3 font-medium">
            <span>Connect wallet</span>
            <i className="material-symbols-sharp">account_balance_wallet</i>
          </button>
        </div>
      </div>
    </header>
  )
}

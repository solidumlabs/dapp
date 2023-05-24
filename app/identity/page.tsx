import { SolidumIcon } from '@/components/base'
import { IdentityResolver } from '@/components/identity'
import {
  getIdentityRequestToken,
  validateHost,
  validateAddress,
  getOtp,
} from '@/libs/identity'

interface IPageProps {
  searchParams: { address?: string; callback?: string }
}

export default async function Identity({ searchParams }: IPageProps) {
  const address: string = validateAddress(searchParams.address || '') || ''
  const host: string = validateHost(searchParams.callback || '') || ''
  const otp: string = getOtp()

  const token: string = await getIdentityRequestToken({
    addr: address,
    host,
    otp,
  })

  return (
    <div className="px-4 py-10 md:py-20 text-slate-900">
      <div className="text-center mb-4">
        <div className="mx-auto">
          <SolidumIcon className="w-14 border p-2.5 rounded-2xl mx-auto mb-6" />
        </div>
        <h1 className="text-3xl font-bold">Sign in with Solidum</h1>
        <p className="opacity-60">
          Scan this code with Solidum Wallet to sign in
        </p>
      </div>
      <div className="w-48 mx-auto mb-3">
        <IdentityResolver token={token} otp={otp} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">{host}</h1>
        <p className="mb-4 opacity-60">{address}</p>
        <p>or</p>
        <button className="mt-4 p-6 py-4 text-white bg-slate-900 hover:opacity-95 active:opacity-90 rounded-2xl font-medium">
          Create new account to continue
        </button>
        <p className="mt-12 max-w-md mx-auto">
          <span className="opacity-50">
            This flow will provide unique ID for{' '}
          </span>
          <span>{host}</span>
          <span className="opacity-50">
            . Your address, balance or name will be not shared.
          </span>
        </p>
      </div>
    </div>
  )
}

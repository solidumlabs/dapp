import { ethers } from 'ethers'
import crypto from 'crypto'
import { type IIdentityRequestTokenPayload } from '@/types/identity'

const base64 = (value: string) => btoa(value).replace(/\=+$/, '')

export const getIdentityRequestToken = async (
  payload: IIdentityRequestTokenPayload
): Promise<string> => {
  const privateKey: string = process.env.PRIVATE_KEY as string
  const payloadBase64: string = base64(JSON.stringify(payload))
  const wallet = new ethers.Wallet(privateKey)
  const signature: string = await wallet.signMessage(payloadBase64)
  const signatureBase64: string = base64(signature)
  return payloadBase64 + '.' + signatureBase64
}

export const validateAddress = (address: string): string | null => {
  return ethers.utils.isAddress(address) ? address : null
}

export const validateHost = (url: string): string | null => {
  try {
    const address = new URL(url)
    return address.host
  } catch {
    return null
  }
}

export const getOtp = (): string => crypto.randomBytes(16).toString('hex')

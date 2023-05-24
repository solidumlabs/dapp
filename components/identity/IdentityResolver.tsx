'use client'

import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { QrCode } from '@/components/base'
import { IIdentityRequest } from '@/types/identity'

interface IIdentityResolverProps {
  token: string
  otp: string
}

const WS: string = process.env.NEXT_PUBLIC_IDENTITY_WS_SERVER as string

export const IdentityResolver = ({ otp, token }: IIdentityResolverProps) => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(WS)

  useEffect(() => {
    const request: IIdentityRequest = { otp, req: true }
    if (readyState === ReadyState.OPEN) {
      sendMessage(JSON.stringify(request))
    }
  }, [readyState, sendMessage, otp])

  return <QrCode className="p-3 border rounded-2xl" data={token} />
}

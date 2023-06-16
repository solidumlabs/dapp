'use client'

import { useRouter } from 'next/navigation'
import { FileHasher } from '@/components/assets'

export const HomePageHashResolver = () => {
  const router = useRouter()
  return <FileHasher onFileHash={(hash) => router.push('/assets/' + hash)} />
}

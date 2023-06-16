'use client'

import { FileHasher } from '@/components/assets'
import { useState } from 'react'

export default function CreateAssetPage() {
  const [asset, setAsset] = useState()
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Create New Asset
      </h1>
      <FileHasher
        className="aspect-square max-w-[32rem] mx-auto"
        onFileHash={console.log}
      />
    </main>
  )
}

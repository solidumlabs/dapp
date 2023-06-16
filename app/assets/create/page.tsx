'use client'

import { AssetForm, FileHasher } from '@/components/assets'
import { useState } from 'react'

interface FormState {
  file: File
  token: string
}

export default function CreateAssetPage() {
  const [form, setForm] = useState<FormState>()
  const isFileSelected: boolean = !!(form?.file && form.token)
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-semibold text-center">Create New Asset</h1>
      {!isFileSelected ? (
        <FileHasher
          className="aspect-square max-w-[32rem] mx-auto mt-8"
          onFileHash={(token, file) => setForm({ token, file })}
        />
      ) : (
        <>
          <p className="text-center mt-2 text-lg font-medium">#{form?.token}</p>
          <div className="max-w-[32rem] mx-auto mt-12">
            <AssetForm />
          </div>
        </>
      )}
    </main>
  )
}

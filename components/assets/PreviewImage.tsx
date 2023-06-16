'use client'

import { ChangeEvent, useState } from 'react'

interface IPreviewImageProps {
  src: string
}

export const PreviewImage = ({ src }: IPreviewImageProps) => {
  return (
    <div className="relative w-full group text-black">
      <span className="absolute inset-0 w-full h-full bg-emerald-200 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
      <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
      <div className="relative">
        <div className="relative aspect-square border-4 border-black">
          <div
            className="absolute w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: src ? 'url(' + src + ')' : undefined,
              backgroundColor: src ? 'white' : 'transparent',
            }}
          />
        </div>
      </div>
    </div>
  )
}

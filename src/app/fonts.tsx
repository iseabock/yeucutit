// app/fonts.ts
import { Rubik } from 'next/font/google'
import { Cormorant } from 'next/font/google'

const cormorant = Rubik({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

export const fonts = {
  cormorant,
}
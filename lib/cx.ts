import { twMerge, type ClassNameValue } from 'tailwind-merge'

export default function classNames(...classes: ClassNameValue[]) {
  return twMerge(classes)
}

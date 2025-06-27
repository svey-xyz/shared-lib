import type { StringTransforms } from '@shared-lib/stringTransforms'
import _slugify from 'slugify'

export type _slugifyOptions = Parameters<typeof _slugify>[1]
export type _StringTransforms = typeof StringTransforms
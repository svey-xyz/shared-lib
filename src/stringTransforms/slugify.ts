import _slugify from 'slugify'
import type { _slugifyOptions } from '../../types/strings'
// import { type ExtendArgs } from 'slugify'


export const _DEFAULT_SLUG_OPTIONS = {
	replacement: '-',  // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true,      // convert to lower case, defaults to `false`
	strict: true,     // strip special characters except replacement, defaults to `false`
	locale: 'en',      // language code of the locale to use
	trim: true         // trim leading and trailing replacement chars, defaults to `true`
}

export const slugify = (string: string, options: _slugifyOptions = _DEFAULT_SLUG_OPTIONS) => {
	if (!string) return
	return _slugify(String(string), options)
}
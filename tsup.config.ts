import { defineConfig } from 'tsup'

export default defineConfig({
	// Preserve directory structure
	entry: [
		'src/index.ts',
		'src/StringTransforms/index.ts'
	],
	// Maintain directory structure in dist
	keepNames: true,
	bundle: true,
	format: ['esm', 'cjs'],
	dts: true,
	clean: true,
	outExtension({ format }) {
		return {
			js: format === 'esm' ? '.js' : '.cjs',
		}
	},
})
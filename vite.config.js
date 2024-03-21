import { defineConfig } from 'vite';
import cssnano from 'cssnano';
import imagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
            plugins: [
                cssnano(),
                terser(),
                imagemin(),
                visualizer({
                    filename: './stats.html',
                }),
            ],
        },
    )
;
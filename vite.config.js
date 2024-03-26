import { defineConfig } from 'vite';
import cssnano from 'cssnano';
import imagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
    server: {
        https: false,
    },
    plugins: [
        cssnano(),
        terser(),
        imagemin(),
        visualizer({
            filename: './stats.html',
        }),
        {
            name: 'metrics-plugin',
            transformIndexHtml(html) {
                return html.replace(
                    '</body>',
                    '<script src="webperf-practice-2/js/metrics.js"></script></body>'
                );
            },
        },
    ],
});
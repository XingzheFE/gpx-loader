import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/index.js',
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            jsnext: true,
            main: true,
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        uglify({})
    ],
    sourceMap: false,
    moduleName: 'gpx-loader',
    targets: [
        { dest: 'dist/index.js', format: 'umd' }
    ]
};

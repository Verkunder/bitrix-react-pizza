let webpack = require('webpack');
let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Устанавливаем дополнительные пути статики
// =========================================
const nodePath = path.join('node_modules/');
const customNodePath = path.join('local/static/modules/');
const customNodePathBuild = path.join('local/static/bundle/');
const projectCssPath = path.join('local/static/bundle/css/');

const sourceMaps = (process.env.MODE === 'development') ? 'cheap-eval-source-map' : false;
const sourceMapsCss = (process.env.MODE === 'development');

module.paths.unshift(customNodePath);
module.paths.unshift(customNodePathBuild);

const extractSass = new ExtractTextPlugin({
    filename: '/css/[name].css',
    allChunks: true,
    disable: false
});


// Стартовый конфиг
// ===============
let config = {
    entry: {
        // пример entry - меняем их на свои.
        'project': './local/static/assets/sass/global/project.sass',
        'project-js': './local/static/assets/js/project.js',
        'catalog-list-r': './local/components/custom/catalog-list/templates/.default/script.jsx',
        'menu': './local/components/custom/menu/templates/.default/style.sass',
        'phone': './local/components/custom/phone/templates/.default/style.sass',
        'basket': './local/components/custom/basket/templates/.default/style.sass',
        'banner': './local/components/custom/banner/templates/.default/style.sass',
        'stock': './local/components/custom/stock/templates/.default/style.sass',
        'catalog-filter': './local/components/custom/catalog-list/templates/.default/filter.sass',
        'catalog-list': './local/components/custom/catalog-list/templates/.default/style.sass',
        'delivery': './local/components/custom/delivery/templates/.default/style.sass',
        'about': './local/components/custom/about/templates/.default/style.sass',
        'instagram': './local/components/custom/instagram/templates/.default/style.sass',
        'modal': './local/components/custom/catalog-list/templates/.default/modal.sass'

    },
    output: {
        path: path.resolve(__dirname, 'local/static/bundle'),
        filename: '[name].js',
        publicPath: '/local/static/bundle/'
    },
    module: {
        rules: [
            // JSX
            // ===
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            // CSS
            // ===
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // SASS
            // ====
            {
                test: /\.(scss|sass)$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer()
                                ],
                                sourceMap: sourceMapsCss
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    publicPath: projectCssPath
                })
            }
        ]
    },

    // игнорируем папку с модулями для скорости. Можно раскомментировать.
    watchOptions: {ignored: /node_modules/},

    // метод сборки source-map. Sourcemaps включаются только в режиме development.
    devtool: sourceMaps,
    // devtool: 'cheap-eval-source-map', dev

    resolve: {
        modules: [nodePath, customNodePath, customNodePathBuild],
        extensions: ['.js', '.json', '.jsx']
    },

    plugins: [
        extractSass

    ],

    resolveLoader: {
        modules: [nodePath]
    }
};

module.exports = config;

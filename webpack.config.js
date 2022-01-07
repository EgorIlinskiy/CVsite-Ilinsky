const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { truncate } = require('lodash');
const MiniCssLoader = require('mini-css-extract-plugin');

const BabelOptions = pres => {
    const opt = {
        presets: ['@babel/preset-env']

    }
    if (pres) {
        opt.presets.push(pres)
    }

    return opt
}


module.exports = {
    mode: 'development',
    entry: './src/app.jsx', //точка входа в джс (основной файл),
    devtool: 'source-map',
    /*   optimization: {
           splitChunks: {
               chunks: 'all' //позволяет выносить общий код (повторяющийся) в один файл
           }
       },*/
    output: {
        filename: 'bundle.js', // название выходного файла 
        path: path.resolve(__dirname, 'dist') ,// путь выходных файлов
        publicPath: '/'

    },
    plugins: [
        new HtmlWebpackPlugin({ //генерит новый хтмл со всеми подключениями
            template: './src/index.html' // берет как шаблон наш индекс
        }),
        new CleanWebpackPlugin(), //удаляет перед сборкой старые файлы
        new MiniCssLoader({
            filename: 'main.css'
        }) // помещает css в отдельный файл а не тег стайл
    ],
    devServer: {
        open: true,
        liveReload: false,
        hot: true,
        historyApiFallback: true,

    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },
    module: {
        rules: [{
                test: /\.css$/, //все файлы, с расширением .css 
                use: [MiniCssLoader.loader,
                        'css-loader'
                    ] //css помогает вебпаку понимать импорт css в js, style - добавляет все стили в хед
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: BabelOptions() // стандартный пресет бэйбла с доп модулем реакта
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: BabelOptions('@babel/preset-react') // стандартный пресет бэйбла с доп модулем реакта
                }
            },
            {
                test: /\.s[ac]ss$/i, //  отслеживание всех сасс сцсс файлов
                use: [

                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
}
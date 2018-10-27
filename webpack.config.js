const path=require('path');
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const postCssImport=require('postcss-import');
const autoPreFixer=require('autoprefixer');
const MinCssExtract=require('mini-css-extract-plugin');
const browserVersion= ['last 5 versions'];
module.exports={
    devtool:'inline-source-map',
    mode:'development',
    entry:{
        index:path.resolve(__dirname, "src/index.js")
    },
    output:{
        path: path.resolve(__dirname, 'dist/'),
        filename:"[name].bundle.js",
        publicPath: "/"
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['*', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/i,
                exclude:path.resolve(__dirname, "node_module"),
                loader:"babel-loader",
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react'],
                    plugins:[
                        ["import", {"libraryName":"antd", libraryDrectory:'es', style:'css'}]
                    ]
                }
            },{
                test:/\.(css|less)$/i,
                use:[
                    MinCssExtract.loader,
                    {
                        loader: "css-loader",
                        options:{
                            minisize:true
                        }
                    },{
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                postCssImport,
                                autoPreFixer({
                                    browsers:browserVersion
                                })
                            ]
                        }
                    },{
                        loader:'less-loader'
                    }
                ]
            },{
                test:/\.(jpg|png|svg)$/i,
                include: path.resolve(__dirname, 'src'),
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ],
            },{
                test:/\.svg$/i,
                include: path.resolve(__dirname, 'src/svg'),
                loader:"svg-sprite-loader"
            }
        ]
    },
    optimization: {
    },
    plugins: [
        new MinCssExtract({filename:'css/[name].css?[hash]'}),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'index.html'),
            title:"Deve",
            inject:true,
            filename:"index.html",
            // chunks: ['index'],
            hot:true,
            chunksSortMode:"none"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        autoPreFixer({
                            browsers: browserVersion
                        })
                    ]
                }
            }
        })
    ],
    devServer: {
        contentBase:'/',
        // hot: true,
        inline:true,
        compress: true,
        port:9001
    }
};
const path=require('path');
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const postCssImport=require('postcss-import');
const autoPreFixer=require('autoprefixer');
const MinCssExtract=require('mini-css-extract-plugin');
const compressionPlugin=require('compression-webpack-plugin');
const browserVersion= ['last 5 versions'];
module.exports={
    devtool:'eval-source-map',//开发 eval-source-map   生产 source-map;
    // mode:'development',
    entry:{
        index:path.resolve(__dirname, "src/index.js"),
        vendor:['react', 'react-dom', 'antd']
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
                include: [path.resolve(__dirname, 'src/'),path.resolve(__dirname, 'node_modules/antd')],
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
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            fillback:"responsive-loader",
                            limit:8192,
                            name: '[path][name].[hash:4].[ext]',
                            outputPath:'images/'
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
        minimize:false,         //使用UglifyjsWebpackPlugin最小化捆绑包
        noEmitOnErrors: true,//在编译时出现错误时，使用跳过发射阶段。这可确保不会发出错误资产
        runtimeChunk: {         //增加了一个额外的块仅包含运行时每个入口点。此设置是以下别名：
            name:"manifest/manifest",//module=>`abc~${module.name}`
        },
        splitChunks:{
            chunks:"initial",//这表示将选择哪些块进行优化，有效值为all，async和initial。或者提供更多控制功能。返回值将指示是否包括每个块chunk=> chunk.name==='vendor'?
            // minSize: 30000,     //要生成的块的最小大小（以字节为单位）
            // minChunks: 1,       //分割前必须共享模块的最小块数
            // maxAsyncRequests: 5,            //按需加载时的最大并行请求数
            // maxInitialRequests: 3,          //入口点处的最大并行请求数
            name:true,                      //拆分块的名称。提供true将基于块和缓存组密钥自动生成名称module=>module.name
            // filename:'newVendor',
            cacheGroups: {
                // default:{
                //     minChunks:2,
                //     priority:-20,
                //     reuseExistingChunk:true
                // },
                vendor:{
                    test: /node_modules\//,
                    name:'lib/vendor',
                    // chunks:'async',
                    priority:-10,
                    // reuseExistingChunk:true     //已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块
                }
            }
        }
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
        // new compressionPlugin(),
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
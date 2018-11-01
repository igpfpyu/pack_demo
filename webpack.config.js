/**
 *
 * 2018-11-1；
 *
 *
 * webpack-bundle-analyzer ????? 插件是将打包后的内容用canvas以图形的方式展示出来???
 *
 */

const path=require('path');
const webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const postCssImport=require('postcss-import');
const autoPreFixer=require('autoprefixer');
const MinCssExtract=require('mini-css-extract-plugin');
const compressionPlugin=require('compression-webpack-plugin');
const uglifyjsPlugin= require('uglifyjs-webpack-plugin');
const browserVersion= ['last 5 versions'];

//process.argv集合 取指令中命令，并转字符串，用三目判断是不是development环境
let strArgn=process.argv.toString().indexOf('development')>=0? true :false;
module.exports={
    devtool:strArgn?"eval-source-map":"source-map", //'eval-source-map',//开发 eval-source-map   生产 source-map; //false时 vendor的包会很小
    entry:{
        index:path.resolve(__dirname, "src/index.js"),
        vendor:['react', 'react-dom', 'antd']
    },
    output:{
        path: path.resolve(__dirname, 'dist/'),
        filename:"js/[name].bundle.js?[hash]",
        publicPath: "/"
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['*', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }
            },{
                test:/\.(js|jsx)$/i,
                exclude:path.resolve(__dirname, "node_modules"),
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
                // exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // fillback:"file-loader",
                            // outputPath:'images',
                            name: 'images/[name].[hash:4].[ext]',
                            limit:8192,
                            // publicPath:'dist/images'
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
        minimize:strArgn ? false: true,
        minimizer: [
            new uglifyjsPlugin({
                // cache:true,
                // minify(file, sourceMap){},
                // parallel:true, //类型：Boolean | Number默认值：false 使用多进程并行运行来提高构建速度。 默认并发运行数：os.cpus().length - 1。
                uglifyOptions:{
                    compress:false,
                    // unsafe_comps:true, //(默认 false) -- 保留< 和 <=不被换成 > 和 >=。假如某些运算对象是用get或 valueOfobject得出的时候，转换可能会不安全，可能会引起运算对象的改变。此选项只有当 comparisons和unsafe_comps 都设为true时才会启用。
                    warning:false,       //当删除没有用处的代码时，显示警告
                    mangle:false,
                    drop_debugger: true,
                    drop_console: true,//默认 false. 传true的话会干掉console.*函数
                    // comparisons: false //把结果必然的运算优化成二元运算，例如!(a <= b) → a > b (只有设置了 unsafe_comps时才生效)；尽量转成否运算。例如 a = !b && !c && !d && !e → a=!(b||c||d||e)
                }
            })
        ],
        // minimize:true,        //使用UglifyjsWebpackPlugin最小化捆绑包
        // noEmitOnErrors: true,//在编译时出现错误时，使用跳过发射阶段。这可确保不会发出错误资产
        runtimeChunk: {         //增加了一个额外的块仅包含运行时每个入口点。此设置是以下别名：
            name:"manifest/manifest",//module=>`abc~${module.name}`
        },
        splitChunks:{
            //chunks:"all",//这表示将选择哪些块进行优化，有效值为all，async和initial。或者提供更多控制功能。返回值将指示是否包括每个块chunk=> chunk.name==='vendor'?
            // minSize: 30000,     //要生成的块的最小大小（以字节为单位）
            //minChunks: 1,       //分割前必须共享模块的最小块数
            // maxAsyncRequests: 5,            //按需加载时的最大并行请求数
            // maxInitialRequests: 3,          //入口点处的最大并行请求数
            //name:true,                      //拆分块的名称。提供true将基于块和缓存组密钥自动生成名称module=>module.name
            // filename:'newVendor',
            cacheGroups: {
                // default:{
                //     minChunks:2,
                //     priority:-20,
                //     reuseExistingChunk:true
                // },
                vendor:{
                    chunks:"all",
                    test: /[\\/]node_modules[\\/]/,
                    name:"lib/vendor",
                    minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority:100,
                    reuseExistingChunk:true     //已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块
                }
            }
        }
    },
    plugins: [
        new MinCssExtract({
            filename:'css/[name].css?[hash]',
            chunkFilename:'css/[name].css?[hash]'
        }),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'index.html'),
            title:"Deve",
            inject:true,
            filename:"index.html",
            // chunks: ['index', 'vendro'], //chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
            hot:true,
            chunksSortMode:"auto",
            favicon:"favicon.ico"
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
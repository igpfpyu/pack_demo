const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
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
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            },{
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
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
                ]
            },{
                test:/\.svg$/i,
                include: path.resolve(__dirname, 'src/svg'),
                loader:"svg-sprite-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'index.html'),
            title:"Deve",
            inject:true,
            filename:"index.html",
            chunks: ['index'],
            hot:true
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
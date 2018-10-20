const path=require('path');
const devServer=require('webpack-dev-server');
module.exports={
    entry:path.resolve(__dirname, "src/index.js"),
    output:{
        path: path.resolve(__dirname, 'dist/'),
        filename:"[name].js"
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:path.resolve(__dirname, "node_module"),
                loader:"babel-loader",
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            },{
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            },{
                test:/\.(jpg|png)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192
                        }
                    }
                ]
            },{
                test:/\.svg$/,
                loader:"svg-sprite-loader"
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname, 'public'),
        compress:true,
        port:9000,
        hot:true,
    }
};
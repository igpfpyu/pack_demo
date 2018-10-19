const path=require('path');
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
                loader:"",
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
};
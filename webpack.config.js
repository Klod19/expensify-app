// THIS FILE CONFIGURATES WEBPACK
// USES NODE:JS
// 1) set up ENTRY POINT: where the application kicks off; (src/app.js)
// 2) set up OUTPUT: where to output the final bundle.js file

// * we must gain access to "path" with a built-in node function: require()
const path = require("path");
// now I can join the absolute path with the local path, which is the string "public";
// it will be the value of the key "path"


//OUTPUT
// the following is node.js feature, it's a way to expose something, like an object, to another file
// webpack will grab it, runt it, gain access to whatever is inside
// we define it as an objects, which will have the configurations details for the webpack build 

module.exports = {
    //set the entry point; tells webpack where to start
    //entry : "./src/app.js",
    entry: "./src/playground/redux-expensify.js",
    // entry: "./src/playground/redux-101.js",
    //entry: "./src/playground/E6-destructuring.js",
    
    //set the output, equal to an object
    output : {
        //ABSOLUTE PATH on the machine where i want to output the webpack file (here, the "public" folder)
        // we find with the variable "__dirname" --> contains the path to the current location
        // so, we need to join the absolute path to the local path i the public folder (LOOK * ABOVE)
        path: path.join(__dirname, "public"),
        //we can give to filename the name we like, usually is "bundle.js"
        filename: "bundle.js"
    },
    module : {
        //array of rules; 
        rules: [{
                // rules to define how JSX --> JS 
                loader : "babel-loader",
                //process the files that end with .js (regular expression for it)
                test: /\.js$/,
                //exclude the .js in the node_modules folder, which are already processed 
                //and don't need change/addtional code
                exclude : /node_modules/
            },
            //
            {   //rules to define how SCSS --> CSS ("?" to make s optional --> supports BOTH: CSS and SCSS)
                test: /\.s?css$/,
                //now "use:" instead of "loader" --> "use:" use allows us to specify an ARRAY of loaders
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }

        ]
    },
    // the following allow us to track errors in the source code
    devtool: "cheap-module-eval-source-map",
    // configure the webpack devServer
    devServer : {
        //needs the absolute path to content assets
        contentBase: path.join(__dirname, "public"),
        // tell the server we're going to handle routing via client-side code;
        // 404 pages (not found) will run index.html, which will run bundle.js
        historyApiFallback: true
    }
};
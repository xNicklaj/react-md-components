module.exports = api => {
    const isTest = api.env('test');


    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-object-rest-spread"
        ]
    }
}
module.exports = {
    style: {
        modules: {
            localIdentName: "[local]_[hash:base64:5]",
        },
        sass: {
            loaderOptions: {
                sassOptions: {
                    includePaths: ["./src/styles"],
                },
            },
        },
    },
};
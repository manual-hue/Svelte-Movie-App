const production = process.env.NODE_ENV === 'production'

function babelOptions(){
    return {
        plugins: production
            ? ['transform-remove-console']
            : []
    }
}

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        ['@snowpack/plugin-svelte', {
            preprocess: require('svelte-preprocess')({
                scss: {
                    prependData: '@import "./src/scss/main.scss";' // 전역화 될 스타일 파일 
                },
                postcss: {
                    plugins: [
                        require('autoprefixer')()
                    ]
                },
                babel: babelOptions() // 일반 js 뿐 아닌 svelte component 내 스크립트도 관리할 수 있게 함
            })
        }],
        ['@snowpack/plugin-babel', {
            transformOptions: babelOptions()
        }],
        '@snowpack/plugin-dotenv'
    ]
}
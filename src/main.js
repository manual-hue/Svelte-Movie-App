import App from './App.svelte'

const app = new App({
    target: document.body
}) // 생성자 함수를 통하여 body 태그를 target으로 설정 -> svelte project를 body 태그에 연결

export default app
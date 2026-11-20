import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: GitHub Pages 주소(https://jinjjamin.github.io/ahnlab_homepage/)에 맞춰 빌드·미리보기는 /ahnlab_homepage/,
// 개발 서버(npm run dev)는 그대로 / 에서 엽니다.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/ahnlab_homepage/' : '/',
  plugins: [react()],
}))

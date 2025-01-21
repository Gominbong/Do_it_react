module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' // 파일 경로를 프로젝트에 맞게 조정하세요
  ],
  theme: {
    extend: {}
  },
  safelist: [{pattern: /^line-clamp-(\d+)$/}],
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}

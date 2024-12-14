/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#ffee02',
        'custom-cream': '#f7f6f2',
        'custom-light-yellow': '#fffab3',
      },
      fontFamily: {
        'fredericka': ['"Fredericka the Great"', 'cursive'],
        'MaShanZheng': ['"Ma Shan Zheng"', 'serif'],
        'HuangYou': ['"ZCOOL QingKe HuangYou"', 'serif'],
      },
    }
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['hover'],  // 确保这行存在
    },
  },
}
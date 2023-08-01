/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smPhone': '320px',
      'mdPhone': '640px',
      'lgPhone': '768px',
      'smLaptop': '1000px',
      'mdLaptop': '1366px',
      'lgLaptop': '1536px',
    },
    extend: {
      colors: {
        'jc-blue-violet': '#4338ca',
        'jc-blue-violet-hover': '#4f46e5',
        'mab-green': '#C7DD87',
        'mab-blue-light': '#5178ff',
        'mab-blue-dark': '#0c1830',
        'mab-gray-medium': '#46526a',
        'mab-gray-dark': '#333',
        'mab-blue-gray': '#ecf2ff',
        'mab-section-gray': '#F8F8FB'
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Quicksand']
    }
  },
  plugins: [],
}

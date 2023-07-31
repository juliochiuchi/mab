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
        'mab-gray-dark-3': '#303030',
        'mab-gray-dark-2': '#202020',
        'mab-gray-dark-1': '#363636',
        'mab-gray-1': '#f8f8f8',
        'mab-gray-2': '#f6f6f6',
        'mab-white-rose': '#f2e4f9',
        'mab-white-ice': '#f8f8f8',
        'mab-blue': '#55BAE7',
        'mab-blue-hover': '#479bbf',
        'jc-blue-violet': '#4338ca',
        'jc-blue-violet-hover': '#4f46e5',
        'mab-green': '#C7DD87',
        'mab-green-check': '#6BC16F',
        'mab-green-icon': '#9cb552',
        'mab-red-close-ios': '#FF5F56',
        'mab-red-close': '#e1b4b4',

        'mab-blue-banner': '#ecf2ff',
        'mab-title-banner': '#0c1830',
        'mab-desc-banner': '#46526a',
        'mab-blue-button': '#5178ff',
        'mab-blue-button-hover': '#0c1830',
        'mab-color-input': '#333',
        'mab-localization': '#F8F8FB'
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Quicksand']
    }
  },
  plugins: [],
}

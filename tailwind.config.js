const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'info-texture': "url('../app/assets/bgInfos.png')",
      },
    },



    fontFamily: {
      sans: ['League Spartan', 'sans'],
      sans2: ['Encode Sans Expanded', 'sans-serif'],
      sans3: ['Inter', 'sans-serif'],
      Thasadith: ['Thasadith','sans-serif'],
    },

    borderWidth: {
      '1': '3px'
    },

     colors: {
        black: {
          50: '#eaeaea',
          55: '#F1F1F1',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
          950: '#646262',
        },
        orange: {
          50: '#fdf1e6',
          100: '#f7d3b0',
          150: '#AC5300',
          200: '#f4bd8a',
          250: '#E8CFB8',
          300: '#ee9f54',
          350: '#7C5A3B',
          400: '#eb8d33',
          450: '#4B2D12',
          500: '#e67000',
          600: '#d16600',
          700: '#a35000',
          750: '#6F4926',
          800: '#7f3e00',
          850: '#EC8914',
          900: '#612f00',
          950: '#271B0F',
        },
        blue: {
          50: '#e6f8fe',
          100: '#b0e9fb',
          200: '#8adef9',
          300: '#54cff6',
          400: '#33c6f5',
          500: '#00b8f2',
          600: '#00a7dc',
          700: '#0083ac',
          800: '#006585',
          900: '#004d66',
        },
      },
      


  },
  plugins: [require("daisyui")],
}

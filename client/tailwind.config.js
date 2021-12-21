module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        grey: {
          background: '#dbdbdb'
        },
        red: {
          primary: '#14181c',
          secondary: '#ed4956',
          tertiary: '#fc8e81'
        },
        blue: {
          primary: '#22254B',
          secondary: '#373b69',
          medium: '#005c98'
        },
        orange: {
          medium: '#ffa02a'
        },
        green: {
          primary: '#42b983',
          medium: '#46dfcd',
          animeboxd: '#00c030'
        },
        pink: {
          medium: '#ff7ece'
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#98aabb',
          highlights: '#456',
          resultBorder: '#2c3440',
          text: '#9ab',
          text2: '#ddeeff'
        },
        black: {
          background: '#14181c'
        }
      },
      spacing: {
        heroHeight: 'calc(100vh / 2.5)',
        '-999em': '-999em',
        '2em': '2em',
        '1em': '1em',
        '56.25%': '56.25%',
        '33%': '33%',
        '23%': '23%',
        '2%': '2%',
        '1500px': '1500px',
        '1280px': '1280px',
        '1200px': '1200px',
        '950px': '950px',
        '900px': '900px',
        '768px': '768px',
        '720px': '720px',
        '675px': '675px',
        '670px': '670px',
        '640px': '640px',
        '600px': '600px',
        '500px': '500px',
        '450px': '450px',
        '300px': '300px',
        '225px': '225px',
        '200px': '200px',
        '150px': '150px',
        '141px': '141px',
        '120px': '120px',
        '94px': '94px',
        '80px': '80px',
        '68px': '68px',
        '65px': '65px',
        '48px': '48px',
        '46px': '46px',
        '40px': '40px',
        '38px': '38px',
        '34px': '34px',
        '5px': '5px'
      },
      minWidth: {
        '6/12': '50%',
        '1em': '1em',
        '600px': '600px',
        '300px': '300px',
        '200px': '200px',
        '160px': '160px',
        '150px': '150px',
        '140px': '140px',
        '120px': '120px',
        '46px': '46px'
      },
      maxWidth: {
        '6/12': '50%',
        '1em': '1em',
        '1200px': '1200px',
        '950px': '950px',
        '600px': '600px',
        '300px': '300px',
        '200px': '200px',
        '150px': '150px'
      },
      maxHeight: {
        '1em': '1em',
        '600px': '600px',
        '360px': '360px',
        '300px': '300px',
        '200px': '200px',
        '150px': '150px'
      },
      minHeight: {
        '1em': '1em',
        '600px': '600px',
        '300px': '300px',
        '200px': '200px',
        '150px': '150px',
        '125px': '125px',
        '120px': '120px',
        '2px': '2px'
      },
      margin: {
        '18%': '18%'
      },
      padding: {
        '15%': '15%',
        '50%': '50%'
      },
      borderRadius: {
        '50%': '50%'
      },
      fontSize: {
        '4em': '4em',
        '3em': '3em',
        '2.5em': '2.5em',
        '2em': '2em',
        '1.5em': '1.5em',
        '1.3em': '1.3em',
        '1.1em': '1.1em',
        '1em': '1em',
        '0.9em': '0.9em',
        '1rem': '1rem',
        '0.6em': '0.6em',
        '0.4rem': '0.4rem'
      },
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        comfortaa: "'Comfortaa', serif;",
        garamond: "'EB Garamond', serif;"
      },
      strokeWidth: {
        '10s': '10'
      },
      backgroundPosition: {
        'top-center': 'top center',
        'right-hero': 'right -200px top',
        'home-position': 'center 0 !important',
        '50-50': '50% 50%'
      },
      backgroundImage: {
        'hero-gradient1':
          'linear-gradient(180deg,rgba(20,24,28,0) 0,rgba(20,24,28,0) 50%,rgba(20,24,28,.75) 75%,#14181c)',
        'hero-gradient2': 'linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
        'hero-gradient3': 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
        'hero-gradient4':
          'linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 55.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%)',
        'hero-gradient5':
          'linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%)',
        'profile-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))',
        'frame-gradient':
          'linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,0))'
      },
      boxShadow: {
        frame: 'inset 0 0 0 1px rgba(221,238,255,.35)'
      },
      backgroundSize: {
        frame: '100% 1px',
        'home-hero': '100% auto'
      },
      zIndex: {
        1: '1'
      },
      fill: {
        none: 'none'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

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
          medium: '#46dfcd'
        },
        pink: {
          medium: '#ff7ece'
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#dbdbdb'
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
        '900px': '900px',
        '600px': '600px',
        '500px': '500px',
        '450px': '450px',
        '300px': '300px',
        '225px': '225px',
        '200px': '200px',
        '150px': '150px',
        '141px': '141px',
        '94px': '94px',
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
        '150px': '150px',
        '140px': '140px',
        '46px': '46px'
      },
      maxWidth: {
        '6/12': '50%',
        '1em': '1em',
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
        '2px': '2px'
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
      fontFamily: {},
      strokeWidth: {
        '10s': '10'
      },
      backgroundPosition: {
        'top-center': 'top center',
        'right-hero': 'right -200px top',
        '50-50': '50% 50%'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))',
        'profile-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))'
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

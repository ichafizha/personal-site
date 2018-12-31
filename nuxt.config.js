module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['velocity-animate']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'This is Hafizha Husnaisa',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: '0EwAgA6z9K0d-KmQ103WbSwl6CvBLa1rj0Ghfc8rrMY'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Hello Mikqi' },
      { hid: 'description', name: 'description', content: 'Hello, i\'m Hafizha Husnaisa. A Data Analyst currently living in Jakarta, Indonesia' },
      { property: 'og:title', content: 'Online Portfolio of Hafizha Husnaisa' },
      { property: 'og:url', content: 'http://this.rivki.id' },
      { property: 'og:descrition', content: 'Hafizha Husnaisa, a Data Analyst from Jakarta, Indonesia. who loves simplicity, create great looking web products and performance first.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Hafizha Husnaisa - Data Analyst | Jakarta, Indonesia' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@__mikqi' },
      { property: 'twitter:creator', content: '@__mikqi' },
      { property: 'twitter:title', content: 'Online Portfolio of Hafizha Husnaisa' },
      { property: 'twitter:description', content: 'Hafizha Husnaisa, a Data Analyst from Jakarta, Indonesia. who loves simplicity, create great looking web products and performance first.' },
      { rel: 'alternate', href: 'http://this.rivki.id', hreflang: 'en-ID' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:700|Poppins'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js'
      }
    ]
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  css: [
    {
      src: '~assets/scss/skeleton.scss',
      lang: 'scss'
    },
    '~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#da88d6' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#da88d6'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}

module.exports = {
  siteName: 'website',
  siteUrl: '',
  
  plugins: [
    
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
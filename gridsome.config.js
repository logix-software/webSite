module.exports = {
  siteName: 'website',
  siteUrl: '',
  
  plugins: [
    
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'home/**/*.md',
        typeName: 'Home',
        remark: {
          // remark options
        }
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
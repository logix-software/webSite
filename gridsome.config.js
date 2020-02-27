module.exports = {
  siteName: 'Logix Software',
  siteUrl: '',
  
  plugins: [
    
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'progetti-coming-soon/**/*.md',
        typeName: 'ProjectsComingSoon',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'progetti/**/*.md',
        typeName: 'Projects',
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
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'ProjectsPage',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'competenze/**/*.md',
        typeName: 'Competence',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'partnership/**/*.md',
        typeName: 'Partnership',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'cta-project/**/*.md',
        typeName: 'CtaProject',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'about/**/*.md',
        typeName: 'About',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'digital-transformation/**/*.md',
        typeName: 'DigitalTransformation',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'sviluppo-web/**/*.md',
        typeName: 'SviluppoWeb',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'design/**/*.md',
        typeName: 'Design',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'collaborative-team/**/*.md',
        typeName: 'CollaborativeTeam',
        remark: {
          // remark options
        }
      }
    },
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-69717466-1'
    //   }
    // }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
module.exports = {
  siteName: 'Logix Software',
  titleTemplate: (title) => title ? `${title} - %s` : '%s',
  siteUrl: 'https://www.logix-software.it/',
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
        path: 'note-legali/**/*.md',
        typeName: 'LegalNote',
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
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {
          '/chi-siamo/': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/collaborative-team/': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/design-research-and-strategy/': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/sviluppo-web-and-mobile/': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/digital-transformation/': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/proggetti/*': {
            changefreq: 'monthly',
            priority: 0.8
          },
          '/competenze': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/': {
            changefreq: 'weekly',
            priority: 1.0
          }
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
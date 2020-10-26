export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f96f07e415e213698d1ed97',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dmgq1yvu',
                  apiId: 'bf3a0661-154e-4eae-b13a-4bec9816ae2b'
                },
                {
                  buildHookId: '5f96f07e18a5c434e8012ca8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wc5mzd1s',
                  apiId: 'bb90a84f-a399-4180-85f1-139d09e69572'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/squill/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wc5mzd1s.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

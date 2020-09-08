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
                  buildHookId: '5f5815f8d9a8156e486a701a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-jaj42tnj',
                  apiId: '7b1ec70a-dbd6-423e-9cf6-77e5e3845caa'
                },
                {
                  buildHookId: '5f5815f8e6317e5852e9f2e9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-x5887nyr',
                  apiId: 'f73d27ae-3afb-423c-aea3-d7d1d0e29bbe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sheelah/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-x5887nyr.netlify.app', category: 'apps' }
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

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62cc14b125e89c00b463dc18',
                  title: 'Sanity Studio',
                  name: 'sensique-studio',
                  apiId: 'a573db98-c839-4cf2-858f-1bec60d8c8a4'
                },
                {
                  buildHookId: '62cc14b1af43f70056382d2c',
                  title: 'Portfolio Website',
                  name: 'sensique',
                  apiId: '4e0701aa-0018-418a-b148-1ed82a932f89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamatronix/sensique',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sensique.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

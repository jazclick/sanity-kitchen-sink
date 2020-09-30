export default {
  widgets: [
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
                  buildHookId: '5f748ddd74f51fbea18ff0a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-e6wtfiof',
                  apiId: '6ec72788-c863-44af-8347-457ed5408c6e'
                },
                {
                  buildHookId: '5f748ddd531758c80cf1b2b7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8434kc6y',
                  apiId: 'a4bd8a72-f481-412e-bfb4-4f1a7999c523'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jazclick/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8434kc6y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/users', () => {
    return {
      users: [
        {id: 1, name: 'Adam Pennycuick'},
        {id: 2, name: 'Alan Pooley'},
        {id: 3, name: 'Tom Simpson'},
        {id: 4, name: 'Corinne Kennard'},
        {id: 5, name: 'Maude Disney'},
        {id: 6, name: 'Ilbert Key'},
        {id: 7, name: 'Christopher Fields'},
        {id: 8, name: 'Glen Bates'},
        {id: 9, name: 'Lizbeth Jakeman'},
        {id: 10, name: 'Jessi Causey'},
        {id: 11, name: 'Brande Daniell'},
        {id: 12, name: 'Darcy Mason'},
        {id: 13, name: 'Maxene Walmsley'},
        {id: 14, name: 'Azura Kinsley'},
        {id: 15, name: 'Kaye Elliott'}
      ]
    };
  });
}

import Ember from 'ember';
import AuthSessionMixin from '../mixins/auth-session-mixin';

export default Ember.Component.extend(AuthSessionMixin, {
  tagName: '',
  model: [
    { id: 3, title: 'First Blog Review', type: 'Review', publishedAt: '2016-07-07 07:07:07', status: 'Draft' },
    { id: 2, title: 'First Blog Recipe', type: 'Recipe', publishedAt: '2016-07-07 07:07:07', status: 'Published' },
    { id: 1, title: 'First Blog Post', type: 'Post', publishedAt: '2016-07-07 07:07:07', status: 'Published' }
  ],
  showAuthor: true
});
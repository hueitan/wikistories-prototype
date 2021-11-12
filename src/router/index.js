import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Story from '@views/Story.vue'
import StoryViewer from '@views/StoryViewer.vue'
import SearchWikipedia from '@views/SearchWikipedia.vue'
import SearchWikistories from '@views/SearchWikistories.vue'
import SearchCommons from '@views/SearchCommons.vue'
import Article from '@views/Article.vue'
import Publish from '@views/Publish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/story/:id?',
    name: 'Story',
    component: Story
  },
  {
    path: '/searchwikipedia',
    name: 'SearchWikipedia',
    component: SearchWikipedia
  },
  {
    path: '/searchwikistories',
    name: 'SearchWikistories',
    component: SearchWikistories
  },
  {
    path: '/searchcommons',
    name: 'SearchCommons',
    component: SearchCommons
  },
  {
    path: '/article/:article',
    name: 'Article',
    component: Article,
    props: true
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/viewer/:id?',
    name: 'StoryViewer',
    component: StoryViewer
  }
]

const router = new VueRouter({
  routes
})

export default router

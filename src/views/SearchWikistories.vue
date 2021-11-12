<template>
    <div class="view search-wp">
        <Navigator :onBack="() => this.$router.push( { name: 'Story' } )" />
        <SearchForm 
          :label="$i18n('search-stories')" 
          :placeholder="$i18n('search-stories')"
          :query="query"
          :loading="loading"
          :onInput="onInput"
          :onClear="onClear"
        />
        <ListView :items="results"/>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import ListView from '@components/ListView.vue'
    import SearchForm from '@components/SearchForm.vue'
    import Navigator from '@components/Navigator.vue'

    export default {
      name: 'SearchStories',
      components: { ListView, SearchForm, Navigator },
      methods: {
        ...mapActions('stories', ['search', 'clear']),
        onInput: function(e) {
          e.preventDefault()
          this.search(e.target.value)
        },
        onClear: function(e) {
          e.preventDefault();
          this.clear();
        }
      },
      computed: mapGetters('stories', ['loading', 'results', 'query'])
    }
</script>
<style>
    .search-wp {
        font-family: Helvetica Neue;
        padding: 0 22px;
    }
    .search-wp .listview {
      max-height: calc( 100vh - 147px );
    }
</style>

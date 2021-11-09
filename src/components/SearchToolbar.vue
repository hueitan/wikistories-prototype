<template>
    <div class="search-toolbar">
        <router-link to="/searchcommons" class="commons logo">{{ $i18n('wikimedia-commons') }}</router-link>
        <div class="border" />
        <router-link to="/searchwikipedia" class="wikipedia logo">{{ $i18n('wikipedia') }}</router-link>
        <div class="border" />
        <router-link to="/searchwikistories" class="wikipedia logo">{{ $i18n('wikistories') }}</router-link>
    </div>
</template>
<script>
    export default {
      name: 'SearchToolbar'
    }
</script>
<style scoped>
    .search-toolbar {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #FFFFFF;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
    }
    .commons {
        background-image: url(../images/commons.svg);
    }
    .wikipedia {
        background-image: url(../images/wikipedia.svg);
    }
    .logo {
        flex: 1;
        background-repeat: no-repeat;
        background-position: top;
        background-size: 20px;
        padding-top: 23px;
        text-decoration: none;
        text-align: center;
        color: black;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
    }
    .border {
        border: 0.5px solid #A2A9B1;
        margin: 10px 0;
    }
</style>

<template>
    <div class="article-images">
        <div class="article-images-header">
            <span>{{ $i18n('btn-select-image') }}</span>
            <a @click="onSubmit(selectedImage)" v-if="selectedImage">{{ $i18n('btn-next') }}</a>
        </div>
        <div class="article-images-thumbs">
            <img class="article-image-thumb"
                 v-for="img in images" :key="img.src"
                 :src="img.src"
                 @click="selectImage(img.src)"
                 :class="{selected: selectedImage === img.src}"
            />
        </div>
    </div>
</template>
<script>
    export default {
      name: 'ArticleImages',
      props: ['images', 'onSubmit'],
      data: () => {
        return { selectedImage: null }
      },
      methods: {
        selectImage: function ( src ) {
          this.selectedImage = src
        }
      }
    }
</script>
<style>
    .article-images {
        padding: 10px;
        background-color: white;
        margin: 0;
    }
    .article-images-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .article-images-header span {
        font-weight: bold;
    }
    .article-images-header a {
        font-weight: bold;
    }
    .article-images-thumbs {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }
    .article-image-thumb {
        height: 100px;
        margin: 4px 10px;
        padding: 2px;
    }
    img.selected {
        outline: solid green 2px;
        border-radius : 2px;
        color: #3366cc;
    }
</style>

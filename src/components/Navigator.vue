<template>
    <div class="navigator">
        <!-- Use <router-link> but able to call event before route? -->
        <div v-if="onBack" class="back" @click="onBack"/>
        <div v-if="onNext" class="next" @click="onNext">{{ $i18n('btn-next') }}</div>
        <span class="info" v-if="info">{{ info }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Navigator',
        props: [ 'onBack', 'onNext', 'info' ]
    }
</script>

<style scoped>
    .navigator {
      position: relative;
      height: 40px;
    }
    .navigator .info {
      position: absolute;
      margin: 15px 0;
      left: 50px;
      font-family: Helvetica Neue;
      font-style: normal;
      font-weight: normal;
      font-size: 17.6px;
      line-height: 25px;
      color: #000000;
    }
    .navigator .back {
      background-image: url(../images/back.svg);
      position: absolute;
      width: 16px;
      height: 16px;
      left: 0;
      margin: 20px 0;
      cursor: pointer;
    }
    .navigator .next {
      position: absolute;
      width: 16px;
      height: 16px;
      right: 0;
      margin: 20px;
      cursor: pointer;
      font-weight: bold;
    }
</style>
<style lang="scss">
@use "sass:math";

$avatarSize: 60px;

.das-account-card {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  .das_card {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-left: 2%;
    padding-right: 2%;
    background: url('../imgs/das-card-bg.svg') no-repeat center bottom/contain;

    &._narrow {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .das_name {
    font-size: 44px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    color: #fff;
  }

  .das_suffix {
    padding: 0 20px 4px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    font-weight: bold;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
}

</style>
<script>
import DasAvatar from './DasAvatar.vue'
import ResizeText from '../directives/ResizeText'
import { accountColor } from '~/tools/color'

export default {
  name: 'DasAccountCard',
  components: {
    DasAvatar
  },
  directives:{
    ResizeText
  },
  props: {
    account: {
      type: String,
      default: ''
    }
  },
  data () {
    const color = accountColor(this.account)

    return {
      color,
      label: this.account.replace(/\.bit$/, ''),
      isNarrow: false,

      contentHeight: 0,
      contentWidth: 0,
      avatarSize: 0,
      maxFontSize: 0,
      minFontSize: 0,
      activated: false,
    }
  },
  mounted () {
    const cardHeight = this.$el.scrollHeight
    const cardWidth = this.$el.scrollWidth

    const maxHeight = cardHeight * 0.9
    const maxWidth = cardWidth * 0.9

    this.contentHeight = Math.min(maxHeight, maxWidth * 0.8)
    this.contentWidth = Math.min(maxWidth, maxHeight * 1.25)
    this.avatarSize = this.contentWidth * 0.2
    this.maxFontSize = this.contentWidth * 0.1
    this.minFontSize = Math.max(12, this.maxFontSize * 0.5)
    this.activated = true
  }
}
</script>

<template>
  <div class="das-account-card" :style="{backgroundColor: color.color}">
    <div class="das_card" :class="isNarrow ? '_narrow': ''" :style="{height: `${contentHeight}px`, width: `${contentWidth}px`}">
      <DasAvatar class="das_avatar" :account="account" :size="avatarSize" />
      <div v-if="activated" class="das_name" v-resize-text="{minSize: minFontSize, maxSize: maxFontSize}">{{ account.replace('.bit', '') }}</div>
      <div class="das_suffix" :style="{'font-size': `${maxFontSize}px`}">.bit</div>
    </div>
  </div>
</template>
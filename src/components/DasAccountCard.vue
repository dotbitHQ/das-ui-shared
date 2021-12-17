<style lang="scss">
@use "sass:math";

$avatarSize: 60px;

.das-account-card {
  position: relative;

  .das-account-card_body {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
  }

  // here we use a div as shadow instead of box-shadow to allow html2canvas to work properly.
  .das-account-card_shadow {
    position: absolute;
    top: 6%;
    left: -6%;
    width: 100%;
    height: 100%;
  }
  
  .das-account-card_content {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3%;
    margin-bottom: 2%;
    background: url('../imgs/das-card-bg.svg') no-repeat center bottom/contain;

    &._narrow {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .das-account-card_avatar {
    margin-top: -5%;
  }

  .das-account-card_name {
    font-size: 44px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    color: #fff;

    &._light {
      font-weight: unset;
    }
  }

  .das-account-card_suffix {
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
    },
    shadow: Boolean,
    round: Boolean,
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
      radius: 0,
      activated: false,

      lightName: false,
    }
  },
  mounted () {
    const cardHeight = this.$el.scrollHeight
    const cardWidth = this.$el.scrollWidth

    const maxHeight = cardHeight * 0.9
    const maxWidth = cardWidth * 0.9

    this.contentHeight = Math.min(maxHeight, maxWidth * 0.75)
    this.contentWidth = Math.min(maxWidth, maxHeight * 1.33)
    this.avatarSize = this.contentWidth * 0.2
    this.maxFontSize = this.contentWidth * 0.14
    this.minFontSize = Math.max(12, this.maxFontSize * 0.5)

    if (this.round) {
      this.radius = this.contentWidth * 0.08
    }
    this.activated = true

    // fixed the rendering problem introduced in chrome 96 on windows
    // nextTick is to not break the main thread if anything happens, as it is not fully test
    // https://support.google.com/chrome/thread/136127348/chrome-bold-weight-emoji-broken-version-93-0-4664-45?hl=en
    this.$nextTick(() => {
      const ua = window?.navigator.userAgent
      if (ua && ua.match(/windows/ig) && ua.match(/chrome/ig)) {
        if (this.account.match(/(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/ig)) {
          const version = Number(ua.match(/chrome\/(\d+)/i)[1])
          if (version === 96) {
            this.lightName = true
          }
        }
      }
    })
  }
}
</script>

<template>
  <div class="das-account-card">
    <div v-if="shadow" class="das-account-card_shadow" :style="{backgroundColor: color.light, borderRadius: `${radius}px`}" />

    <div class="das-account-card_body" :style="{backgroundColor: color.color, borderRadius: `${radius}px`}">
      <div class="das-account-card_content" :class="isNarrow ? '_narrow': ''" :style="{height: `${contentHeight}px`, width: `${contentWidth}px`}">
        <DasAvatar class="das-account-card_avatar" :account="account" :size="avatarSize" />
        <div v-if="activated" class="das-account-card_name" :class="{_light: lightName}" v-resize-text="{minSize: minFontSize, maxSize: maxFontSize}">{{ label }}</div>
        <div class="das-account-card_suffix" :style="{'font-size': `${maxFontSize}px`}">.bit</div>
      </div>
    </div>
  </div>
</template>
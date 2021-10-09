<script>
import { DasAvatar, DasAccountCard } from '../dist/das-ui-shared.es'
import '../dist/style.css'
// import { DasAvatar, DasAccountCard } from './index'

export default {
  components: {
    DasAvatar,
    DasAccountCard,
  }
}
</script>

<template>
  <div class="app">
    <DasAvatar account="dastodamoon.bit" size="50" ></DasAvatar>
    <div style="display: flex;justify-content: space-between;">
      <DasAccountCard account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit"></DasAccountCard>
      <DasAccountCard account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit"></DasAccountCard>
      <DasAccountCard account="dastodamoon.bit"></DasAccountCard>
    </div>
    <div style="display: flex;justify-content: space-between;">
      <DasAccountCard account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit"></DasAccountCard>
      <DasAccountCard account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit"></DasAccountCard>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .das-account-card {
    flex: 1;
    height: 200px;
  }
}
</style>

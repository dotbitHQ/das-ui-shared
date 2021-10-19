<script>
// import { DasAvatar, DasAccountCard } from '../dist/das-ui-shared.es'
// import '../dist/style.css'
import { DasAvatar, DasAccountCard } from './index'

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
      <DasAccountCard style="height: 200px" shadow round account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit"></DasAccountCard>
      <DasAccountCard style="height: 200px" shadow account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit"></DasAccountCard>
      <DasAccountCard style="height: 200px" account="dastodamoon.bit"></DasAccountCard>
      <DasAccountCard style="height: 200px" account="alice.bit"></DasAccountCard>
      <DasAccountCard style="height: 200px" account="a.bit"></DasAccountCard>
    </div>

    <div style="display: flex;justify-content: space-between;">
      <DasAccountCard style="height: 300px" shadow round account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit"></DasAccountCard>
      <DasAccountCard style="height: 300px" account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit"></DasAccountCard>
      <DasAccountCard style="height: 300px" account="dastodamoon.bit"></DasAccountCard>
      <DasAccountCard style="height: 300px" account="alice.bit"></DasAccountCard>
    </div>
    <div style="display: flex;justify-content: space-between;">
      <DasAccountCard shadow round account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit" style="height: 400px"></DasAccountCard>
      <DasAccountCard account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit" style="height: 400px"></DasAccountCard>
      <DasAccountCard account="dastodamoon.bit" style="height: 400px"></DasAccountCard>
    </div>
    <div style="display: flex;justify-content: space-between;">
      <DasAccountCard shadow round account="thefirst💯registeredbydevteamtoensuredassuccessfullylaunched18.bit" style="height: 500px"></DasAccountCard>
      <DasAccountCard account="💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊💯💯💯💯🐳😊🐳😊🐳😊🐳😊🐳😊.bit" style="height: 800px"></DasAccountCard>
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
    height: 333px;
    margin: 2%;
  }
}
</style>

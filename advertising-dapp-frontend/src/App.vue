<template>
  <div id="app">
    <header>
      <b-container>
        <b-row align-v="center" class="justify-content-center">
          <b-col cols="auto">
            <img src="./assets/logo_nuls.png" alt="Logo NULS">
          </b-col>
          <b-col class="title" cols="auto">NULS Advertising Dapp</b-col>
        </b-row>
      </b-container>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <b-container>
        <b-row align-v="center">
          <b-col>
            <strong>Angel Manzano</strong> © 2019
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<style lang="scss">

html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;

  header {

    background-color: #ddd;

    padding: 20px 0;

    .title {
      font-size: 2rem;
      font-weight: bold;
    }

  }

  main {

    padding: 20px 0;
    min-height: calc(100% - 197px);

  }

  footer {

    height: 100px;
    background: #ddd;

    .container,
    .row {
      height: 100%;
    } 
  }
}

</style>

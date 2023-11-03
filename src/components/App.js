html,body,#root {
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: black;
}

html {
  --sidebar: hsl(0, 0%, 95%);
  --sidebar-border: black;
  --tab-bg: hsl(0, 0%, 100%);
  --tab-border: hsl(0,0%,15%);
  --sidebar-color: hsl(0,0%,0%);
  --switch: rgb(255, 166, 0);
  --selected: rgb(255, 166, 0);
  /* --selected: rgb(47, 32, 253); */
  --home-bg: hsl(0,0%,97%);
  --home-color: hsl(0,0%,7%);
  --toggler-color: rgb(17, 17, 17);
  --home-link: hsl(240,100%,43.3%);
  --home-img-border: black;
  --pallet-color: white;
  --pallet-bg: hsl(0,0%,95%);
  --pallet-bb: black;
  --header-color: black;
  --header-bg: linear-gradient(
    to bottom,
    hsl(0,0%,85%),
    hsl(0,0%,95%)
  );
}

html::-webkit-scrollbar, 
body::-webkit-scrollbar, 
#root::-webkit-scrollbar {
  display: none;
}

body[data-theme='dark'] {
  --home-color: hsl(0,0%,100%);
  --home-bg: hsl(0,0%,12%);
  /* --home-bg: hsl(0,0%,20%); */
  --sidebar-border: white;
  --toggler-color: yellow;
  --tab-bg: hsl(0,0%,23%);
  --tab-border: hsl(0,0%,5%);
  --sidebar-color: hsl(0,0%,98%);
  --sidebar: hsl(0,0%,12%);
  --home-link: rgb(255, 166, 0);
  --home-img-border: white;
  --pallet-bg: hsl(0, 0%, 10%);
  --pallet-bb: white;
  --header-color: white;
  --header-bg: linear-gradient(
    to bottom,
    hsl(0,0%,12%),
    hsl(0,0%,10%)
  );
}

* {
  box-sizing: border-box;
}
*:active,*:hover,*:focus {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}

.editor-wrapper {
  width: 100%;
  /* height: 100vh; */
  height: calc(100% - 90px);
  /* min-height: calc(100% - 50px); */
}

.no-file {
  height: 100%;
  padding: 10px 20px;
  background-color: var(--home-bg);
  color: var(--home-color);
}

.no-file h1,h4 {
  margin: 10px;
  text-align: center;
}

.slide-instruction {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background-color: hsla(0,0%,0%,.65);
}

.slide-instruction .arrow {
  height: 200px;
  width: 300px;
  bottom: 40%;
  position: absolute;
  right: -70%;
  animation-name: vibrate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  opacity: .7;
}

.slide-instruction h2 {
  color: white;
  text-align: center;
  position: absolute;
  bottom: 30%;
  padding: 0 20px;
}

@keyframes vibrate {
  from {
    right: -70%;
  }
  to {
    right: -10%;
  }
}

@media screen and (min-width: 900px) {
  #root {
    margin-right: 300px;
  }
  .slide-instruction {
    display: none !important;
  }
}

@media screen and (min-width: 1100px) {
  #root {
    margin-right: 350px;
  }
}
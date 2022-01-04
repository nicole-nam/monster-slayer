const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");

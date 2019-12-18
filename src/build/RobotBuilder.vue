<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollabsibleComponent>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.heads.src" />
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left" />
          <img :src="selectedRobot.torsos.src" />
          <img :src="selectedRobot.rightArm.src" class="rotate-right" />
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.bases.src" />
        </div>
      </div>
      </CollabsibleComponent>
      <button class="add-to-cart" @click="addToCart()">Add To Cart</button>
    </div>

    <div class="top-row">
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => selectedRobot.heads = part"
        @partSelected2="() => inProgress=true"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm = part"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torsos = part"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm = part"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.bases = part"
      />
    </div>
  </div>
</template>

<script>
import PartSelector from './PartSelectore.vue';
import CollabsibleComponent from '../shared/CollabsibleComponent.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelector, CollabsibleComponent },
  created() {
    this.$store.dispatch('robots/getParts');
  },
  beforeRouteLeave(to, from, next) {
    next(!this.inProgress);
  },
  data() {
    return {
      selectedRobot: {
        heads: {},
        torsos: {},
        bases: {},
        leftArm: {},
        rightArm: {},
      },
      inProgress: false,
    };
  },
  computed: {
    availableParts() {
      return this.$store.state.robots.parts;
    },
    cart() {
      return this.$store.state.robots.cart;
    },
  },
  methods: {
    addToCart() {
      const rbt = this.selectedRobot;
      const cost = rbt.heads.cost
        + rbt.bases.cost
        + rbt.torsos.cost
        + rbt.leftArm.cost
        + rbt.rightArm.cost;
      this.$store.dispatch('robots/addRobotToCart', Object.assign({}, rbt, { cost }))
        .then(() => this.$router.push('/cart'));
    },
  },
};
</script>

<style lang="scss" scoped>
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  width: 100%;
  top: -25px;
  position: absolute;
  text-align: center;
}
.on-sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
.selectOnSale {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>

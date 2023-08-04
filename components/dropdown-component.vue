<template>
  <button
    :class="['accordionItem', active]"
    @click="toggleItem(item)"
    @keydown.enter="toggleItem(item)"
    @keydown.space="toggleItem(item)"
  >
    <div class="accordionTitleParent">
      <div class="accordionTitle">
        {{ item.title }}
      </div>
      <div class="iconBox">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L6.96866 8L14 0H0Z" fill="#494E6A" />
        </svg>
      </div>
    </div>
    <div class="accordionSub">
      <div class="accordionContent">
        {{ item.text }}
      </div>
      <div class="accordionImage">
        <img class="imageIcon" alt="logo" :src="item.image">
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropDownComponent',
  props: {
    item: {
      type: Object,
      default: () => ({
        title: '',
        text: '',
        image: '',
        active: ''
      })
    },
    active: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleItem (item) {
      this.$emit('item-clicked', item)
    }
  }
})
</script>

<style lang="scss">
.accordionItem {
  cursor: pointer;
  align-self: stretch;
  border-radius: $br-9xs;
  background-color: $color-gainsboro;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: $padding-lg;
  gap: $gap-7xl;
  width: 400px;
  border: none;
  font-family: $font-work-sans;

  &.active {
    background-color: #eaeef4;
    padding-bottom: 38px;
    color: #4461d7;

    .accordionSub {
      display: flex;
      animation: fadeIn 0.3s;
    }

    .iconBox {
      transform: rotate(-180deg);
    }

    .accordionItem:focus {
      border:#4461d7;
    }
  }

  @include lg {
    width: 100%;
  }

  .accordionTitleParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: $gap-7xl;
  }

  .accordionTitle {
    position: relative;
    line-height: 120%;
    font-weight: 500;
    font-size: $font-size-2xl;
  }

  .iconBox {
    transition: transform 0.3s;
  }

  .accordionSub {
    flex-direction: column;
    gap: $gap-7xl;
    display: none;
    transition: all 1s;

    .accordionContent {
      font-size: 16px;
      line-height: 26px;
      color: #494e6a;
      overflow: hidden;
      text-align: left;
      padding-right: 25px;

      @include xs {
        padding-right: 0;
        font-size: 15px;
      }
    }

    .accordionImage {
      height: 120px;
      display: none;
      justify-content: center;
      align-items: center;

      .imageIcon {
        height: 100%;
      }

      @include sm {
        display: flex;
      }
    }
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

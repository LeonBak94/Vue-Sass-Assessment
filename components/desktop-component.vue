<template>
  <div class="desktop">
    <div class="imageLeftContainer">
      <img class="imageLeftIcon" alt="logo" :src="activeItem.image">
    </div>
    <div class="content">
      <div class="header">
        <div class="tag">
          {{ tag }}
        </div>
        <p class="title">
          {{ title }}
        </p>
      </div>
      <DropDownComponent
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :active="activeItem === item ? 'active' : ''"
        @item-clicked="toggleItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropDownComponent from './dropdown-component.vue'

export default defineComponent({
  name: 'DesktopComponent',
  components: { DropDownComponent },
  data () {
    return {
      activeItem: {
        title: '',
        text: '',
        image: ''
      },
      items: [],
      title: '',
      tag: ''
    }
  },
  mounted () {
    this.$axios
      .get('https://eoyge3duj7xtdqd.m.pipedream.net/')
      .then((response) => {
        this.items = response.data.items
        this.title = response.data.title
        this.tag = response.data.tag

        if (this.items.length > 0) {
          this.activeItem = this.items[0]
        }

        return response.data
      })
      .catch((err) => {
        throw err
      })
  },
  methods: {
    toggleItem (item) {
      this.activeItem = item
    }
  }
})
</script>

<style lang="scss">
.desktop {
  display: flex;
  flex-direction: row;
  padding: 81px 116px 80px 91px;
  gap: 183px;

  @include xl {
    gap: 130px;
    padding: 81px 60px 80px;
  }

  @include lg {
    gap: 80px;
    padding: 81px 50px 80px 40px;
  }

  @include md {
    gap: 50px;
    padding: 81px 40px 80px 30px;
  }

  @include sm {
    padding: 0;
    justify-content: center;
    align-items: center;
  }

}

.imageLeftContainer {
  padding: 34px 0px 34px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @include lg {
    width: 90%;
  }

  @include xs {
    display: none;
  }

  @include sm {
    display: none;
    width: 100%;
  }

  .imageLeftIcon {
    width: 100%;
    display: flex;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 34px;

  @include sm {
    padding: 40px 29px 13px 28px;
  }

  .header {
    display: flex;
    flex-direction: column;

    .tag {
      color: #FF22B1;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 2px;
      word-wrap: break-word;
      font-family: $font-work-sans;
    }

    .title {
      color: #1D1C39;
      font-size: 40px;
      font-family: $font-work-sans;
      font-weight: 600;
      line-height: 41px;
      word-wrap: break-word;

      @include md {
        font-size: 30px;
      }

      @include sm {
        color: #1D1C39;
        font-size: 28px;
      }

      @include lg {
        font-size: 28px;
      }
    }
  }

  .accordion {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

}
</style>

<template>
  <div class="title-container">
    <section class="qsmy-icon">
      <img
        src="@/assets/qsmy-icon.png"
        alt=""
        srcset=""
      >
    </section>
    <section class="tab-list-main">
      <ul>
          <router-link :to="item.url" tag="li" v-for="(item, index) in tabList" :key="index">{{ item.title }}</router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { id: 0, title: "动漫",url:'/QsmyMain/dm' },
        { id: 1, title: "歌曲",url:'/QsmyMain/gq' },
        { id: 2, title: "壁纸",url:'/QsmyMain/bz' },
        { id: 3, title: "贴吧",url:'/QsmyMain/tb' }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.title-container {
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .qsmy-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80px;
      height: auto;
    }
  }
  .tab-list-main {
    ul {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        line-height: 50px;
        color: chocolate;
        font-size: 30px;
        padding: 0 25px;
        font-family: 楷体;
        cursor: pointer;
        // min-width: 60px;
        font-weight: bolder;
      }
      li:hover{
          background-color: rgba(255, 255, 255, 0.5);
          transition: all ease 0.5s;
      }
    }
  }
}
</style>

<!-- 手风琴(三级折叠列表) 组件 -->
<template>
  <div class="header">
    <ul>
      <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
      <li v-for="(item,index) in headerData" :class="[{active:item.show}]" @click.stop="changeli(index,item)">
        <!-- 在这里打印出boll值方便查看 -->
        {{item.name}}{{item.show}}
        <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
        <ul v-show="item.show">
          <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
          <li v-for="(a,index) in item.list" :class="[{activeItem:a.showItem}]" @click.stop="changeItem(index,a,item.list)">
            {{a.name}}
            <!-- 循环三级菜单数据并使用.stop阻止冒泡 -->
            <ul v-show="a.showItem">
              <li v-for="(b,index) in a.list" v-on:click.stop="doThisItem(index)">{{b.name}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //
      }
    },
    props: {
      headerData: {
        type: Array,
        required: true
      }
    },
    methods: {
      changeli(ind, item) {
        // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
        this.headerData.forEach(i => {
          // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
          if (i.show !== this.headerData[ind].show) {
            i.show = false;
          };
        });
        // 取反(true或false)
        item.show = !item.show;
        console.log(item.name);
      },
      changeItem(ind, item,arr) {
        // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
        arr.forEach(i => {
          // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
          if (i.showItem !== arr[ind].showItem) {
            i.showItem = false;
          };
        });
        // 取反(true或false)
        item.showItem = !item.showItem;
        console.log(item.name);
      },
      doThisItem(index){
        alert(index);
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    width: 100%;
    background-color: #ff5722;
    color: #ffffff;
    >ul {
      width: 100%;
      >li {
        width: 100%;
        border: 1px solid #ffffff;
        cursor: pointer; // float: left;
        color: 20px;
        text-align: center;
        line-height: 60px;
        &:hover {
          background-color: #ff9800;
        }
        >ul {
          width: 100%;
          background: red;
          li{
            &:hover{
              background: #c31111;
            }
          }
        }
      }
      .active {
        background-color: #ff9800;
        .activeItem{
          background-color: green;
        }
      }
    }
  }
</style>

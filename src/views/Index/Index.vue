<template>
  <div class="layout">
    <el-container :class="[theme]" direction="vertical">
      <el-header>
        <div class="flex">
          <div class="logo">xxxxxxxx</div>
          <div class="message-panel flex-item">
            <div class="menu-expand-btn" @click="collapse">
              <el-icon>
                <Expand v-if="isCollapsed" />
                <Fold v-else />
              </el-icon>
            </div>
          </div>
          <div class="tools flex">
            <div class="flex-item tool-item">
              <el-icon><Search /></el-icon>
            </div>
            <div class="flex-item tool-item">
              <el-icon><BellFilled /></el-icon>
            </div>
            <div class="flex-item tool-item">
              <el-icon><FullScreen /></el-icon>
            </div>
            <div class="flex-item tool-item">
              <el-icon><RefreshRight /></el-icon>
            </div>
            <div class="flex-item tool-item">
              <el-icon><Sunny /></el-icon>
            </div>

            <div class="flex-item tool-item userinfo-item">
              <el-dropdown>
                <span class="el-dropdown-link flex">
                  <div class="flex flex-item">
                    <div>
                      <el-icon><User /></el-icon>
                    </div>
                    <div class="flex-item username">管理员</div>
                  </div>
                  <div>
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </div>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出系统</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <el-container direction="horizontal">
        <el-aside :width="sideWidth"
          ><el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapsed"
            :collapse-transition="false"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import utils from "@/utils/utils";
import config from "@/store/config";

const theme = config.theme;

const isCollapsed = ref(false);

const sideWidth = ref("200px");
const headerHeight = ref("60px");

const collapse = () => {
  isCollapsed.value = !isCollapsed.value;
  sideWidth.value = isCollapsed.value ? "64px" : "200px";
};
</script>

<style scoped>
.theme-default .layout .el-header {
  position: relative;
  background-color: #fff;
  color: var(--el-text-color-primary);
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #eee;
}

.theme-default .layout .el-header .logo {
  line-height: v-bind(headerHeight);
  font-size: 20px;
  letter-spacing: 1px;
  width: v-bind(sideWidth);
  text-align: center;
  height: v-bind(headerHeight);
  overflow: hidden;
}

.theme-default .layout .el-header .tools {
  /* width: 250px; */
  text-align: center;
}

.theme-default .layout .el-header .tools .tool-item {
  font-size: 16px;
  line-height: v-bind(headerHeight);
  cursor: pointer;
  width: 40px;
}

.theme-default .layout .el-header .tools .tool-item:hover {
  color: #fff;
  background-color: #ff5722;
}

.theme-default .layout .el-header .tools .tool-item:hover:deep(.el-dropdown-link) {
  color: #fff;
  background-color: #ff5722;
}
.theme-default .layout .el-header .tools .userinfo-item {
  width: 100px;
  line-height: v-bind(headerHeight);
  padding: 0 5px;
}
.theme-default
  .layout
  .el-header
  .tools
  .userinfo-item:deep(.el-dropdown-link) {
  line-height: v-bind(headerHeight);
}
.theme-default .layout .el-header .tools .userinfo-item:deep(.username) {
  font-size: 14px;
  min-width: 60px;
  margin-left: 5px;
}

.theme-default .layout .el-header .menu-expand-btn {
  line-height: 60px;
  width: 60px;
  cursor: pointer;
  font-size: 20px;
}

.theme-default .layout .el-header .menu-expand-btn:hover {
  color: #ff5722;
}
.theme-default .layout .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.theme-default .layout .el-menu {
  border-right: none;
  height: calc(100vh - v-bind(headerHeight));
  background-color: #f8f8f8;
}
.theme-default .layout .el-main {
  padding: 0;
  height: calc(100vh - v-bind(headerHeight));
  background-color: #fff;
}
</style>

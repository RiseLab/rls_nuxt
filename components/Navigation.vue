<template>
  <v-navigation-drawer clipped fixed app v-model="navigation.show">
    <v-list>
      <template v-for="(item, i) in navigation.items">
        <template v-if="item.children">
          <v-list-group :prepend-icon="item.icon" :value="item.open">
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-for="(child, j) in item.children" :key="j" router :to="child.to" exact>
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="child.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-avatar size="auto" class="light-blue white--text px-2 ml-3">
                {{ child.count }}
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile :key="i" router :to="item.to" exact>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Navigation',

    props: {
      navigation: Object
    }
  }
</script>

<style scoped>
.v-list__tile__avatar {
  border-radius: 3px;
  font-size: 13px;
  min-width: auto;
}
</style>

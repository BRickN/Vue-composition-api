<template>
  <div class="stats">
    <h1>Stats</h1>
    <table class="table">
      <thead class="table-header">
        <tr class="table-header-row">
          <th class="header__item">Stat</th>
          <th class="header__item">Value</th>
        </tr>
      </thead>
      <tbody class="table-content">
        <tr class="table-row">
          <td class="table-data">Number of Notes</td>
          <td class="table-data">{{ totalNotesCount }}</td>
        </tr>
        <tr class="table-row">
          <td class="table-data">Number of Characters (of all notes)</td>
          <td class="table-data">{{ totalCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input type="text" placeholder="Do you love notebook?" v-autofocus v-model="inputText" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useNotesStore } from '@/stores/useNotesStore'

const inputText = ref<string>()
const { totalNotesCount, totalCharacters } = useNotesStore()
</script>

<style scoped>
.table {
  width: 100%;
  border: 1px solid var(--vt-c-navy);
}

.table-header {
  display: flex;
  width: 100%;
  background: var(--vt-c-navy);
  padding: 18px 0;
}

.table-header-row {
  display: flex;
  width: 100%;
}

.table-row {
  display: flex;
  width: 100%;
  padding: 18px 0;

  &:nth-of-type(odd) {
    background: var(--vt-c-white-soft);
  }
}

.table-data,
.header__item {
  flex: 1 1 20%;

  text-align: center;
}

.header__item {
  text-transform: uppercase;
  color: var(--vt-c-white-soft);
}
</style>

<template>
  <div class="form-container">
    <textarea rows="8" class="note-area" placeholder="Write your note..."></textarea>
    <div class="btn-container">
      <button class="btn">Submit</button>
      <button class="btn">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--vt-c-blue);
  border-radius: 5px;
}
.note-area {
  border-radius: 3px;
}
.btn-container {
  display: flex;
  gap: 10px;
  margin: 1rem 0 0 0;
}
</style>

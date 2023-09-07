<script>
export default {name: 'TabGroup'}
</script>

<template>
    <div class="tab-group">
        <slot></slot>
    </div>
</template>
  
<style scoped>
.tab-group {
    max-width: max-content;
    display: flex;
    align-items: center;
    gap: 34px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--secondary-text);
}
</style>
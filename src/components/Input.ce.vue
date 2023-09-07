<script>
export default {
    name: 'Input',
    props: {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        inputClass() {
            return ['awc-input', `${this.color}`];
        },
        computedPlaceholder() {
            return this.placeholder || 'Введите ссылку';
        }
    }
};
</script>


<template>
    <input 
    :class="inputClass" 
    type="text" 
    :name="name" 
    :id="id" 
    :placeholder="computedPlaceholder" />
</template>
  
<style scoped>
.awc-input {
    padding: 13px 0 13px 16px;
    border-radius: 5px;
    border: none;
    color: var(--secondary-text);
    background: var(--input-background);
}

.awc-input:focus-visible {
    outline: 1px solid var(--secondary-text);
}

.red {
    background: red;
    color: white;
}

.purple {
    background: purple;
    color: white;
}
</style>
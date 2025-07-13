<template>
  <div class="relative">
    <component :is="componentType" v-bind="linkProps" :class="buttonClasses" @click="handleClick">
      <component :is="icon" class="w-5 h-5 text-text" />
      <span class="font-medium text-text">{{ label }}</span>
    </component>

    <button
      v-if="copyable"
      @click="handleCopy"
      class="absolute -top-1 -right-1 p-1 bg-background border border-border rounded hover:border-greenAccent hover:bg-border transition-colors"
      :title="`Copy ${label.toLowerCase()}`"
    >
      <Copy class="w-3 h-3 text-text" />
    </button>

    <div
      v-if="showFeedback"
      class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-greenAccent text-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap"
    >
      {{ feedbackText }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Copy } from "lucide-vue-next";

const props = defineProps({
  label: String,
  icon: Object,
  href: String,
  copyText: String,
  copyable: { type: Boolean, default: false },
});

const showFeedback = ref(false);

const componentType = computed(() => (props.href ? "a" : "button"));

const linkProps = computed(() => {
  if (!props.href) return {};
  return {
    href: props.href,
    target: props.href.startsWith("mailto:") ? undefined : "_blank",
    rel: props.href.startsWith("mailto:") ? "noopener noreferrer" : "noopener",
  };
});

const buttonClasses =
  "flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent transition-colors";

const feedbackText = computed(() => `${props.label} copied!`);

const handleClick = (event) => {
  if (!props.href && props.copyable) {
    handleCopy(event);
  }
};

const handleCopy = async (event) => {
  event.preventDefault();

  try {
    await navigator.clipboard.writeText(props.copyText);
    showFeedback.value = true;
    setTimeout(() => {
      showFeedback.value = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
    fallbackCopy();
  }
};

const fallbackCopy = () => {
  const textArea = document.createElement("textarea");
  textArea.value = props.copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  showFeedback.value = true;
  setTimeout(() => {
    showFeedback.value = false;
  }, 2000);
};
</script>

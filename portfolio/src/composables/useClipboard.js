import { ref } from "vue";

export function useClipboard() {
  const isSupported = navigator?.clipboard?.writeText;

  const copy = async (text) => {
    if (!text) return false;

    try {
      if (isSupported) {
        await navigator.clipboard.writeText(text);
      } else {
        fallbackCopy(text);
      }
      return true;
    } catch (error) {
      console.error("Copy failed:", error);
      fallbackCopy(text);
      return true;
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return { copy };
}

export function useCopyFeedback(duration = 2000) {
  const showFeedback = ref(false);

  const triggerFeedback = () => {
    showFeedback.value = true;
    setTimeout(() => {
      showFeedback.value = false;
    }, duration);
  };

  return { showFeedback, triggerFeedback };
}

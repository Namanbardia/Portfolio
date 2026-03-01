import { ref, watch, onMounted } from 'vue';

export function useTheme() {
    const theme = ref('default');

    const toggleTheme = () => {
        theme.value = theme.value === 'default' ? 'emerald' : 'default';
    };

    // onMounted(() => {
    //     const savedTheme = localStorage.getItem('app-theme');
    //     if (savedTheme) {
    //         theme.value = savedTheme;
    //     }
    // });

    watch(theme, (newTheme) => {
        localStorage.setItem('app-theme', newTheme);
        if (newTheme === 'emerald') {
            document.documentElement.setAttribute('data-theme', 'emerald');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });

    return {
        theme,
        toggleTheme,
    };
}

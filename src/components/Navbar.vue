<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Naman <span class="font-black">Portfolio</span>
        </div>
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none p-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300" @click="isMenuOpen = !isMenuOpen">
                <div class="relative w-6 h-6">
                    <span : class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? 'rotate-45 top-3' : 'top-1',                        
                    ]"></span>

                    <span : class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? 'opacity-0' : 'top-3 opacity-100',                        
                    ]"></span>

                    <span : class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? '-rotate-45 top-3' : 'top-5',                        
                    ]"></span>
                </div>
            </button>
        </div>
        <nav>
            
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
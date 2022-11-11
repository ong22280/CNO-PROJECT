<template>
    <div>
        <div class="bg-cyan-900">
            <nav class="
            container
            py-2
            mx-auto
            md:flex md:justify-between md:items-center
          ">
                <div class="flex items-center justify-between">

                    <a href="https://www.ku.ac.th/th">
                        <img class="
                        w-14
                        rounded-full 
                        animate-[wiggle_1s_ease-in-out_infinite]" 
                        src="../assets/images/ku.png"
                        alt="image description">
                    </a>
                    <!-- Mobile menu button -->
                    <div @click="showMenu = !showMenu" class="flex md:hidden">
                        <button type="button" class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                ">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>


                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul :class="showMenu ? 'flex' : 'hidden'" class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            ">
                    <li class="text-2xl  font-bold text-white hover:text-cyan-100 ">
                        HOME
                    </li>
                    <li class="text-2xl  font-bold text-white hover:text-cyan-100 ">
                        PROFILE
                    </li>
                    <li class="text-2xl  font-bold text-white hover:text-cyan-100 ">
                        FIREBASE
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>
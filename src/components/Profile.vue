<template>
  <div>
    <div
      class="text-center w-[240px] h-fit border border-yellow-500 rounded-md shadow-md p-3.5 scale-100 bg-yellow-200 overflow-hidden hover:scale-105 ease-in duration-100 hover:bg-yellow-100"
      :title="getName(name)"
    >
      <div class="relative content-center">
        <div>
          <img
            :src="getImage(image)"
            alt="Profile Image"
            title="Profile Image"
            class="rounded-full h-[210px] w-[210px] border border-black"
          />
        </div>
        <div class="text-yellow-900 font-bold text-[20px] mt-[7px]">
          {{ name }}
        </div>
        <div class="font-bold">
          {{ nickname }} <br />
          {{ inGameName }}
        </div>
        <div class="text-red-600">
          {{ team }}
          <p class="text-green-600 inline">{{ year }}</p>
        </div>
        <div>
          {{ birthday }}
        </div>
        <div>
          {{ studentID }}
        </div>
      </div>
      <div class="border-t-[3px] border-gray-800 mt-[4px] text-right">
        <div class="mt-[10px] space-x-[3px]">
          <a
            :href="getUrl(github)"
            target="_blank"
            title="Github"
            class="hover:text-white"
            ><font-awesome-icon
              icon="fa-brands fa-github"
              class="text-[25px] m-[5px]"
          /></a>
          <a
            :href="getUrl(facebook)"
            target="_blank"
            title="Facebook"
            class="hover:text-blue-500"
            ><font-awesome-icon
              icon="fa-brands fa-facebook"
              class="text-[25px] m-[5px]"
          /></a>
          <a
            :href="getUrl(instagram)"
            target="_blank"
            title="Instagram"
            class="hover:text-red-400"
            ><font-awesome-icon
              icon="fa-brands fa-instagram"
              class="text-[25px] m-[5px]"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "None",
    },
    nickname: {
      type: String,
      default: "None",
    },
    birthday: {
      type: String,
      default: "None",
    },
    team: {
      type: String,
      default: "None",
    },
    inGameName: {
      type: String,
      default: "None",
    },
    year: {
      type: String,
      default: "None",
    },
    image: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/04/43/94/65/360_F_443946521_H2fUJJyxk2YuqwQP1dUvg0JavzhanSOV.jpg",
    },
    facebook: {
      type: String,
      default: "facebook.com",
    },
    instagram: {
      type: String,
      default: "instagram.com",
    },
    github: {
      type: String,
      default: "github.com",
    },
    detail: {
      type: String,
      default: "None",
    },
    studentID: {
      type: String,
      default: "None",
    },
  },

  methods: {
    getUrlImage(imagePath) {
      return { "background-image": 'url(".src/' + imagePath + '")' };
    },
    getImage(imagePath) {
      let url = new URL(imagePath);
      return url;
    },
    getUrl(website) {
      let url = new URL(website);
      return website;
    },
    getName(name) {
      return name;
    },
  },
};
</script>

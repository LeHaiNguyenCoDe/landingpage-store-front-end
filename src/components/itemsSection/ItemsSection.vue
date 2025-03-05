<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <span class="text-[#616161] f-text-10-20">Share your setup with</span>
      <span class="f-text-16-40 text-[#3A3A3A] font-bold">#FuniroFurniture</span>
    </div>
    <div class="flex gap-1vw items-center">
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <a href="#"><img :src="items_01" alt="" class="w-12vw h-25vw"></a>
          <a href="#" class=" self-end"><img :src="items_02" alt="" class="w-33vw h-20vw"></a>
        </div>
        <div class="flex gap-1vw">
          <a href="#"><img :src="items_03" alt="" class="w-18vw h-20vw"></a>
          <a href="#"><img :src="items_04" alt="" class="w-27vw h-16vw"></a>
        </div>
      </div>
      <div class="w-fit">
        <a href="#"><img :src="items_05" alt="" class="h-25vw w-20vw"></a>
      </div>
      <div class="flex flex-col w-fit gap-1vw">
        <div class="flex gap-1vw">
          <a href="#" class=" self-end"><img :src="items_06" alt="" class="w-20vw h-23vw"></a>
          <a href="#"><img :src="items_07" alt="" class="w-10vw h-30vw"></a>
        </div>
        <div class="flex gap-1vw">
          <a href="#"><img :src="items_08" alt="" class="w-12vw h-15vw"></a>
          <a href="#"><img :src="items_09" alt="" class="w-18vw h-12vw"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import items_01 from "@/assets/items-image/items_01.png";
import items_02 from "@/assets/items-image/items_02.png";
import items_03 from "@/assets/items-image/items_03.png";
import items_04 from "@/assets/items-image/items_04.png";
import items_05 from "@/assets/items-image/items_05.png";
import items_06 from "@/assets/items-image/items_06.png";
import items_07 from "@/assets/items-image/items_07.png";
import items_08 from "@/assets/items-image/items_08.png";
import items_09 from "@/assets/items-image/items_09.png";
</script>

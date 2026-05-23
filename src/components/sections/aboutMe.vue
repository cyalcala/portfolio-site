<template>
  <section
    id="about-me-section"
    class="common-padding text-flax-smoke-200 relative z-10 overflow-y-clip rounded-b-3xl bg-[#0B0B0A] shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12">
      <div
        class="pointer-events-auto relative group overflow-hidden rounded-lg select-none col-span-full md:col-span-4 aspect-[1/1.5]"
      >
        <!-- Full color image (bottom) -->
        <img
          :src="profile2"
          class="absolute inset-0 size-full rounded-lg object-cover object-top transition-all duration-700 ease-in-out brightness-90"
          alt="Headshot of Cyrus Alcala facing a camera"
        />
        <!-- Grayscale/blend image (top) -->
        <img
          :src="profile2"
          class="absolute inset-0 size-full rounded-lg object-cover object-top transition-all duration-700 ease-in-out mix-blend-screen brightness-90 grayscale group-hover:opacity-0"
          alt="Headshot of Cyrus Alcala facing a camera"
        />
      </div>
      <div class="col-span-11 mt-10 md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          As an AI Builder and Technical Writer, I design and construct autonomous systems, automate business workflows, and author clear, developer-focused guides.
        </p>

        <div
          class="text-flax-smoke-300 mt-[5%] flex justify-start gap-10 sm:gap-20"
        >
          <p class="heading-6 text-flax-smoke-300/85 text-center text-nowrap">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            My primary focus is building intelligent systems that optimize operations and eliminate repetitive tasks. Using tools like n8n, Zapier, and GoHighLevel, I integrate webhooks, CRMs, and LLMs to create seamless automations. In parallel, I translate complex tech concepts into accessible documentation and articles. <br /><br />
            When I'm not writing code or building automations, you can find me publishing essays on Medium, sharing insights on LinkedIn, or reading about the latest in AI and software engineering.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { profile2 } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const aboutMe = ref('Selected Projects /');

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(
      'AI Builder, Automation Specialist, Technical Writer/',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>

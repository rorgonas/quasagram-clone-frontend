<script src="./install-banner.js"></script>
<style src="./install-banner.sass" lang="sass"></style>

<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="showBanner" class="banner-container bg-orange">
    <div class="constrain">
      <q-banner
        inline-actions
        dense
        class="bg-orange text-white"
      >
        <template v-slot:avatar>
          <q-avatar
            color="white"
            text-color="grey-10"
            icon="eva-camera-outline"
            font-size="22px"
          />
        </template>

        <b>Install App?</b>

        <template v-slot:action>
          <q-btn
            @click="installApp"
            flat
            dense
            label="Yes"
            class="q-px-sm"
          />
          <q-btn
            @click="showBanner = false"
            flat
            dense
            label="Later"
            class="q-px-sm"
          />
          <q-btn
            @click="neverShowAppInstallBanner"
            flat
            dense
            label="Never"
            class="q-px-sm"
          />
        </template>
      </q-banner>
    </div>
  </div>
  </transition>
</template>

<template>
  <div>
    <b-button v-b-modal.my-modal variant="success">Get the link</b-button>

    <!-- The modal -->
    <b-modal id="my-modal" hide-footer>
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center">
          <div class="iconCheck__wrapper">
            <b-icon-check2 class="iconCheck" />
          </div>
          <p class="ml-2">Uploaded Successfully</p>
        </div>

        <div class="d-flex align-items-center my-3">
          <div class="linkicon__wrapper">
            <b-icon-link class="linkicon" />
          </div>
          <input
            ref="downloadLinkInput"
            class="form-control mx-2"
            placeholder="Enter link..."
            :value="downloadLink"
          />
          <b-button @click="copyLink" variant="primary">Copy link</b-button>
        </div>

        <div class="social-icons">
          <b-icon-skype class="social-icon" />
          <b-icon-twitter class="social-icon" />
          <b-icon-facebook class="social-icon" />
          <b-icon-whatsapp class="social-icon" />
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    downloadLink: String, // Accept downloadLink as a prop
  
  },
  methods: {
    copyLink() {
      const inputElement = this.$refs.downloadLinkInput; // Get the input element
      inputElement.select(); // Select the text inside the input
      document.execCommand("copy"); // Copy the selected text to the clipboard
    },
  },
};
</script>

<style>
.iconCheck__wrapper,
.linkicon__wrapper {
  width: 10%;
}

.iconCheck,
.linkicon,
.social-icon {
  font-size: 24px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

/* Custom CSS to remove border of close button */
.modal-header .close {
  border: none;
}
</style>
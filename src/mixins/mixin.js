export default{
    methods:{
        toast(title, message, variant, autoHideDelay=1000) {
            this.$bvToast.toast(message, {
            title: title,
            toaster: 'b-toaster-top-center',
            solid: true,
            variant: variant,
            autoHideDelay: autoHideDelay,
            })
        },
        confirm(title, message) {
            return this.$bvModal.msgBoxConfirm(message, {
              title: title,
              size: 'sm',
              buttonSize: 'sm',
              okVariant: 'primary',
              okTitle: 'Si',
              cancelTitle: 'No',
              footerClass: 'p-2',
              hideHeaderClose: false,
              centered: true
            })
            
        }
    }
}
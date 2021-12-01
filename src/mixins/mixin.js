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
        confirm(title, message, okTitle = "Si", cancelTitle = "No", okVariant = "success") {
            return this.$bvModal.msgBoxConfirm(message, {
              title: title,
              size: 'md',
              buttonSize: 'md',
              okVariant: okVariant,
              okTitle: okTitle,
              cancelTitle: cancelTitle,
              footerClass: 'p-2',
              hideHeaderClose: false,
              centered: true
            })
            
        }
    }
}
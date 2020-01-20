
var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vm-socks-green.jpg",
        altText: "A pair of socks",
        inStock: true,
        // inventory: 20,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantId: 2244,
                variantColor: "green",
                variantImage: "./assets/vm-socks-green.jpg"
            },
            {
                variantId: 2245,
                variantColor: "blue",
                variantImage: "./assets/vm-socks-blue.jpg"
            },
        ],

        cart: 0,

    },
    methods: {
        // addToCart: function(){
        //     this.cart += 1;
        // },
        addToCart() {
            this.cart += 1;
        },
        DecreaseToCart() {
            if(this.cart < 0){
                this.cart = 0;
                alert('Not negative Number granted');
                
                
            }
            else
                {
                    this.cart -= 1;
                }
        },

        updateProduct(variantImage) {
            this.image = variantImage;
        },

    }
});
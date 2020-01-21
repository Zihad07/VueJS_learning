
var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Vue Mastery",
        selectedVariant: 0,
        onSale: true,
        altText: "A pair of socks",
        // inStock: false,
        // inventory: 20,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantId: 2244,
                variantColor: "green",
                variantImage: "./assets/vm-socks-green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2245,
                variantColor: "blue",
                variantImage: "./assets/vm-socks-blue.jpg",
                variantQuantity: 0
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

        updateProduct(index) {
            this.selectedVariant = index;
            console.log(this.selectedVariant);
        },

    },

    computed: {
        title(){
            return this.brand +  ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});
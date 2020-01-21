Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product d-flex justify-content-between alings-center">
    <div class="product-imgage" class="width:300px; height:300px">
        <!-- <img v-bind:src="image" v-bind:alt="altText"> -->
        <img :src="image" :alt="altText">
    </div>

    <div class="product-info">
        <h2 v-show="onSale">{{ title }}</h2>

        <p v-if="inStock">In Stock</p>
        <p v-else :class='{"outOfStock": !inStock}'>Out of Stock</p>

        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p> -->

        <p>Shipping: {{ shipping }}</p>

        <ul class="list-group">
            <l v-for="detail in  details" class="list-group-item">
                >> {{ detail }}
            </l>
        </ul>

        <div class="color-box" v-for="(variant,index) in variants"
            :style="{ backgroundColor: variant.variantColor}"
            @mouseover="updateProduct(index)">
            
        </div>

        <div class="cart">
            <p>Card({{ cart }})</p>
        </div>

        <button v-on:click="addToCart"
         :disabled="!inStock"
         >
         (+) Add to cart
        </button>
        <button v-on:click="DecreaseToCart"
            :class="{disabledButton: !inStock}"
            >
            (-) Decrease to cart
        </button>
    </div>
</div>
    `,

    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            onSale: true,
            altText: "A pair of socks",
            // inStock: false,
            // inventory: 20,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],

            variants: [{
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
        }
    },
    methods: {
        // addToCart: function(){
        //     this.cart += 1;
        // },
        addToCart() {
            this.cart += 1;
        },
        DecreaseToCart() {
            if (this.cart < 0) {
                this.cart = 0;
                alert('Not negative Number granted');


            } else {
                this.cart -= 1;
            }
        },

        updateProduct(index) {
            this.selectedVariant = index;
            console.log(this.selectedVariant);
        },

    },

    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },

        shipping(){
            return this.premium == true ? "Free" : 2.99;
        }
    }
});


var app = new Vue({
    el: '#app',

    data: {
        premium: true,
    }
})
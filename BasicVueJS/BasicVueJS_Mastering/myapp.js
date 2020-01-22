Vue.component('product', {
    // props: [premium];
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

     
        <button v-on:click="addToCart"
         :disabled="!inStock"
         >
         (+) Add to cart
        </button>
        <button v-on:click="deleteToCart"
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

           
        }
    },
    methods: {
        // addToCart: function(){
        //     this.cart += 1;
        // },
        addToCart() {
            // this.cart += 1;
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
        },
        deleteToCart() {

            this.$emit('delete-to-cart');
            // if (this.cart < 0) {
            //     this.cart = 0;
            //     alert('Not negative Number granted');


            // } else {
            //     this.cart -= 1;
            // }
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

Vue.component('product-review',{
    template:`
    <div class="card card-body p-2 my-2">

    <p v-if="errors.length">
        <b>Please correct the following error(s)</b>
        <ul class="list-group">
            <li v-for="error in errors" class="list-group-item">
                {{ error }}
            </li>
        </ul>
    </p>
    <form action="" @submit.prevent="onSubmit">
        <div class="from-group">
            <label for="name">Name:</label>
            <input v-model="name" class="form-control" type="text" id="name" placeholder="name">
        </div>
        <div class="from-group">
            <label for="review">Review:</label>
            <textarea v-model="review" id="review" cols="15" rows="5" class="form-control"></textarea>
        </div>

        <div class="form-group">
            <label for="rating">Rating</label>
            <select id="rating" v-model.number="rating" class="form-control">
                <option >5</option>
                <option >4</option>
                <option >3</option>
                <option >2</option>
                <option >1</option>
            </select>
        </div>

        <div class="form-group">
            <input type="submit" class="btn btn-primary btn-block" value="Submit">
        </div>


    
    </form>
</div>
    `,

    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },

    methods: {
        onSubmit() {
            if(this.name && this.review && this.rating ){
                let produceReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };
    
                // send review
                this.$emit('review-submitted',produceReview);
    
                // reset review value
                this.name = null;
                this.review = null;
                this.rating = null;
                this.errors = []
            }else{
                if(this.errors.length) {
                    this.errors = []
                }
                if(!this.name) {
                    this.errors.push("Name required");
                }
                if(!this.review) {
                    this.errors.push("Review Required");
                }
                if(!this.rating) {
                    this.errors.push("Rating required");
                }
            }

        },

        reviewsReset() {
            this.errors = []
        }
    }
})


var app = new Vue({
    el: '#app',

    data: {
        premium: true,
        cart: [],
        reviews: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        deleteCart(){
            if(this.cart.length > 0){
                this.cart.pop();
            }else{
                alert('No item exit to Unselect.');
                return;
            }

        },
        addReview(productReview) {
            this.reviews.push(productReview);
        },

        
    }
})
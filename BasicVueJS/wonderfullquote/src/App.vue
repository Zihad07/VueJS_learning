<template>
  <div class="container py-4">
      <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @deletedQuote="deleteQuote"></app-quote-grid>
      <app-delete-info></app-delete-info>

  </div>
</template>

<script>
  import QuoteGrid from "./QuoteGrid.vue";
  import NewQuote from "./NewQuote";
  import DeleteInfo from "./DeleteInfo";
  import Header from "./Header"
  export default {
    data() {
      return {
        quotes: [
          'This Simple Quote'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {

        if(quote.trim().length === 0){
          alert('Not Take Empty Quote...');
          return;
        }
        if(this.quotes.length >= this.maxQuotes) {
          alert('Please Delete At least One Quote BeFore Added.');
          return;
        }
        //new quote added
        this.quotes.push(quote.trim());
      },
      deleteQuote(quoteIndex) {
        this.quotes.splice(quoteIndex,1);
      }
    },

    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appDeleteInfo:DeleteInfo,
      appHeader: Header
    },


  }
</script>

<style>

</style>

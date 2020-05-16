<script>
    import Product from "./Product.svelte";
    import Modal from "./Modal.svelte";

    let showModal = false;
    let products = [
        {
            id: "p1",
            title: "A boo",
            price: 9.99
        }
    ];

    function addToCart(event) {
        console.log(event);
    }

    function deleteProduct(event) {
        console.log(event.detail);
    }
</script>

{#each products as product}
    <Product
            {...product}
            on:add-to-cart={addToCart}
            on:delete={deleteProduct}/>
{/each}


<button on:click={() => showModal = true}>Show modal</button>

{#if showModal}
  <Modal>
      <header slot="header">
          header
      </header>
      <div class="body" slot="body">body</div>
  </Modal>
{/if}

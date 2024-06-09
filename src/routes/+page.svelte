<script>
	import { onMount } from 'svelte';
  
	let showTitle = false;
  
	onMount(() => {
	  setTimeout(() => {
		showTitle = true;
	  }, 1000); // 5 seconds
	});
  </script>
  
  <style>
	h1 {
	  font-size: 13rem;
	  text-align: center;
	  opacity: 0;
	  transition: opacity 0.5s ease-in-out;
	}
/* body{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  font: normal bold 6.5rem / 1.2 'Poppins', 'Helvetica', sans-serif;
  text-align: center; 
} */
.title{
  text-transform: uppercase; 
  background-image: linear-gradient(to right, #00F260, #f79d00, #0575E6, #64f38c);
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent;
  
  background-size: 300%;
  background-position: -100%;  
  
  animation: animatedText 5s infinite alternate-reverse;
}

@keyframes animatedText{
  to{
    background-position: 100%; 
  }
}
  </style>
  
  <h1 class="title" style="opacity: {showTitle ? 1 : 0}">QuickAff</h1>
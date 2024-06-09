<!-- Navbar.svelte -->
<script>
    import "./styles.css";
    export let menus = ["Admin","Sign Up", "Login"];
  
    function handleClick(menuItem) {
      // You can implement the logic here for handling menu item clicks
      console.log(`Clicked ${menuItem}`);
    }
  </script>
  
  <div class="navbar">
    <a href="/" class="sitename">QuickAff</a>
    <div class="navbarbuttons">
        <!-- {#each menus as menu}
          <a href="/{menu.replace(/\s/g, "").toLowerCase()}">{menu}</a>
        {/each} -->
        <a href="/admin" class="rightnav">Admin</a>
        <a href="/member/signup" class="rightnav">Sign Up</a>
        <a href="/member/login" class="rightnav">Login</a>
    </div>
  </div>

  <style>
    .sitename {
      color:var(--primary);
      padding-left: 20px;
      font-size: 1.875rem;
      text-decoration: none;
      font-weight: bold;
    }

    .navbar {
      display: flex;
      background-color: var(--background);
      justify-content: space-between;
      z-index: 1000; /* Ensure the navbar appears above other content */
      padding: 15px;
    }

    .navbarbuttons {
      display: flex;
      justify-content: space-evenly;
      padding: 15px;
    }

    .navbar .rightnav {
      color: var(--text);
      text-decoration: none;
      margin-left: auto;
      display: flex;
      padding: 10px;

      /* flex-wrap: wrap; */
    }

    .navbar .rightnav:hover {
      filter: brightness(0.8);
    }

    :global(body) {
      margin: 0;
    }
  </style>
  
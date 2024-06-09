<!-- <script>
    import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<form method="POST" action="?/create">
		<label>
			add a todo:
			<input
				name="description"
				value={form?.description ?? ''}
				autocomplete="off"
				required
			/>
		</label>
	</form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li in:fly={{ y: 20 }} out:slide>
				<form method="POST" action="?/delete">
					<input type="hidden" name="id" value={todo.id} />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete"></button>
				</form>
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style> -->

<script>
    let firstName = '';
    let lastName = '';
    let email = '';
    let employeeId = '';
    let department = '';
  
    const departments = [
      'Finance',
      'Human Resources',
      'Marketing',
      'Operations',
      'Sales'
    ];

    async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
formData.append('firstName', firstName);
formData.append('lastName', lastName);
formData.append('email', email);
formData.append('employeeId', employeeId);
formData.append('department', department);

    try {
    
      const response = await fetch('/member/signup?/create', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert("User created successfully.");
        console.log('User created successfully!');
      } else {
        console.error('Failed to create user.');
        console.log(response);
        alert("Error creating user: The employee ID might not be unique.");
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert("Error creating user: ", error);
    }
    console.log('Submitted:', { firstName, lastName, email, employeeId, department });
    

  }

    export let data;
    export let form;
  </script>
  
  <style>
    input:invalid {
    border: 2px dashed red;
    }

    input:valid {
    border: 2px solid black;
    }

    form {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 0 auto;
    }
  
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
  
    input[type="text"],
    input[type="email"],
    select {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
    }
  
    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
  
    button[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
  <div class="container">
    {#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      First Name:
      <input type="text" bind:value={firstName} required />
    </label>
    <label>
      Last Name:
      <input type="text" bind:value={lastName} required />
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
    <label>
      Employee ID:
      <input type="text" minlength="10" maxlength="10" bind:value={employeeId} required />
    </label>
    <label>
      Department:
      <select bind:value={department} required>
        {#each departments as dept}
          <option value={dept}>{dept}</option>
        {/each}
      </select>
    </label>
    <button type="submit">Submit</button>
  </form>
  </div>
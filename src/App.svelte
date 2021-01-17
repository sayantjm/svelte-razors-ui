<script>
	// pages
	import Login from './pages/Login.svelte';
	import About from './pages/About.svelte';
	import Checkout from './pages/Checkout.svelte';
	import Home from './pages/Home.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';

	// router
	import {Router, Route, Link} from 'svelte-routing';

	// components
	import NavBar from './components/NavBar/NavBar.svelte';
	import SideBar from './components/NavBar/SideBar.svelte';
	import Cart from './components/Cart/Cart.svelte';
	import Alert from './components/Alert.svelte';

	// global store
	import globalStore from './stores/globalStore';

</script>

<Router>
	<NavBar />
	{#if $globalStore.sidebar}
		<SideBar />	
	{/if}
	{#if $globalStore.cart}
		<Cart />	
	{/if}
	{#if $globalStore.alert}
		<Alert />
	{/if}
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/checkout" component={Checkout} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplate} />
</Router>

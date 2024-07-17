<script lang="ts">
	import '../app.css';

	import { Navbar } from '$lib';
	import type { Organization } from '$lib/types';

	export let data: {
		organization: Organization;
	};
</script>

<div>
	<Navbar followers={data.organization.followers} />
	<slot />
</div>
